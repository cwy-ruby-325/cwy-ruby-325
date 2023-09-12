import ProjectCardDesktop from './ProjectCard_Desktop';
import { Card } from '../../interfaces/Card_Interface';

interface ProjectCardViewProps {
  data: Card[];
}

const ProjectCardViewDesktop: React.FC<ProjectCardViewProps> = ({ data }) => {
  return (
    <div className="row g-4">
      {data.map((card, index) => (
        <ProjectCardDesktop key={index} {...card} />
      ))}
    </div>
  );
};
export default ProjectCardViewDesktop;
