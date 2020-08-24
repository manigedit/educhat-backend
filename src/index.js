const express = require('express')

const app = express();
const port = 3000;


app.get('/', (req, res) => {
    res.send('Hii there bro');
})


server = app.listen(port, () => {
    console.log(`App listening at http://localhost/${port}`)
})

const io = require('socket.io')(server)

io.on('connection', (socket) => {
    console.log('New connection from', socket.client.conn.remoteAddress)

    socket.username = 'anon';

    socket.on('CHANGE_USERNAME', (data) => {
        console.log('recieved a change username from ', socket.client.conn.remoteAddress, ' with data ', data)
        socket.username = data.username;

        io.sockets.emit('CHANGE_USERNAME_SUCCESS', socket.username )
    })

    socket.on('NEW_MESSAGE', (data) => {
        console.log('Recieved new message from ', socket.client.conn.remoteAddress, ' with data ', data);
        io.sockets.emit('NEW_MESSAGE', {message: data.message, username: socket.username})
    })

})
