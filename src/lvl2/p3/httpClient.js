import fetch from "node-fetch"
// const serverAddress = "https://testapp-mriznichenko.koyeb.app"
const serverAddress = "http://127.0.0.1:8000"

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
    fetch(serverAddress)
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

