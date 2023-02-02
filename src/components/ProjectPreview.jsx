import { hyphenator } from "../utilities/hyphenateWords";
import { Link } from "react-router-dom";

const ProjectPreview = ({project}) => {
  return (
    <div className="project-card">
      <img src={project.image} alt={project.title} />
      <h3>{project.title}</h3>
      <Link to={`/projects/${hyphenator(project.title)}`}><button>Learn More</button></Link>
    </div>
  );
}
 
export default ProjectPreview;