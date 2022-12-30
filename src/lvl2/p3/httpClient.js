console.log("\nHTTP client script execution started");
import fetch from "node-fetch";
import { HTTPserverAddress, HTTPserverPort, uaDateString } from "./config.js";

let startTime = new Date();

fetch("http://" + HTTPserverAddress + ":" + HTTPserverPort)
    .then(e => {
        console.log("HTTP request sent");
        return e.json()
    })
    .then(e => {
        e.responseTimeUa = uaDateString(e.responseTime);
        e.msPassed = new Date(e.responseTime) - startTime;
        console.log("HTTP server extended response:", e);
    });

export { }

