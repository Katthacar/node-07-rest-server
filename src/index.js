require('dotenv').config();

const app = require('./server/server');
require('./server/database');

async function main() {
  await app.listen(app.get('port'));
  console.log(`Server Listening on Port ${app.get('port')}`);
}

main();
