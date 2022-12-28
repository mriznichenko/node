//                             
//   #    # ##### ##### #####  
//   #    #   #     #   #    # 
//   ######   #     #   #    # 
//   #    #   #     #   #####  
//   #    #   #     #   #      
//   #    #   #     #   #      
//                             

const express = require("express")
const expressAppForGetReq = express();

const port = process.env.PORT || 8000;
const os = require("os");

const nl = os.EOL //"<br>"

function getResp(msg, req) {
    let ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress
    let pureIP = ip.replace("::ffff:", "");
    let text = `${msg} response${nl}request IP: ${pureIP}${nl}${new Date().toLocaleString('uk-UA', { timeZone: 'Europe/Kiev' })} (UA)`;
    return text;
}

expressAppForGetReq.get("/", (req, res) => {
    // console.log("res:", res)
    res.send(getResp("main", req));
})

expressAppForGetReq.get("/another", (req, res) => {
    res.send(getResp("/another", req));
})

expressAppForGetReq.listen(port, () => {
    console.log("example app listening on port " + port)
})




//                        
//   #    # #####  #####  
//   #    # #    # #    # 
//   #    # #    # #    # 
//   #    # #    # #####  
//   #    # #    # #      
//    ####  #####  #      
//                    


const udp = require('dgram')
const conf = require('./config.json')

const {
    log
} = require('./loggerTool')

// --------------------creating a udp server --------------------

// creating a udp server
const UDPsocket = udp.createSocket('udp4')

// emits when any error occurs
UDPsocket.on('error', (error) => {
    log("udp_server", "error", error)
    UDPsocket.close()
})

// emits on new datagram msg
UDPsocket.on('message', (msg,info) => {
    log("udp_server", "info", msg.toString() + ` | Received ${msg.length} bytes from ${info.address}:${info.port}`)

    let timestp = new Date()
    const response = {
        description: 'UDP PORT TEST BY RMS Math',
        serverPort: conf.UDPport,
        timestamp: timestp.toJSON(),
        received: {
            message: msg.toString(),
            fromIP: info.address,
            fromPort: info.port
        }
    }
    

    //sending msg
    UDPsocket.send(Buffer.from(JSON.stringify(response)), info.port, info.address, (error, bytes) => {
        if(error){
            log("udp_server", "error", error)
            client.close()
        } else {
            log("udp_server", "info", 'Data sent !!!')
        }    
    })
})  // end server.on


//emits when socket is ready and listening for datagram msgs
UDPsocket.on('listening', () => {
    const address = UDPsocket.address()
    const port = address.port
    const family = address.family
    const ipaddr = address.address

    log("udp_server", "info", 'Server is listening at port ' + port)
    log("udp_server", "info", 'Server ip :' + ipaddr)
    log("udp_server", "info", 'Server is IP4/IP6 : ' + family)
})

//emits after the socket is closed using socket.close()
UDPsocket.on('close', () => {
    log("udp_server", "info", 'Socket is closed !')
})

UDPsocket.bind(conf.UDPport)





//                       
//   #####  ####  #####  
//     #   #    # #    # 
//     #   #      #    # 
//     #   #      #####  
//     #   #    # #      
//     #    ####  #      
//                       