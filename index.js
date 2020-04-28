var inquirer = require("inquirer"); //use this to ask questions
var fs = require("fs"); // use this to write the md file
var dotenv = require("dotenv").config(); //it was in the json package, and this is what the docs said to do, 
//makes environment variables from an .env file. 
var markdown = require("./utils/generateMarkdown.js"); //include markdown function from other file
// var readme = require("template.md");

const questions = [
    {
        type: "input",
        message: "What is the title for your project?",
        name: "title"
    },
    {
        type: "input",
        message: "What is the desciption for your project?",
        name: "description"
    },
    {
        type: "input",
        message: "Please list Project Contributers",
        name: "contributers"
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "username"
    },
    {
        type: "input",
        message: "Please explain how to install your application",
        name: "installation"
    },
    {
        type: "input",
        message: "Please explain how to use your web application",
        name: "usage"
    },
    {
        type: "input",
        message: "List API's required to run this application, if any",
        name: "technology"
    },
    {
        type:"input",
        message: "Please describe how to run tests on your web app",
        name: "tests"
    },
    {
        type:"checkbox",
        message: "Any licensing, MIT, Apache, etc.?",
        name: "licenses",
        choices: [
            "MIT",
            "Apache",
            "Mozilla Public License",
            "The Unlicense"

        ]
    },
    {
        type:"input",
        message: "What is your Github email?",
        name: "github"
    },

    

]
 

inquirer 

.prompt(questions).then(answers => {

    var filename = answers.title.toLowerCase().split(" ").join("")+".md"; //this creates a new file with the name from userinput 
    fs.writeFile(filename, JSON.stringify(answers, null, '\t'), function(err) {
         if (err) {
             console.log("ERROR");
         } 
             console.log("SUCCESS");
             if (answers.name !==null) {
                 console.log(answers.name);
             } else {
                 console.log(error)
             }
            // var userProfile = "https://github.com/"+answers.username 
    });
    // .catch(error => {
    //     if (error.isTtyError) {

    //     } else {

    //     }
    // }
});




// function writeToFile(fileName, data) {
// }

// function init() {

// }

// init();

//we don't need the internet at all
////grab all inquirer stuff
// 2. runs generate markdown on all answers and questions
//3. write it to file 

//generate md function - 

//badge is the license - need a function - licensing

//how to grab a license - what does it take to add an mit license
//on a readme

//just give a few options 

//in markdown you can generate a badge 

// table of contents is a list of everything selected
// look how to generate a table of contents
// create a md file and create the way i would want it to look like

