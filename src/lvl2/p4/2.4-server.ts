// @ts-nocheck
import express from "express";
const SERVER_PORT : number = 12345;
const app = express();

app.listen(SERVER_PORT, () => {
    console.log(`Port ${SERVER_PORT} listening now`)
})

app.get('/', (req, res) => {
    res.send(`root response, server port = ${SERVER_PORT}`)
})

export { }