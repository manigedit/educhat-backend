const express = require('express')

const app = express();
const port = 3100;


app.get('/', (req, res) => {
    res.send('Hii there bro');
})


server = app.listen(port, () => {
    console.log(`App listening at http://localhost/${port}`)
})

const io = require('socket.io')(server)

io.on('connection', (socket) => {
    console.log('New connection')
})
