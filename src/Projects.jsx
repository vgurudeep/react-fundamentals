import ProjectCard from "./ProjectCard";
import axios from "axios";
import { useState, useEffect } from "react";

const SPACE_ID = "fokul7ii8n50";
const CONTENT_TYPE = "projectData";
const ACCESS_TOKEN = import.meta.env.VITE_ACCESS_TOKEN;

const fetchData = async () => {
  try {
    const response = await axios.get(
      `https://cdn.contentful.com/spaces/${SPACE_ID}/environments/master/entries`,
      {
        params: {
          access_token: ACCESS_TOKEN,
          content_type: CONTENT_TYPE,
          include: 2,
        },
      }
    );

    const items = response.data.items;
    const assets = response.data.includes.Asset;
    const assetMap = {};
    assets.forEach((asset) => {
      assetMap[asset.sys.id] = asset.fields.file.url;
    });

    return items.map((item) => ({
      id: item.sys.id,
      title: item.fields.title,
      description: item.fields.description,
      url: item.fields.url,
      source: item.fields.sourcecode,
      tags: item.fields.tags,
      imageUrl: `https:${assetMap[item.fields.thumbnail.sys.id]}`,
    }));
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

function Projects() {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const data = await fetchData();
      setProjects(data.reverse());
      setIsLoading(false);
    };
    getData();
  }, []);

  return (
    <div className="projects-container" id="projects">
      <h1 className="projects-heading">Projects</h1>
      <div>
        {isLoading ? (
          <h3 className="loading">Projects are loading...</h3>
        ) : (
          <div className="projects-grid">
            {projects.map((project) => {
              const { id, title, description, url, source, tags, imageUrl } =
                project;
              return (
                <ProjectCard
                  key={id}
                  title={title}
                  description={description}
                  url={url}
                  source={source}
                  tags={tags}
                  imageUrl={imageUrl}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
export default Projects;
