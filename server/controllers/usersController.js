const mysql = require('mysql')
const pool = require('../sql/connection')
const { handleSQLError } = require('../sql/error')


const getAllUsers = (req, res) => {
    pool.query("SELECT * FROM users", (err, rows) => {
      if (err) return handleSQLError(res, err)
      return res.json(rows);
    })
  }
  
  const addUser = (req, res) => {
    const { first_name, last_name, email, password } = req.body
    console.log(req.body, 'did this work?');
    let sql = "INSERT INTO users (first_name, last_name, email, password) VALUES (?, ?, ?, ?)"
    sql = mysql.format(sql, [ first_name, last_name, email, password ])
    pool.query(sql, (err, results) => {
      if (err) return handleSQLError(res, err)
      return res.json({ newId: results.insertId });
    })
  }

  const getUsersById = (req, res) => {
    let sql = "SELECT * FROM users WHERE id = ?"
    sql = mysql.format(sql, [ req.params.id ])
  
    pool.query(sql, (err, rows) => {
      if (err) return handleSQLError(res, err)
      return res.json(rows);
    })
  }

  module.exports = {
    getAllUsers,
    addUser,
    getUsersById
  }