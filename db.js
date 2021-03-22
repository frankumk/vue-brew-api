const Sequelize = require('sequelize')
const { STRING, INTEGER, DATE } = Sequelize

const db = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/review_lines_db');


const Saved = db.define('saved',{
  name: {
    type: STRING
  }
})

module.exports = {
  db,
  Saved
}