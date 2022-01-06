const server = require('fastify')({
  logger: true
});
const PORT = process.env.PORT || 4000;

console.log(`worker pid=${process.pid}`);

server.get('/', function (request, reply) {
  reply.send({ hello: 'world' })
})

server.listen(PORT, '0.0.0.0', () => {
  console.log(`Producer running at ${PORT}`);
});
