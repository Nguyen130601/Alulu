const server = require('fastify')();
const PORT = process.env.PORT || 4000;

console.log(`worker pid=${process.pid}`);

server.get('/', function (request, reply) {
  reply.send({ hello: 'world' })
})

server.listen(PORT, () => {
  console.log(`Producer running at ${PORT}`);
});
