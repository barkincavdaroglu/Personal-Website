const projectsData = [
    {
        _id: "granite-state-overview",
        projectName: "Granite State Service Program",
        projectImage: require("../images/granite-state-thumbnail.png"),
        projectDescription: "Commissioned by the government of New Hampshire, Granite State Service Program is hoping to incentivize young people in New Hampshire to stay by providing them opportunities to become active members of their local community. It establishes a network of service year alumni, volunteers and employers in New Hampshire.",
        projectSummary: "In short we wanted to this or that for project 1",
        projectGoal: "Design and develop a website that was easy to navigate, with elements of design that are young, community-oriented and 100% accessible to everyone.",
        projectTools: [require("../images/figmaLogo.png"), require("../images/mazedesign.png")],
        projectPhotos: "../images/granite-state-thumbnail.png",
        personaProfile: [23, 17]
    },
    {
        _id: "chinese-storytelling-overview",
        projectName: "Chinese Storytelling",
        projectImage: "/images/imgplaceholder.png",
        projectDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut velit ut tortor bibendum laoreet non vel nisl. Nulla facilisi. Nullam felis lorem, suscipit in magna eu, vulputate porta dolor. Nunc nec leo eu sapien facilisis suscipit sit amet in elit. Duis accumsan ligula non mauris convallis tempor.",
        projectSummary: "In short we wanted to this or that for project 2",
        projectGoal: "We wanted to do this for project 2.",
        projectTools: [],
        projectPhotos: []
    },
    {
        _id: "grocerily-overview",
        projectName: "Grocerily",
        projectImage: "./images/imgplaceholder.png",
        projectDescription: "Lorem ipsum dolor sit amet, adipiscing elit.",
        projectSummary: "In short we wanted to this or that for project 3",
        projectGoal: "We wanted to do this for project 3.",
        projectTools: [],
        projectPhotos: []
    }
]

export function getProject(id) {
    console.log(id)
    return projectsData.find(p => p._id === id)
}

export function getProjects() {
    return projectsData;
}