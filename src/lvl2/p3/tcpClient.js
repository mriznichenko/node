import net from 'net';
import {tcpPort, tcpHost} from "./config.js"

const tcpClient = new net.Socket();

tcpClient.connect(tcpPort, tcpHost, function() {
    console.log('TCP connected');
    tcpClient.write("Hello From Client " + tcpClient.address().address);
});

tcpClient.on('data', data => {
    console.log("Received:", JSON.parse(data));
    tcpClient.destroy();
});

tcpClient.on('close', () => {
    console.log('TCP connection closed');
});

export {}