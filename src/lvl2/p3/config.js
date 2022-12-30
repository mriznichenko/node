// KOYEB
export const koyebServerIP = "104.22.78.190";
export const koyebServerBareAddress = "testapp-mriznichenko.koyeb.app"; 

// HTTP
export const httpPort = process.env.HTTP_PORT || 8000;
export const httpServerAddress = "http://127.0.0.1:" + httpPort;

// UDP
export const UDPserverHost = "127.0.0.5";
export const UDPserverPort = process.env.UDP_PORT || 21000;
export const UDPclientPort = 35000;

// TCP
export const tcpPort = 35000;
export const tcpHost = '127.0.0.8'; // "0.0.0.0"

// FUNCTIONS
export function uaDateString(date) {
    if (date === undefined) date = new Date();
    return date.toLocaleString("uk-UA", {timeZone: "Europe/Kiev"});
}