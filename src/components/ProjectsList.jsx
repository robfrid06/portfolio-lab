import ProjectPreview from "./ProjectPreview";

const ProjectsList = ({projects}) => {
  return (
      <div>
        {projects.map(project => (
          <ProjectPreview project={project} key={project.id} />
        ))}
      </div>
  );
}
 
export default ProjectsList;