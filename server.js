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

        const httpText = data.toString() //store changed data

        const requestText = parseRequest(httpText) //request from browser(what it wants)

        const routeData = routes(requestText) //call the correct requested structure

        const respondData = createResponse( //returns correct HTTP format for request
            routeData.status,
            routeData.contentType,
            routeData.body
        )

        socket.write(respondData) //sends bytes through the tcp connection

        socket.end() //closes tcp connection
    
    })
})

//ask OS to listen on PORT 3000
server.listen(3000, () => {
    console.log("LISTENING ON PORT 3000...")
})