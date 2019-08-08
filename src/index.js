require('./server/database');
const server = require('./server/server');

async function main() {
  await server.listen(server.get('port'));
  console.log(`Server Listening on Port ${server.get('port')}`);
}

main();
