import fetch from "node-fetch"
import { httpServerAddress } from "./config.js";

let startTime = new Date();

fetch(httpServerAddress).then(e => e.json()).then(e => {
    e.responseTimeUa = new Date(e.responseTime).toLocaleString("uk-UA", {timeZone: "Europe/Kiev"})
    e.msPassed = new Date(e.responseTime) - startTime
    console.log(e)
});

export { }

