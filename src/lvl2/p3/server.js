import { UDPserverHost, UDPserverPort, HTTPserverPort, TCPserverPort, TCPserverHost, uaDateString} from './config.js';
console.log("\n---\nServer script execution started on " + uaDateString());


//   #    # ##### ##### #####  
//   #    #   #     #   #    # 
//   ######   #     #   #    # 
//   #    #   #     #   #####  
//   #    #   #     #   #      
//   #    #   #     #   #  

import express from "express"

const httpSocket = express();

function createHttpResponse(mountpath, req) {
    return {
        clientIP : (req.headers['x-forwarded-for'] ?? req.socket.remoteAddress).replace("::ffff:", ""),
        mountpath: mountpath,
        responseTime : new Date()
    }
}

httpSocket.listen(HTTPserverPort, () => {
    console.log("HTTP server listening port " + HTTPserverPort)
})

httpSocket.get("/", (req, res) => {
    res.send(createHttpResponse("/", req));
})

httpSocket.get("/another", (req, res) => {
    res.send(createHttpResponse("/another", req));
})
      

//   #    # #####  #####  
//   #    # #    # #    # 
//   #    # #    # #    # 
//   #    # #    # #####  
//   #    # #    # #      
//    ####  #####  #      


import dgram from 'dgram'

const UDPsocket = dgram.createSocket('udp4'); // creating a udp server

UDPsocket.bind(UDPserverPort, UDPserverHost)
console.log(`UDP socket opened and bound on ${UDPserverHost}, port ${UDPserverPort} `)

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
        responseTimestamp: new Date().toJSON(),
        received: {
            clientIP: info.address,
            clientPort: info.port,
            clientMessage: msg.toString()
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


import net from 'net';
const tcpSocket = net.createServer()


// emits when any error occurs
tcpSocket.on('error', (error) => {
    console.log("TCP server error:", error)
    tcpSocket.close()
})

tcpSocket.listen(TCPserverPort, TCPserverHost, () => {
    const address = tcpSocket.address()
    console.log(`\nTCP server (${address.family}) listening at ${address.address}, port ${address.port}`);
})



tcpSocket.on('connection', sock => {
    const sockets = []

    console.log(`TCP server сonnected with ${sock.remoteAddress}:${sock.remotePort}`);

    sockets.push(sock)

    sock.on('data', data => {
        console.log(`TCP server data event. Data: ${data.toString()}. Received ${sock.bytesRead} bytes from ${sock.remoteAddress}:${sock.remotePort}`)

        let timestp = new Date()
        const response = {
            serverPort: TCPserverPort,
            serverResponseTimestamp: timestp.toJSON(),
            serverReceived: {
                message: data.toString(),
                fromIP: sock.remoteAddress,
                fromPort: sock.remotePort
            }
        }

        // Write the data back to all the connected, the client will receive it as data from the server
        sockets.forEach((sock, index, array) => {
            sock.write(Buffer.from(JSON.stringify(response)))
        })
    })

    sock.on('close', data => {
        let index = sockets.findIndex(o => {
            return o.remoteAddress === sock.remoteAddress && o.remotePort === sock.remotePort
        })

        if (index !== -1) {
            sockets.splice(index, 1)
        }
        console.log(`TCP connection with ${sock.remoteAddress}:${sock.remotePort} was closed.`)
    })
})

/////////////////

export { }