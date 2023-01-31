import { projects } from "../data/projects";
import ProjectsList from "../components/ProjectsList";

const Projects = () => {
  return (
    <main>
      <h1>Projects</h1>
      <ProjectsList projects={projects} />
    </main>
  );
}
 
export default Projects;