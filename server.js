const express = require('express')
bodyParser = require('body-parser')
multer = require('multer')
app = express()
form = multer()
cookieParser = require('cookie-parser')

Some = require('./db')

app.use(express.static('www'))
// app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
// 应用cookie
app.use(cookieParser())

// 注册
app.post('/api/regis',(req,res) => {
    var some = new Some(req.body)
    some
    .save()
    .then(function(data){
        console.log(data)
        res.json({code:1,message:'注册成功'})
    })
    .catch(function(err){
        res.json({code:0,message:'注册失败'})
    })
})



// 判断账号是否存在
app.post('/verify/register',(req,res) => {
    Some
    .find(req.body,function(err,data){
        console.log(data)
        if(data.length >=1){
            res.json({code:0,message:'账户已存在'})
        }else{
            res.json({code:1,message:'可以注册'})
        }
    })
})


// 登录
app.post('/api/login',(req,res) => {
    console.log(req.body.username)
    Some
    .find({username:req.body.username},function(err,data){
        if(data.length ==1){
            if(req.body.password == data[0].password){
                // 设置cookie值
              res.cookie('username',req.body.username)
               res.json({code:1,message:'登录成功'})
                  
            }else{
                res.json({code:0,message:'密码错误'})
            }
        }else{
            res.json({code:0,message:'账号不存在'})
        }
    })
})


app.listen(3000,() => {
    console.log('node is ok')
})