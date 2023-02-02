import ProjectPreview from "./ProjectPreview";

const ProjectsList = ({projects}) => {
  return (
      <div className="projects-container">
        {projects.map(project => (
          <ProjectPreview project={project} key={project.id} />
        ))}
      </div>
  );
}
 
export default ProjectsList;