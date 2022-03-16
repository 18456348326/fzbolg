// 后端的启动文件
// 引入express
const express = require('express')
let app = express()

// 引入post数据解析器
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// app监听端口
app.listen('3000', () => {
  console.log('服务启动在3000')
})
