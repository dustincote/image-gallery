const pg = require('pg');
const Pool = pg.Pool;
const config = {
database: 'react_gallery', // name of the postgres database (this is usually YOUR username!)
host: 'localhost', // localhost is my laptop
port: 5432, // postgres ALWAYS uses this port by default
max: 10, // this is how many db connections this pool has
idleTimeoutMillis: 30000, // wait 30 seconds to connect
};
const pool = new Pool(config);
pool.on('connect', (client) => {
console.log('PostgreSQL is connected');
})
pool.on('error', (err, client) => {
console.log('Unexpected error on client', err);
})
module.exports = pool;