import { Router } from 'express';
import { registerTeam, checkStatus } from '../controllers/registrationController.js';
import { loginAdmin, getAllRegistrations, updateTeamStatus, exportRegistrations } from '../controllers/adminController.js';
import { authenticateAdmin } from '../middleware/auth.js';

const router = Router();

// Public Routes
router.post('/ennovatex/register', registerTeam);
router.get('/ennovatex/status/:leaderEmail', checkStatus);

// Admin Routes
router.post('/admin/login', loginAdmin);
router.get('/admin/registrations', authenticateAdmin, getAllRegistrations);
router.patch('/admin/update-status/:id', authenticateAdmin, updateTeamStatus);
router.get('/admin/export', authenticateAdmin, exportRegistrations);

export default router;
