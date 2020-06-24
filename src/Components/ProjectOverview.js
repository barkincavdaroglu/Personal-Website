import React from 'react'
import {getProject} from "./ProjectsData";
import ModalImage from "react-modal-image";
import { Popup } from 'semantic-ui-react'
import {Route} from "react-router-dom"



function ProjectOverviewHeader(props, history) {
    return (
        <div className="project-title">
            <h2>
                <span className="lighter-title">Project:</span> {props.project.projectName}
            </h2>
        </div>
    )
}

function ProjectOverviewSummary(props) {
    return (
        <div className="description">
            <h2 className="text-left-align">In short</h2>
            <p className="text-left-align">{props.project.projectDescription}</p>
        </div>
    )
}

function ProjectOverviewPhotos(props) {
    return (
        <div className="image">
            <ModalImage className="project-thumbnail" small={props.project.projectImage} large={props.project.projectImage} alt="granite state image"/>
            {/*<img className="project-thumbnail" src={props.project.projectImage} alt="alt"/>*/}
        </div>
    )
}

function Checker({age}) {
    if (age > 22) {
        return (
                <div className="personaBlock">
                    <Popup className="popup" key={`${age}`} trigger={<img className="personaImage" src={require("../images/persona22above.png")} alt="some"/>}>
                        Group of people that
                        would want to connect
                        with students for 
                        volunteering, job, etc.
                    </Popup>
                    <p className="persona-title">Organization Rep.</p>
                    <p className="persona-age">Age: {`${age}`}</p>
                </div>
            
        )
    }
    else if (age < 22) {
        return (
            <div className="personaBlock">
                <Popup className="popup" content="Organization Rep." key={`${age}`} trigger={<img className="personaImage" src={require("../images/persona22below.png")} alt="some"/>}/>
                <p className="persona-title">Student</p>
                <p className="persona-age">Age: {`${age}`}</p>
            </div>
        )
    }
    else {
        return null
    }
}

function ProjectOverviewTools(props) {
    return (
        <div className="tools">
            <h2 className="text-left-align light-purple">Personas</h2>
            <div className="toolsArray">
                {props.project.personaProfile.map((age, idx) => 
                <Checker key={idx} age={age}/>)}
            </div>
        </div>
    )
}

function ProjectOverviewGoal(props) {
    return (
        <div className="goal">
            <h2 className="text-left-align">Goal</h2>
            <p className="text-left-align">{props.project.projectGoal}</p>
        </div>
    )
}

function GoBackButton(props) {
    return (
        <div className="go-back-container">
            <button className="go-back" onClick={() => props.history.push('/')}>
                    <span className="go-back-icon">
                    <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 8H1M8 15L1 8 8 1" stroke="#E9E9FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    </span>Go Back
            </button>
        </div>
    )
}

function CaseStudyButton(props) {
    return (
        <div className="case-study-container">
            
            <button className="case-study" onclick="location.href='https://google.com';" value="Go to Google">
                    <span className="go-back-icon">
                    <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 8H1M8 15L1 8 8 1" stroke="#E9E9FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    </span><a className="a-link" target="_blank" href="https://medium.com/">Case Study</a>
                    
            </button>
        </div>
    )
}

export default function ProjectOverview({match, history}) {
    let project = getProject(match.params.id)
    return (
        <div className="container">
            <div className="projectoverview_subcontainer">
                <ProjectOverviewHeader project={project} />
                <GoBackButton history={history} />
                <CaseStudyButton />
                {/*<div className="go-back-container">
                    <button className="go-back" onClick={() => history.push('/')}>
                    <span className="go-back-icon">
                    <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 8H1M8 15L1 8 8 1" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    </span>Go Back
                    </button>
                </div>*/}
                <ProjectOverviewSummary project={project} />
                <ProjectOverviewPhotos project={project} />
                <ProjectOverviewGoal project={project} />
                <ProjectOverviewTools project={project} />
            </div>
        </div>
    )
}