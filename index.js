import mysql from 'mysql2';

const pool = mysql.createPool ({
    host: '127.0.0.1',
    user: 'root',
    password: 'senac@02',
    database: 'larissa'
}).promise();

const result = await pool.query("update `sakila`.`actor`set `first_name` = 'ricardo'where `actor_id` = 183;");
console.log(result);