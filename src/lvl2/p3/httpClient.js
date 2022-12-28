const fetch = require("node-fetch")
const os = require("os")
const nl = os.EOL;

const http = require("https")

const myUrl = "https://testapp-mriznichenko.koyeb.app"
// const myUrl = "http://127.0.0.1:8000"

// fetch("https://testapp-mriznichenko.koyeb.app")

class CustomResponse { 
    content;
    time;
    constructor(content) {
        this.content = content;
        this.time = new Date();
    }
}

function getReq() {
    let startTime = new Date()
    fetch(myUrl)
        .then(e => new CustomResponse(e.text()))
        .then(resp => {
            resp.content.then(content => {
                console.log("response:", content);
                let totalTime = resp.time - startTime;
                console.log("time passed: " + totalTime + " ms")
            })
        }
        )
}

getReq()

