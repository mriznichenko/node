import express from "express";

const app = express();
const SERVER_PORT = 3005;

app.use(express.static(process.cwd() + "/src/lvl2/p4/public"));

app.listen(SERVER_PORT, () => {
    console.log(`Port ${SERVER_PORT} listening now`);
})

app.get('/', (req, res) => {
    let time = new Date().toLocaleString("uk-UA", { timeZone: "Europe/Kiev" });
    res.send(`${time}: hello from port: ${SERVER_PORT}`);
    console.log(`${time}: response sent`);
})

export { }