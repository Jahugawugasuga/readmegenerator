var inquirer = require("inquirer"); 
var fs = require("fs"); 
var markdown = require("./utils/generateMarkdown"); 
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
        type:"list",
        message: "Any licensing, MIT, Apache, etc.?",
        name: "licenses",
        choices: [
            "MIT",
            "Apache 2.0",
            "Mozilla Public License",
            "ISC",
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
    
    return fs.writeFileSync(filename, answers)  
    
};
    function githubImg(username) {
    
        return axios.get("https://api.github.com/users/" + username)
    
    };

function init() {

    inquirer 

    .prompt(questions).then(answers => {
    
        var filename = answers.title.toLowerCase().split(" ").join("")+".md"; 
       
        githubImg(answers.username).then(response => {
            writeToFile(filename, markdown(answers, response.data));
            
        });
       
    });
   
}

init();



