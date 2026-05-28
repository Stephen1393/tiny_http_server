function parseRequest(parseText) {

    //asking what the browser wants by viewing it's path, method and version
    //this happens before the response

    const lines = parseText.split("\r\n")

    const first_line = lines[0]

    const parts = first_line.split(" ")
    

    const request = {}

    request.path = parts[0]
    request.method = parts[1]
    request.version = parts[2]

    return request

}

module.exports = {parseRequest}