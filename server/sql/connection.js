require ('dotenv').config() 

const mysql = require('mysql')

class Connection {
  constructor() {
    if (!this.pool) {
      console.log('creating mysql connection...')
      this.pool = mysql.createPool({
        connectionLimit: 100,
        host: '34.71.170.227',
        user: 'root',
        password: process.env.SQL_SECRET,
        database: 'recipe_app_sql_db',
        port: 3306

      })
console.log("connection made")
      return this.pool
    }

    return this.pool
  }
}

const instance = new Connection()

module.exports = instance;