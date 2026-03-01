import { TeamPageLayout } from '../components/team/TeamPageLayout';
import { IEN_CORE_LEADERSHIP } from '../constants/teamData';

export default function Team() {
  return (
    <TeamPageLayout 
      title="IEN Core Leadership" 
      subtitle="The governing body driving innovation and entrepreneurship at PCCOE."
      members={IEN_CORE_LEADERSHIP}
    />
  );
}
