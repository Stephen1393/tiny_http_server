function routes(request) {

    if (request.path === "/") {

        return {
            status: "200 OK",
            contentType: "text/plain",
            body: "Custom HTTP server running"
        }
    }

    if (request.path === "/search") { //fake example of search

        return {
            status: "200 OK",
            contentType: "application/json",
            body: JSON.stringify({
                results: ["cat", "dog", "bird"],
                count: 3
            })
        }
    }

    return {
        status: "404 Not Found",
        contentType: "text/plain",
        body: "Route not found"
    }
}

module.exports = routes