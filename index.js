// Server'ı buradan başlatın
const server = require('./api/server')
const PORT = process.env.PORT || 9000;

server.listen(PORT,()=>{
`server is listening on ${PORT}`
})