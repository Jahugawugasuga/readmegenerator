var inquirer = require("inquirer"); //use this to ask questions
var fs = require("fs"); // use this to write the md file
var markdown = require("./utils/generateMarkdown.js"); //include markdown function from other file
var axios = require("axios");
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
            "The Unlicense",
            "none"

        ]
    },
    {
        type:"input",
        message: "What is your Github email?",
        name: "github"
    },

    

]
 

function writeToFile(filename, answers) {
    markdown(answers);
    return fs.writeFileSync(filename, answers)  
    
};
function githubImg(username) {
var userURL= "https://api.github.com/users/" + username
   return axios.get(userURL).then(function(response) {
    return response.avatar_url
    })
}
function init() {

    inquirer 

    .prompt(questions).then(answers => {
    
        var filename = answers.title.toLowerCase().split(" ").join("")+".md"; //this creates a new file with the name from userinput 
       
        writeToFile(filename, answers); //this works
        githubImg(answers.username);
        console.log(answers);
        console.log(typeof answers);
    });
   
}

init();


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

