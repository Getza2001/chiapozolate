const mysql = require('mysql');

const config ={
    host    : 'localhost',
    port    : 3307,
    user    : 'user',
    password: '1234',
    database: 'chiapozolate'
};
const conn = mysql.createConnection(config);
conn.connect(function(err) {
    if (err) throw err;
    console.log('Database is connected successfully !');
});

module.exports = conn;