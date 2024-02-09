const WebSocket = require('ws');

const PORT = process.env.PORT || 3000

const wss = new WebSocket.Server({ port: PORT });

wss.on('connection', function connection(ws) {
  console.log('A new client connected');

  ws.on('message', function incoming(message) {
    console.log('Received:', message);
    
    // Echo the message back to the client
    ws.send(message);
  });

  ws.on('close', function close() {
    console.log('Client disconnected');
  });
});
