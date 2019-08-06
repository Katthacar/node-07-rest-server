import server from './server/server';
import './server/database';

async function main() {
  await server.listen(server.get('port'));
  console.log(`Server Listening on Port ${server.get('port')}`);
}

main();
