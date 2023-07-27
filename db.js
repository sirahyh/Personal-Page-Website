const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "sertifikat",
    password: "Rahma.yh33",
    port: 5432
})

module.exports = pool;