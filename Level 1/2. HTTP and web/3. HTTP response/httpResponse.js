// function readHttpLikeInput() {
//     var fs = require("fs");
//     var res = "";
//     var buffer = Buffer.alloc ? Buffer.alloc(1) : new Buffer(1);
//     let was10 = 0;
//     for (; ;) {
//         try {
//             fs.readSync(0 /*stdin fd*/, buffer, 0, 1);
//         } catch (e) {
//             break; /* windows */
//         }
//         if (buffer[0] === 10 || buffer[0] === 13) {
//             if (was10 > 10)
//                 break;
//             was10++;
//         } else
//             was10 = 0;
//         res += new String(buffer);
//     }
//
//     return res;
// }
//
// // let contents = readHttpLikeInput();

function outputHttpResponse(statusCode, statusMessage, headers, body) {
    let headersToString = ""
    for (let key in headers) {
        headersToString += key + ": " + headers[key] + "\n"
    }
    console.log(`${statusCode} ${statusMessage}\n${headersToString}\n${body}`);
}

function processHttpRequest($method, $uri, $headers, $body) {
    $headers["Date"] = new Date(Date.now());
    $headers["Server"] = "Apache/2.2.14 (Win32)";
    $headers["Connection"] = "Closed";
    $headers["Content-Type"] = "text/html; charset=utf-8"

    let statusCode = "HTTP/1.1 400", statusMessage = "Bad Request";

    if ($method === "GET" && /^\/sum/.test($uri)) {
        if (/^\/sum\?nums=/.test($uri)) {
            statusCode = "HTTP/1.1 200";
            statusMessage = "OK";
            $body += $uri.replace("/sum?nums=", "").split(",").reduce((a, i) => a += +i, 0);
        } else {
            statusCode = "HTTP/1.1 404";
            statusMessage = "Not Found";
            $body += "not found";
        }
    } else {
        $body += "not found";
    }

    $headers["Content-Length"] = $body.length;
    outputHttpResponse(statusCode, statusMessage, $headers, $body);
}

function parseTcpStringAsHttpRequest($string) {
    let arr = $string.split("\n");
    let headLine = arr[0];
    let aHeaders = {};
    let isHeadersDone = false;
    let aBody = ""
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].length === 0) {
            isHeadersDone = true;
        }

        let header = arr[i].split(":")
        if (header.length !== 2 || header[0] === arr[i]) {
            isHeadersDone = true;
        }

        if (!isHeadersDone) {
            aHeaders[header[0].trim()] = header[1].trim()
        } else if (arr[i].length > 0) {
            aBody += arr[i] + "\n";
        }

    }

    return {
        method: headLine.split(" ")[0],
        uri: headLine.split(" ")[1],
        headers: aHeaders,
        body: aBody,
    };
}


contents = `GET /sum?nums=1,2,3 HTTP/1.1
Host: student.shpp.me
`
http = parseTcpStringAsHttpRequest(contents);
processHttpRequest(http.method, http.uri, http.headers, http.body);
