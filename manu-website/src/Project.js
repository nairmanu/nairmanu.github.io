import "./Project.css";
import Technology from "./Technology";

const Project = ({ project }) => {
  const { title, description, images, technologies } = project;
  return (
    <div className="project-container">
      <div className="project-title">{title}</div>
      <div className="project-image-description">
        <div className="project-image-container">
          <img
            src={`${process.env.PUBLIC_URL}${images[0]}`}
            alt="sample"
            className="project-image"
          />
        </div>
        <div className="project-description-technology">
          <div className="project-description">{description}</div>
          <h3>Technologies used</h3>
          <div className="tech-list">
            {technologies.map((tech, index) => {
              return <Technology key={index} tech={tech} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
