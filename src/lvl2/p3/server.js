//   #    # ##### ##### #####  
//   #    #   #     #   #    # 
//   ######   #     #   #    # 
//   #    #   #     #   #####  
//   #    #   #     #   #      
//   #    #   #     #   #      

console.log("\n" + new Date().toLocaleString("uk-UA", { timeZone: "Europe/Kiev" }));

const os = require("os");
const express = require("express")
const expressAppForGetReq = express();

const httpPort = process.env.PORT || 8000;
const udpPort = 21000;
const udp = require('dgram')
const UDPsocket = udp.createSocket('udp4'); // creating a udp server

function createHttpResponse(msg, req) {
    let ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress
    let pureIP = ip.replace("::ffff:", "");
    let text = `${msg} response${os.EOL}request IP: ${pureIP}${os.EOL}${new Date().toLocaleString('uk-UA', { timeZone: 'Europe/Kiev' })} (UA)`;
    return text;
}

expressAppForGetReq.get("/", (req, res) => {
    res.send(createHttpResponse("/", req));
})

expressAppForGetReq.get("/another", (req, res) => {
    res.send(createHttpResponse("/another", req));
})

expressAppForGetReq.listen(httpPort, () => {
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

UDPsocket.bind(udpPort)

UDPsocket.on('listening', () => {
    console.log("UDP server listening:", UDPsocket.address());
})

UDPsocket.on('error', (error) => {
    console.log("UDP server error:", error)
    UDPsocket.close()
})

UDPsocket.on('message', (msg, info) => {
    console.log("UDP server got incoming request:", { bodyBuffer: msg.toString(), info: info })

    const response = {
        // description: 'UDP server response test description',
        timestamp: new Date().toJSON(),
        received: {
            message: msg.toString(),
            fromIP: info.address,
            // fromPort: info.port
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