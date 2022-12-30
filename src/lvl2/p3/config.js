// KOYEB
// export const koyebServerIP = "104.22.78.190";
// export const koyebServerBareAddress = "testapp-mriznichenko.koyeb.app"; 

// HTTP
export const HTTPserverPort = process.env.HTTP_PORT || 11000;
export const HTTPserverAddress = "http://127.0.0.1:" + HTTPserverPort;

// UDP
export const UDPserverHost = "127.0.0.5";
export const UDPserverPort = process.env.UDP_PORT || 22000;
export const UDPclientPort = 22001;

// TCP
export const TCPserverPort = process.env.TCP_PORT ||33000;
export const TCPclientPort = 33001;
export const TCPserverHost = '127.0.0.8'; // "0.0.0.0"

// FUNCTIONS
export function uaDateString(date) {
    return (date ?? new Date()).toLocaleString("uk-UA", {timeZone: "Europe/Kiev"});
}