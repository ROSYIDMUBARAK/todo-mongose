require("dotenv").config()

const mongoose = require('mongoose');

const DB_URL = process.env.DB_URL || "mongodb://localhost/todo_mongose";

const db = mongoose.connect(DB_URL)

module.exports = db