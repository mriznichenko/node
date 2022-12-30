import dgram from 'dgram'
import { UDPserverHost, UDPserverPort, UDPclientPort } from './config.js';

const udpSocket = dgram.createSocket('udp4');
console.log("UDP client socket is opened");

udpSocket.bind(UDPclientPort)
console.log("UDP client socket bound on port " + UDPclientPort);


udpSocket.send(Buffer.from("some text"), UDPserverPort, UDPserverHost, error => {
    console.log("UDP client sent request to server")
    if (error) {
        console.log("UDPclient.send() error:", error, "\nUDP client socket will shutdown");
        udpSocket.close()
    }
});

udpSocket.on('message', (msg, info) => {
    console.log("UDP client recieved server response")
    let msgData = JSON.parse(msg.toString());

    let serverResponse = {
        message : msgData,
        serverInfo : info,
        timeBetweenRequestAndResponseInMs : new Date() - new Date(msgData.responseTimestamp)//.toLocaleString("uk-UA", { timeZone: 'Europe/Kiev' }) + "ms"
    }

    console.log("Server response:", serverResponse, "\nUDP client socket is closed")
    udpSocket.close()
});

export {}