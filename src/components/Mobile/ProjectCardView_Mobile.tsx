import ProjectCardMobile from './ProjectCard_Mobile';
import { Card } from '../../interfaces/Card_Interface';

interface ProjectCardViewProps {
  data: Card[];
}

const ProjectCardViewMobile: React.FC<ProjectCardViewProps> = ({ data }) => {
  return (
    <div className="d-flex flex-column px-2 gap-2">
      {data.map((card, index) => (
        <ProjectCardMobile key={index} {...card} />
      ))}
    </div>
  );
};
export default ProjectCardViewMobile;
