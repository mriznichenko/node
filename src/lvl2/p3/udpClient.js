console.log("\nUDP client script execution started");

import dgram from 'dgram';
import { UDPserverHost, UDPserverPort, UDPclientPort, uaDateString } from './config.js';

const udpSocket = dgram.createSocket('udp4');
udpSocket.bind(UDPclientPort);
console.log("UDP client socket opened and bound on port " + UDPclientPort);


udpSocket.send(Buffer.from("some text for UDP request"), UDPserverPort, UDPserverHost, error => {
    console.log("UDP client sent request to server");
    if (error) {
        console.log("UDPclient.send() error:", error, "\nUDP client socket will shutdown");
        udpSocket.close();
    }
});

udpSocket.on('message', (msg, info) => {
    let msgData = JSON.parse(msg.toString());

    let serverResponse = {
        message: msgData,
        serverInfo: info,
        responseTimestampUA: uaDateString(msgData.responseTimestamp),
        timeBetweenRequestAndResponseInMs: new Date() - new Date(msgData.responseTimestamp)
    };

    console.log("UDP client recieved server response:", serverResponse, "\nUDP client socket is closed");
    udpSocket.close();
});


export { }