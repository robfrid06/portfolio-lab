import { projectFinder } from "../utilities/findProject";
import { useParams } from "react-router-dom";

const ProjectDetails = () => {
  const { projectTitle } = useParams()
  
  const project = projectFinder(projectTitle)

  return (
    <main>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <div className="screenshot">
        <img src={project.image} alt={project.title} />
      </div>
      <div className="links-container">
        <a href={project.repositoryLink} target="_blank" rel="noreferrer"><i className="devicon-github-original"></i></a>
        <a href={project.deploymentLink} target="_blank" rel="noreferrer"><i className="fas fa-regular fa-globe"></i></a>
      </div>
    </main>
  );
}
 
export default ProjectDetails;