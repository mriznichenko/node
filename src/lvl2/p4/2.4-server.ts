import express from "express";
import cors from "cors";

const app = express();
const SERVER_PORT = process.env.PORT || 3005;
const getUATime = () => new Date().toLocaleString("uk-UA", { timeZone: "Europe/Kyiv" })

app.use(cors({"origin" : "*"}));
app.use(express.static(process.cwd() + "/src/lvl2/p4/public"));

app.listen(SERVER_PORT, () => {
    console.log(`Express started on ${getUATime()}\nListening ${SERVER_PORT} port now`);
})

app.get("/test", (req, res) => {
    let time = getUATime();
    res.send(`${time} - /test works`);
    console.log(`${time} - request on /test`)
})

// app.get('/', (req, res) => {
//     let time = getUATime();
//     res.send(`${time} - hello from port: ${SERVER_PORT}`);
//     console.log(`${time} - got request, response was sent now`);
// })

export { };