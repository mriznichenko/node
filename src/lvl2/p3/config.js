// KOYEB
// 104.22.78.190
// 104.22.79.190
// 172.67.24.44


// export const koyebServerIP = "104.22.78.190";
// export const koyebServerBareAddress = "testapp-mriznichenko.koyeb.app"; 

// HTTP
export const HTTPserverPort = process.env.HTTP_PORT || 11000;
export const HTTPserverAddress = "0.0.0.0";

// UDP
export const UDPserverHost = "0.0.0.0";
export const UDPserverPort = process.env.UDP_PORT || 22000;
export const UDPclientPort = 22001;
export const UDPclientSocketTimeout = 5000;

// TCP
export const TCPserverPort = process.env.TCP_PORT || 33000;
export const TCPclientPort = 33001;
export const TCPserverHost = "0.0.0.0";

// FUNCTIONS
export function uaDateString(date) {
    return (new Date(date) ?? new Date()).toLocaleString("uk-UA", { timeZone: "Europe/Kiev" });
}