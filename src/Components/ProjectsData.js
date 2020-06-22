const projectsData = [
    {
        _id: "granite-state-overview",
        projectName: "Granite State Service Program",
        projectImage: require("../images/granite-state-thumbnail.png"),
        projectDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut velit ut tortor bibendum laoreet non vel nisl. Nulla facilisi. Nullam felis lorem, suscipit in magna eu, vulputate porta dolor. Nunc nec leo eu sapien facilisis suscipit sit amet in elit. Duis accumsan ligula non mauris convallis tempor. Fusce laoreet, dolor eget iaculis varius, sapien mauris tempus enim, eget dictum dui urna eu tellus. Integer quis sapien et augue condimentum faucibus. ",
        projectSummary: "In short we wanted to this or that for project 1",
        projectGoal: "Some goals for project 1",
        projectTools: ["tool 1", "sketch"],
        projectPhotos: "../images/granite-state-thumbnail.png"
    },
    {
        _id: "chinese-storytelling-overview",
        projectName: "Chinese Storytelling",
        projectImage: "/images/imgplaceholder.png",
        projectDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut velit ut tortor bibendum laoreet non vel nisl. Nulla facilisi. Nullam felis lorem, suscipit in magna eu, vulputate porta dolor. Nunc nec leo eu sapien facilisis suscipit sit amet in elit. Duis accumsan ligula non mauris convallis tempor.",
        projectSummary: "In short we wanted to this or that for project 2",
        projectGoal: "We wanted to do this for project 2.",
        projectTools: ["figma"],
        projectPhotos: []
    },
    {
        _id: "grocerily-overview",
        projectName: "Grocerily",
        projectImage: "./images/imgplaceholder.png",
        projectDescription: "Lorem ipsum dolor sit amet, adipiscing elit.",
        projectSummary: "In short we wanted to this or that for project 3",
        projectGoal: "We wanted to do this for project 3.",
        projectTools: ["none yet"],
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