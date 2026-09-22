const mongoose = require("mongoose");
const Project = require("./models/project");

const projects = [

    {
        title: "Calculator Application",
        description: "Made a simple calculator in Python using functions and basic conditions for performing calculations.",
        github: "",
        demo: ""
    },

    {
        title: "Number Guessing Game",
        description: "Created a simple Python guessing game using random numbers, loops and conditions.",
        github: "",
        demo: ""
    },

    {
        title: "Student Registration Form",
        description: "Created a simple student registration form using HTML and basic form elements for collecting student details.",
        github: "",
        demo: ""
    },

    {
        title: "Student Login Form",
        description: "Created a simple student login page using HTML and CSS with username and password fields.",
        github: "",
        demo: ""
    },

    {
        title: "Home Page",
        description: "Created a simple and clean home page using HTML and CSS with basic navigation and web layout.",
        github: "",
        demo: ""
    },

    {
        title: "Portfolio Website",
        description: "Created a personal portfolio website to showcase my skills, projects and basic information.",
        github: "",
        demo: ""
    }

];

require("dotenv").config();
mongoose.connect(process.env.MONGODB_URI)
    .then(async () => {

        console.log("MongoDB Connected");

        await Project.deleteMany();

        await Project.insertMany(projects);

        console.log("Projects Added Successfully");

        mongoose.connection.close();

    })
    .catch(error => {

        console.log("Database Error:", error);

    });