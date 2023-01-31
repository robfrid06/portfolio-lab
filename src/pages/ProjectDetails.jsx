import { projects } from "../data/projects";
import { projectFinder } from "../utilities/findProject";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const ProjectDetails = () => {
  const { projectTitle } = useParams()
  
  const project = projectFinder(projectTitle)

  return (
    <main>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <img src={project.image} alt={project.title} />
      <Link to={project.repositoryLink}><i className="devicon-github-original colored"></i></Link>
      <Link to={project.deploymentLink}>App</Link>
    </main>
  );
}
 
export default ProjectDetails;