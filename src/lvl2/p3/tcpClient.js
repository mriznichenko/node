console.log("\nTCP client script execution started");

import net from 'net';
import {TCPserverPort, TCPserverHost, TCPclientPort} from "./config.js"

// TODO bind socket to TCPclientPort 
const tcpClient = new net.Socket();

tcpClient.connect(TCPserverPort, TCPserverHost, function() {
    console.log('TCP connected');
    tcpClient.write("Hello From Client " + tcpClient.address().address);
});

tcpClient.on('data', data => {
    console.log("TCP client received data:", JSON.parse(data));
    tcpClient.destroy();
});

tcpClient.on('close', () => {
    console.log('TCP connection closed');
});


export {}