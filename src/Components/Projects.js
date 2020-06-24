import React from "react";
import {getProjects} from "./ProjectsData";
import {Link} from "react-router-dom"

function ProjectCard(props) {
    return (
            <div className="project-card">
                <h2>{props.project.projectName}</h2>
                <p>{props.project.projectSummary}</p>
                <Link to={props.id}><button className="overview_button">Overview</button></Link>
            </div>
    )
}

class Projects extends React.Component {
    state = {
        projects: getProjects()
    }
    render() {
        return (
            <div className="container">
                <h2><span className="values-white-header">My </span> <span className="linear-wipe">Work</span>.</h2>
                <div className="project-paragraph">
                    <p>If you want a brief overview of my projects, click. If you want to read the case studies (if there is any), click.</p>
                </div>
                <div className="hero_container">
                    { this.state.projects.map(project =>
                        <ProjectCard key={project._id.toString()} id={project._id.toString()}
                                     project={project}/>)
                    }
                </div>
            </div>
        )
    }
}

export default Projects