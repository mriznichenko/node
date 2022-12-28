// Example adapted from https://gist.github.com/sid24rane/6e6698e93360f2694e310dd347a2e2eb
// https://gist.github.com/sid24rane

const udp = require('dgram')
const UDPsockectClosingTimeout = 5000; // ms
const UDPport = 21000;
const host = "0.0.0.0"

const UDPclient = udp.createSocket('udp4') // creating a client socket

function udpRequestLoop() {   
    //send request to server
    UDPclient.send(Buffer.from("some text"), UDPport, host, error => {
        if (error) {
            console.log("UDPclient.send error:", error)
            UDPclient.close()
        }
    });

    // get server response
    UDPclient.on('message', (msg, info) => {        
        let msgData = JSON.parse (msg.toString());
        let timePassed = new Date() - new Date(msgData.timestamp);
        console.log("server response:", msgData)
        console.log("time passed:", timePassed.toLocaleString("uk-UA", { timeZone: 'Europe/Kiev' }), "ms")
    });

    setTimeout(() => {
        UDPclient.close()
    }, UDPsockectClosingTimeout);

}

udpRequestLoop();