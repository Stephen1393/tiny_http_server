function createResponse(status, contentType, body) {

    //responds to the browser with correct HTTP format

    const response = `HTTP/1.1 ${status}
Content-Type: ${contentType}
Content-Length: ${body.length}

${body}`

    return response
}

module.exports = createResponse