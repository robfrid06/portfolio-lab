import { projects } from "../data/projects";
import ProjectsList from "../components/ProjectsList";

const Projects = () => {
  return (
    <div className="page-section">
      <section id="projects">
        <h1>Projects</h1>
        <ProjectsList projects={projects} />
      </section>
    </div>
  );
}
 
export default Projects;