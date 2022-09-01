// этот файл надо будет дописать...

// не обращайте на эту функцию внимания
// она нужна для того чтобы правильно читать входные данные
function readHttpLikeInput() {
    var fs = require("fs");
    var res = "";
    var buffer = Buffer.alloc ? Buffer.alloc(1) : new Buffer(1);
    let was10 = 0;
    for (; ;) {
        try {
            fs.readSync(0 /*stdin fd*/, buffer, 0, 1);
        } catch (e) {
            break; /* windows */
        }
        if (buffer[0] === 10 || buffer[0] === 13) {
            if (was10 > 10)
                break;
            was10++;
        } else
            was10 = 0;
        res += new String(buffer);
    }

    return res;
}

let contents = readHttpLikeInput();

// вот эту функцию собственно надо написать
function parseTcpStringAsHttpRequest(string) {
    let asArr = string.split("\n");

    let getpost = asArr[0];
    let aHeaders = {};
    let isHeadersDone = false;
    let aBody = ""
    for (let i = 1; i < asArr.length; i++) {
        let line = asArr[i];
        if (line.length === 0) {
            isHeadersDone = true;
        }


        let header = line.split(":")
        if (header.length !== 2 || header[0] === line) {
            isHeadersDone = true;
        }

        if (!isHeadersDone) {
            aHeaders[header[0].trim()] = header[1].trim()
        } else if (line.length > 0) {
            aBody += line + "\n";
        }

    }

    return {
        method: getpost.split(" ")[0],
        uri: getpost.split(" ")[1],
        headers: aHeaders,
        body: aBody,
    };
}

http = parseTcpStringAsHttpRequest(contents);
console.log(JSON.stringify(http, undefined, 2));