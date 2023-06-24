// Server'ı buradan başlatın
const server = require('./api/server')
const port = process.env.PORT || 9000;

server.listen(PORT,()=>{
`server is listening on ${port}`
})