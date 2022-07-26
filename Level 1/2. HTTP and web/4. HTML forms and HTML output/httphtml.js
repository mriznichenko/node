const canonicalHttp = "HTTP/1.1";
const canonicalUri = "/api/checkLoginAndPassword";
const canonicalContentType = "application/x-www-form-urlencoded";

function outputHttpResponse(statusCode, statusMessage, headers, body) {
    let headersToString = ""
    for (let key in headers) {
        headersToString += key + ": " + headers[key] + "\n"
    }
    console.log(`${canonicalHttp} ${statusCode} ${statusMessage}\n${headersToString}\n${body}`);
}

function processHttpRequest($method, $uri, $headers, $body) {
    const parseLoginPasswordTuple = bodyString => bodyString
        .split("\n")
        .map(line => line.trim())
        .filter(line => line.length > 0)
        .reduce((tuple, line) => {
            if (/^login=.+&password=.+$/.test(line)) {
                let $ = line
                    .trim()
                    .replace(/^login=/, "")
                    .split("&password=");
                tuple[$[0]] = $[1];
            }
            return tuple;
        }, {});

    let statusCode, statusMessage, bodyOut;

    if ($uri !== canonicalUri
        || $headers?.["Content-Type"] !== canonicalContentType
        // fixme wtf with body length parsing? maybe in parseTcpStringAsHttpRequest()? there is +1 char, wtf?
        || $body.length !== $headers["Content-Length"]
    ) {
        statusCode = "400";
        statusMessage = "Bad Request"
    } else {
        const loginPassTuple = parseLoginPasswordTuple($body);
        const rq = require("fs").readFileSync("./loginPassTemplates.txt", {
            encoding: "utf8",
            flag: "r"
        });

        const db = parseLoginPasswordTuple(rq);

        const user = Object.keys(loginPassTuple)[0]
        const pass = loginPassTuple[user]

        const userOK = user in db;
        const passOK = pass === db[user]

        let wasFound = userOK && passOK; // todo add check is body tuple in db tuple;

        let color = wasFound ? "green" : "red";
        let text = wasFound ? "FOUND" : "NOT FOUND";

        statusCode = wasFound ? 200 : 404;
        statusMessage = wasFound
            ? "OK"
            : userOK
                ? passOK
                    ? `invalid user`
                    : "invalid password"
                : "invalid user";

        bodyOut = `<h1 style="color:${color}">${text}</h1>`;
    }

    $headers["Date"] = new Date(Date.now());

    outputHttpResponse(statusCode, statusMessage, $headers, bodyOut);
}

function parseTcpStringAsHttpRequest($string) {
    let arr = $string.split("\n");
    let headLine = arr[0];
    let aHeaders = {};
    let isHeadersDone = false;
    let aBody = "";

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

    aHeaders["Content-Length"] = aBody.length


    let [aMethod, aUri] = headLine.split(" ")
    return {
        method: aMethod,
        uri: aUri,
        headers: aHeaders,
        body: aBody,
    };
}

const contents = `POST /api/checkLoginAndPassword HTTP/1.1
Accept: */*
Content-Type: application/x-www-form-urlencoded
User-Agent: Mozilla/4.0
Content-Length: 28

login=student&password=12345
`;

http = parseTcpStringAsHttpRequest(contents);
processHttpRequest(http.method, http.uri, http.headers, http.body);
