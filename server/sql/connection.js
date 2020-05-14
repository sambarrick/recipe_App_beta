const mysql = require('mysql')

class Connection {
  constructor() {
    if (!this.pool) {
      console.log('creating mysql connection...')
      this.pool = mysql.createPool({
        connectionLimit: 100,
        host: '34.71.170.227',
        user: 'root',
        password: '',
        database: 'recipe_app_sql_db'
      })
console.log("connection made")
      return this.pool
    }

    return this.pool
  }
}

const instance = new Connection()

module.exports = instance;