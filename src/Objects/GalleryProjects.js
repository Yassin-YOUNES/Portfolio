import React, { useState, useEffect } from 'react';
import Data from '../Data/Projects.json';
import { ProjectsContainer, ProjectSquare, ProjectDetail } from '../styles/Components/StyledComponents.js'; // Adjust the path as necessary
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

function DetailPopup({ project, isShown, setProject }) {
    const [markdownText, setMarkdownText] = useState("");

    useEffect(() => {
        const fetchMarkdown = async () => {
            if (project) {
                const response = await fetch(project.mdFile);
                const text = await response.text();
                setMarkdownText(text);
            }
        };
        fetchMarkdown();
    }, [project]);

    return isShown ? (
        <ProjectDetail>
            <button onClick={() => setProject(null)}>X</button>
            <img className='Cover__Image' src={project.Image} alt={project.Name} />
            <hr />
            <div className="Markdown__Container">
                <ReactMarkdown rehypePlugins={[rehypeRaw]} children={markdownText} />
            </div>
        </ProjectDetail>
    ) : null;
}

function GalleryProjectSquare({ project, setProject }) {
    return (
        <ProjectSquare onClick={() => setProject(project)}>
            <h1>{project.Name}</h1>
            <img src={project.Image} alt={project.Name} />
            <p>{project.Description.en}</p>
        </ProjectSquare>
    );
}

export function GalleryProjects({ id }) {
    const [currentProject, setCurrentProject] = useState(null);

    return (
        <ProjectsContainer id={id}>
            {Data.projects.map((project, index) => (
                <GalleryProjectSquare key={index} project={project} setProject={setCurrentProject} />
            ))}
            <DetailPopup isShown={currentProject != null} project={currentProject} setProject={setCurrentProject} />
        </ProjectsContainer>
    );
}
