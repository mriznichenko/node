const express = require('express')
const fs = require('fs')

const app = express()
app.use(express.static('public'))
const port = 3000
const hostname = "127.0.0.1"
const counterDB = "./counter.txt"



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

const rewriteCounter = (content) => {
    fs.writeFileSync(counterDB, content, err => {
        if (err) {
            console.error(err);
        }
        // file written successfully
    });
}

const incrementCounter = () => rewriteCounter((getCounter() + 1) + "")

const show = () => console.log(getCounter())

show()
incrementCounter()

show()

app.get('/', (req, res) => {
    // console.log("localhost:3000 updated");
    incrementCounter()
    //res.send("asdasdasd")
    res.send("" + getCounter())
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})