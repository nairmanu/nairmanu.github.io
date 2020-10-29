import "./ProjectList.css";
import projects from "./projects.json";
import Project from "./Project";

const ProjectList = () => {
  return (
    <div className="project-list-container">
      <h2 className="project-list-header">My Projects</h2>
      {projects.map((project) => {
        return <Project key={project.id} project={project} />;
      })}
    </div>
  );
};

export default ProjectList;
