import React from 'react';
import Title from '../layouts/Title';
import ProjectsCard from '../project/ProjectCard';
import './Project.css';

import localProjects from './ProductData'; 
const Projects = () => {
  // Local project data
  

  return (
    <section id="projects" className="w-full py-20 border-b border-black">
      <div className="flex justify-center items-center text-center mb-10">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-10">
        {localProjects.length > 0 ? (
          localProjects.map((project, index) => (
            <ProjectsCard
              key={index}
              title={project.title}
              src={project.src}
              link={project.link}     // live demo
              github={project.github} // GitHub repo
              des={project.des}       // optional
            />
          ))
        ) : (
          <p className="text-center text-gray-500 mt-6">
            No projects available at the moment.
          </p>
        )}
      </div>
    </section>
  );
};

export default Projects;
