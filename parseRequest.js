function parseRequest(parseText) {

    //asking what the browser wants by viewing it's path, method and version
    //this happens before the response

    const lines = parseText.split("\r\n")

    const first_line = lines[0]

    const parts = first_line.split(" ")
    

    const request = {}

    request.method = parts[0] 
    request.path = parts[1] //this is the one routes finds to return response
    request.version = parts[2]

    return request

}

module.exports = parseRequest