import "./index.scss";
import React from 'react';
import { format } from 'date-fns';

const ProjectCard = ({ project }) => (
  <div className="project-card">
    <h3 className="project-title">{project.title}</h3>
    <p className="project-date">{format(new Date(project.date), 'MMM d, yyyy')}</p>
    <p className="project-description">{project.description}</p>
    <a href={project.link} className="project-link">View Project</a>
  </div>
);

const OtherProjects = () => {
  const projects = [
    {
      id: 1,
      title: "Weather App",
      date: "2023-12-15",
      description: "A simple weather application using React and a weather API.",
      link: "https://example.com/weather-app"
    },
    {
      id: 2,
      title: "Task Manager",
      date: "2024-02-20",
      description: "A task management application with React and local storage.",
      link: "https://example.com/task-manager"
    }
    // Add more projects here
  ];

  // sort projects by date (most recent first)
  const sortedProjects = [...projects].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="projects-page">
      <h1 className="page-title">My Side Projects (This is just a placeholder page for later)</h1>
      <div className="projects-grid">
        {sortedProjects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default OtherProjects;
