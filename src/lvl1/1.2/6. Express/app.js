const express = require('express')
const http = require('http')
const fs = require('fs')

const app = express()
app.use(express.static('public'))

const port = 3000
const hostname = "127.0.0.1"
const counterDB = "./database.txt"

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});


const getCounter = () => +fs.readFileSync(counterDB, 'utf8', (err, data) => {
    if (err) {
        console.log(err)
        return -1
    } else {
        return +data
    }
});

const rewriteDatabase = (newContent) => {
    fs.writeFileSync(counterDB, newContent, err => {
        if (err) {
            console.error(err);
        }
        // file written successfully
    });
}


let pages = ["hello", "world", "lorem", "ipsum"]
let body = pages.join("<br>")
let selectedPage = "/" //+ pages[0]


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

let flag = true;

app.get(selectedPage, (req, res) => {
    console.log("localhost:3000 updated");
    flag = !flag;

    this.selectedPage = "/" + (flag ? "" : "hello")
    rewriteDatabase((getCounter() + 1) + "") // increment counter
    res.send(body + "<br>" + getCounter())
})




