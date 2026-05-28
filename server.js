const parseRequest = require('./parseRequest')
const createResponse = require('./createResponse')
const routes = require('./routes')


//access nodes TCP module
const net = require('net')

//create server with callback
const server =  net.createServer(function (socket) {

    //when TCP gives bytes, run call back and pass bytes into it
    socket.on("data", (data) => {

        console.log(data.toString())

        const requestText = parseRequest(httpText) //request from browser(what it wants)

        const routeData = routes(requestText)

        const respondData = createResponse(
            respondData.status,
            respondData.content_Type,
            respondData.body
        )

        socket.write(respondData)

        socket.end()
    
    })
})

//ask OS to listen on PORT 3000
server.listen(3000, () => {
    console.log("LISTENING ON PORT 3000...")
})