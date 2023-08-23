const http = require('http')
const port = 1234
const url = require('url')

const server = http.createServer(sayHello)

function sayHello(req, res){
    // Request - client side / browser
    // Response - server responses
    // do something 
    
    res.writeHead(200, {'Content-Type': 'text/html' })

    let myURL = req.url; 

    let queryString = url.parse(myURL, true).query

    console.log(queryString)

    if (myURL.startsWith('/summer') ){
        
        res.write(`Hello ${queryString['lastName']}, it is summer`)
        res.write(" It is very, very hot")

    } else if (myURL.substring(0,7)  === '/winter'){

        res.write("Hello world, it is winter")
        res.write(" It is very, very cold")

    } else if (myURL.substring(0,5)  ==='/fall'){

        res.write("Hello world, it is fall")
        res.write(" It is very, very cool")

    } else if (myURL.substring(0,7)  === '/spring'){

        res.write("Hello world, it is spring")

        res.write(" It is also very, very cool")

    } else {

        res.write("Hello world, I  have no idea what this season is")

    }

    res.end()


}

server.listen(port)