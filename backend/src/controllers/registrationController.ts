import { Request, Response } from 'express';
import { TeamRegistration } from '../models/TeamRegistration.js';
import { sendConfirmationEmail } from '../utils/email.js';

const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const isValidPhone = (phone: string) => /^\d{10}$/.test(phone);
const isUndergrad = (year: string) => ['FE', 'SE', 'TE', 'BE', '1st Year', '2nd Year', '3rd Year', '4th Year'].includes(year);

export const registerTeam = async (req: Request, res: Response) => {
  try {
    const { teamName, teamSize, leader, members } = req.body;

    // 1. Basic Validation
    if (!teamName || !teamSize || !leader || !members) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    if (teamSize < 4 || teamSize > 5) {
      return res.status(400).json({ message: 'Team size must be exactly 4 or 5 members' });
    }

    if (members.length + 1 !== teamSize) {
      return res.status(400).json({ message: 'Number of members provided does not match team size' });
    }

    // 2. Leader Validation
    if (!isValidEmail(leader.email)) return res.status(400).json({ message: 'Invalid leader email format' });
    if (!isValidPhone(leader.phone)) return res.status(400).json({ message: 'Invalid leader phone format (10 digits required)' });
    if (!isUndergrad(leader.year)) return res.status(400).json({ message: 'Leader must be an undergraduate student' });

    // 3. Members Validation
    const allEmails = new Set([leader.email.toLowerCase()]);
    
    for (const member of members) {
      if (!isValidEmail(member.email)) return res.status(400).json({ message: `Invalid email format for member ${member.fullName}` });
      if (!isValidPhone(member.phone)) return res.status(400).json({ message: `Invalid phone format for member ${member.fullName}` });
      if (!isUndergrad(member.year)) return res.status(400).json({ message: `Member ${member.fullName} must be an undergraduate student` });
      
      const lowerEmail = member.email.toLowerCase();
      if (allEmails.has(lowerEmail)) {
        return res.status(400).json({ message: `Duplicate email found within the team: ${member.email}` });
      }
      allEmails.add(lowerEmail);
    }

    // 4. Check if leader email already registered
    const existingLeader = await TeamRegistration.findOne({ 'leader.email': leader.email.toLowerCase() });
    if (existingLeader) {
      return res.status(400).json({ message: 'A team with this leader email is already registered' });
    }

    // 5. Save Registration
    const newRegistration = new TeamRegistration({
      teamName,
      teamSize,
      leader,
      members
    });

    await newRegistration.save();

    // 6. Send Confirmation Email
    const firstMemberIdea = members[0]?.ideaTitle || 'Not specified';
    await sendConfirmationEmail(
      leader.email,
      leader.fullName,
      teamName,
      firstMemberIdea,
      newRegistration._id.toString()
    );

    res.status(201).json({
      message: 'Registration successful',
      registrationId: newRegistration._id
    });

  } catch (error: any) {
    console.error('Registration error:', error);
    if (error.name === 'ValidationError') {
      return res.status(400).json({ message: error.message });
    }
    res.status(500).json({ message: 'Internal server error during registration' });
  }
};

export const checkStatus = async (req: Request, res: Response) => {
  try {
    const { leaderEmail } = req.params;
    
    if (!isValidEmail(leaderEmail)) {
      return res.status(400).json({ message: 'Invalid email format' });
    }

    const registration = await TeamRegistration.findOne({ 'leader.email': leaderEmail.toLowerCase() });
    
    if (!registration) {
      return res.status(404).json({ message: 'Registration not found for this email' });
    }

    res.json({
      teamName: registration.teamName,
      status: registration.status,
      submittedAt: registration.createdAt
    });

  } catch (error) {
    console.error('Status check error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
