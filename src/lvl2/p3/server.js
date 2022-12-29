console.log("\nserver script execution started on " + new Date().toLocaleString("uk-UA", { timeZone: "Europe/Kiev" }));

import os from "os"
import express from "express"
import dgram from 'dgram'

const expressApp = express();

const httpPort = process.env.HTTP_PORT || 8000;
const udpPort = process.env.UDP_PORT || 21000;

const UDPsocket = dgram.createSocket('udp4'); // creating a udp server



//   #    # ##### ##### #####  
//   #    #   #     #   #    # 
//   ######   #     #   #    # 
//   #    #   #     #   #####  
//   #    #   #     #   #      
//   #    #   #     #   #  

expressApp.bind("127.0.0.9")
function createHttpResponse(msg, req) {
    let ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress
    let pureIP = ip.replace("::ffff:", "");
    let text = `${msg} response${os.EOL}request IP: ${pureIP}${os.EOL}${new Date().toLocaleString('uk-UA', { timeZone: 'Europe/Kiev' })} (UA)`;
    return text;
}

expressApp.get("/", (req, res) => {
    res.send(createHttpResponse("/", req));
})

expressApp.get("/another", (req, res) => {
    res.send(createHttpResponse("/another", req));
})

expressApp.listen(httpPort, () => {
    console.log("http server listening on port " + httpPort)
})


//                        
//   #    # #####  #####  
//   #    # #    # #    # 
//   #    # #    # #    # 
//   #    # #    # #####  
//   #    # #    # #      
//    ####  #####  #      
//                    

UDPsocket.bind(udpPort, "127.0.0.5")

UDPsocket.on('listening', () => {
    console.log("UDP server listening:", UDPsocket.address());
})

UDPsocket.on("/udp", () => {
    console.log("UDP server reaction on /udp")
})

UDPsocket.on('error', (error) => {
    console.log("UDP server error:", error)
    UDPsocket.close()
})

UDPsocket.on('message', (msg, info) => {
    console.log("UDP server got incoming request:", { bodyBuffer: msg.toString(), info: info })

    const response = {
        // description: 'UDP server response test description',
        responseTimestamp: new Date().toJSON(),
        received: {
            clientMessage: msg.toString(),
            clientIP: info.address,
            clientPort: info.port
        }
    }

    UDPsocket.send(Buffer.from(JSON.stringify(response)), info.port, info.address, (error, bytes) => {
        if (error) {
            console.log("UDP server response sending error:", error);
            client.close()
        } else {
            console.log("UDP server sent response:", response)
        }
    })
})

UDPsocket.on('close', () => {
    console.log("UDP server closed")
})







//                       
//   #####  ####  #####  
//     #   #    # #    # 
//     #   #      #    # 
//     #   #      #####  
//     #   #    # #      
//     #    ####  #      
//                       



export {}