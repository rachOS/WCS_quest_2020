const http = require('http')
const url = require('url')
const port = 8000


const testUrl = '/?firstName=Gregory&lastName=Chamekh&city=Bordeaux'
const parsedTestUrl = url.parse(testUrl, true)
const queryParsedUrl = parsedTestUrl.query

const reqHandler = (req, res) => {
    console.log(req.url)
    const { firstName, lastName, city } = queryParsedUrl
    if (req.url === testUrl) {
        res.end(` Hello ${firstName} ${lastName} from ${city}`)
    }else if(req.url === '/'){
        res.end('hello <firstname> <lastname> from <city>')
    }else{
        res.end(
            `
            BAD REQUEST PUNK!
            go to /?firstName=Gregory&lastName=Chamekh&city=Bordeaux
            and try again hu!
            `
            )
    }

}

const server = http.createServer(reqHandler)
server.listen(port, (error) => {
    error ? 'Bad request' : `the server is listening the ${port} port`
}
)
