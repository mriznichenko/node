const fetch = require("node-fetch")
const myUrl = "https://testapp-mriznichenko.koyeb.app"

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

export {}

