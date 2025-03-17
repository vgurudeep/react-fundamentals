import { FaGithub } from "react-icons/fa";

function ProjectCard({ title, description, url, source, tags, imageUrl }) {
  return (
    <div className="project-card">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="project-image-container"
      >
        <img src={imageUrl} alt={title} className="project-image" />
        <h3 className="project-title">{title}</h3>
      </a>
      <div className="project-card-content">
        <p className="project-description">{description}</p>
        <ul className="project-tags">
          {tags.map((tag, idx) => {
            return (
              <li className="tag" key={idx}>
                {tag}
              </li>
            );
          })}
        </ul>
        <div className="project-links">
          <a
            href={source}
            target="_blank"
            rel="noopener noreferrer"
            className="project-source"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
