// Example adapted from https://gist.github.com/sid24rane/6e6698e93360f2694e310dd347a2e2eb
// https://gist.github.com/sid24rane

const udp = require('dgram')
const conf = require('./config.json')

const UDPclient = udp.createSocket('udp4') // creating a client socket

UDPclient.on('message', (msg, info) => {
    console.log('Data received from server : ' + msg.toString())
    console.log(`Received ${msg.length} bytes from ${info.address}:${info.port}`)
})


//sending msg
UDPclient.send(Buffer.from('MSG from UDP client'), conf.UDPport, conf.host, error => {
    if (error) {
        console.log(error)
        UDPclient.close()
    } else {
        console.log('Data sent !!!')
    }
})

//sending multiple msg
UDPclient.send([Buffer.from('hello'), Buffer.from('world')], conf.UDPport, conf.host, error => {
    if (error) {
        console.log(error)
        UDPclient.close()
    } else {
        console.log('Data sent !!!')
    }
})

setTimeout(() => {
    UDPclient.close()
}, conf.timeout)