import { useState, useEffect } from "react";

function Projects(props) {
  // create state to hold projects
  const [projects, setProjects] = useState(null);
  useEffect(() => {

  //create function to make api call
  const getProjectsData = async () => {
    
		//make api call and get response
    const response = await fetch(props.URL + "projects");
    
		// turn response into javascript object
    const data = await response.json();
    
		// set the projects state to the data
    setProjects(data);

  };
  
  // make an initial call for the data inside a useEffect, so it only happens once on component load
  getProjectsData()}, [props.URL]);

  // define a function that will return the JSX needed once we get the data
  const loaded = () => {
    return projects?.map((project) => (
      <div key={project.name}>
        <h1 className="project">{project.name}</h1>
        <img className="project-img" src={project.image[0]} alt='' />
        <img className="project-img" src={project.image[1]} alt= '' />
        <div>
            <a href={project.git}>
          <button className="gitbtn">Github</button>
        </a>
        <a href={project.live}>
          <button className="herokubtn">Live Site</button>
        </a>
        </div>
        
      </div>
    ));
  };

  return projects ? loaded() : <h1>Loading...</h1>;
}

export default Projects;