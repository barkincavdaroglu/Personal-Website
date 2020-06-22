import React from 'react'
import {getProject} from "./ProjectsData";
import ModalImage from "react-modal-image";


function ProjectOverviewHeader(props, history) {
    return (
        <div>
            <h2>
                <span className="lighter-title">Project:</span> {props.project.projectName}
            </h2>
        </div>
    )
}

function ProjectOverviewSummary(props) {
    return (
        <div className="description">
            <h2>In short...</h2>
            <p>{props.project.projectDescription}</p>
        </div>
    )
}

function ProjectOverviewPhotos(props) {
    return (
        <div className="image">
            <h2>Looks like...</h2>
            <ModalImage className="project-thumbnail" small={props.project.projectImage} large={props.project.projectImage} alt="granite state image"/>
            {/*<img className="project-thumbnail" src={props.project.projectImage} alt="alt"/>*/}
        </div>
    )
}

function ProjectOverviewTools(props) {
    return (
        <div className="tools">
            <h2>Did it with...</h2>
            <p>{props.project.projectTools}</p>
        </div>
    )
}

function ProjectOverviewGoal(props) {
    return (
        <div className="goal">
            <h2>Wanted to...</h2>
            <p>{props.project.projectGoal}</p>
        </div>
    )
}

export default function ProjectOverview({match, history}) {
    let project = getProject(match.params.id)
    return (
        <div className="container">
            <ProjectOverviewHeader project={project} />
            <div className="go-back-container">
                <button className="go-back" onClick={() => history.push('/')}>
                    <span className="go-back-icon">
                    <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 8H1M8 15L1 8 8 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    </span>Go Back
                </button>
            </div>
            <div className="projectoverview_subcontainer">
                <ProjectOverviewSummary project={project} />
                <ProjectOverviewPhotos project={project} />
                <ProjectOverviewGoal project={project} />
                <ProjectOverviewTools project={project} />
            </div>
        </div>
    )
}