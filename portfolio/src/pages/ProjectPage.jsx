import { useParams } from "react-router-dom";
import BtnGitHub from "../components/buttonGitHub/btnGitHub";
import { projects } from "../helpers/projectList";

const ProjectPage = () => {
  const { id } = useParams();
  const project = projects[id];
  console.log(project);
  return (
    <main className="section">
      <div className="container">
        <div className="project-details">
          <h1 className="title-1">{project.title}</h1>
          {project.deploy ? (
            <a
              href={project.deploy}
              // className="btn btn--outline"
              target="_blank"
              rel="noreferrer"
              title="Live Demo"
            >
              <img
                src={project.imgBig}
                alt={project.title}
                className="project-details__cover"
              />
            </a>
          ) : (
            <img
              src={project.imgBig}
              alt={project.title}
              className="project-details__cover"
            />
          )}

          <div className="project-details__desc">
            <p>Skills: {project.skills}</p>
          </div>
          <BtnGitHub link={project.link} />
        </div>
      </div>
    </main>
  );
};

export default ProjectPage;
