const url = require('url')

const exampleUrl = '/about?name=Jane&city=Boston'

const parsedUrl = url.parse(exampleUrl,true,true)

console.log(`Parsed query string`,parsedUrl.query)

const urlNoQuery = '/about'
const parsedUrlNoQuery = url.parse(urlNoQuery,true)
console.log('URL NO Query', parsedUrlNoQuery.query)