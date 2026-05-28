function parseRequest(parseText) {

    //asking what the browser wants by viewing it's path, method and version
    //this happens before the response

    const first_line = parseText.split('r/n/')

    const parts = first_line.split(" ")

    const request = {}

    request.path = parts[0]
    request.method = parts[1]
    request.version = parts[2]

    return request

}

module.exports = {parseRequest}