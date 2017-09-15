const mongoose = require('mongoose')
  mongoose.Promise = Promise
  mongoose.connect('mongodb://localhost/Something')
  var db =mongoose.connection
  db.on('open',function(){
      console.log('数据库链接成功')
  })
  db.on('error',function(){
      console.log('数据库连接失败')
  })

  var Schema = mongoose.Schema
  var somethingSchema = new Schema({
      username:String,
      password:String,
      repassword:String
  })
  var Some = mongoose.model('somes',somethingSchema)
  module.exports = Some