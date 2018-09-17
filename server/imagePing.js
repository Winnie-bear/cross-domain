var app=require('express')();
app.get('/img',function (req,res) {
  res.send("我是一张图片");
});
app.listen(3000);