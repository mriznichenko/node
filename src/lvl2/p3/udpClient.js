import dgram from 'dgram'

// const UDPserverHost = "http://testapp-mriznichenko.koyeb.app/udp"
// const UDPserverHost = "104.22.78.190"/// koyeb server ip
const UDPserverHost = "127.0.0.5"
const UDPserverPort = 21000;

const UDPclientPort = 35000;


const UDPclient = dgram.createSocket('udp4') // creating a client socket
console.log("UDP client socket opened")
UDPclient.bind(UDPclientPort)

//send request to server
UDPclient.send(Buffer.from("some text"), UDPserverPort, UDPserverHost, error => {
    console.log("UDP client sent request to server")
    if (error) {
        console.log("bbb")
        console.log("UDPclient.send error:", error)
        UDPclient.close()
    }
});


// get server response
UDPclient.on('message', (msg, info) => {
    console.log("UDP client recieve server response")
    let msgData = JSON.parse(msg.toString());
    let timePassed = new Date() - new Date(msgData.responseTimestamp);

    let response = {
        message : msgData,
        serverInfo : info,
        timeBetweenRequestAndResponseInMs : timePassed//.toLocaleString("uk-UA", { timeZone: 'Europe/Kiev' }) + "ms"
    }

    console.log(response)
    console.log("UDP client socket closed")
    UDPclient.close()
});

export {}