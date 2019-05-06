const WebSocket = require('ws');
const faker = require('faker');

const port = process.env.PORT || 3000;
const WebSocketServer = WebSocket.Server;
const server = new WebSocketServer({ port: port });

const broadcast = payload => {
  server.clients.forEach(client => {
    client.send(JSON.stringify(payload));
  });
};

server.on('connection', ws => {
  console.log('New connection arrived');
  const name = faker.internet.userName();
  const avatar = faker.internet.avatar();
  const user = { name, avatar };
  broadcast({ type: 'CONNECT', user });
  ws.on('message', message => {
    try {
      const date = new Date();
      console.log(name, date, message);
      const type = 'NEW_MESSAGE';
      broadcast({ type, message, date, user });
    } catch (e) {
      console.error(e.message);
    }
  });
  ws.on('close', () => {
    broadcast({ type: 'DISCONNECT', user });
  });
});

console.log('Server is running on port', 3000);
