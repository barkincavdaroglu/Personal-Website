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
            <h2 className="text-left-align">In short...</h2>
            <p className="text-left-align">{props.project.projectDescription}</p>
        </div>
    )
}

function ProjectOverviewPhotos(props) {
    return (
        <div className="image">
            <h2 className="text-left-align">Looks like...</h2>
            <ModalImage className="project-thumbnail" small={props.project.projectImage} large={props.project.projectImage} alt="granite state image"/>
            {/*<img className="project-thumbnail" src={props.project.projectImage} alt="alt"/>*/}
        </div>
    )
}


function ProjectOverviewTools(props) {
    return (
        <div className="tools">
            <h2 className="text-left-align">Did it with...</h2>
            <div className="toolsArray">
                { props.project.projectTools.map((tool, idx) =>
                        <div className="icondiv"><img className="tool-icon" src={tool} key={idx}/></div>
                    )
                }
            </div>
        </div>
    )
}

function ProjectOverviewGoal(props) {
    return (
        <div className="goal">
            <h2 className="text-left-align">Wanted to...</h2>
            <p className="text-left-align">{props.project.projectGoal}</p>
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
                    <path d="M15 8H1M8 15L1 8 8 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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