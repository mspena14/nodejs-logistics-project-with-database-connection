import mysql2 from 'mysql2/promise';
let pool;

try {
    pool = mysql2.createPool({
        host: 'btb1u63zpcchofpv5qww-mysql.services.clever-cloud.com',
        user: 'uchecfdzdlwyu01s',
        database: 'btb1u63zpcchofpv5qww',
        port: 3306,
        password: 'HTU90bPWjp1pOY9YjC8A',
    })

    console.log('data base conected');
} catch (err) {
    console.log(err);
}

export { pool };