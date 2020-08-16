import express = require('express')
const app = express()
//静的ファイル
app.use(express.static('public'));

app.get('/',(req,res)=>{
  res.send('hello world')
})
app.listen(3333,()=> {console.log('server running !!!')})
