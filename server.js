//access nodes TCP module
const net = require('net')

//create server with callback
const server =  net.createServer(function (socket) {

    //when TCP gives bytes, run call back and pass bytes into it
    socket.on("data", (data) => {

        console.log(data.toString())
    })
})

//ask OS to listen on PORT 3000
server.listen(3000, () => {
    console.log("LISTENING ON PORT 3000...")
})