var app=require('express')();

app.get("/poll/:id",function (req,res) {
    res.append("Access-Control-Allow-Origin","http://www.winnie.cn");
    setTimeout(function () {
        res.send("第"+req.params.id+"次请求");
    },2000)
});

app.get("/stream",function (req,res) {
    res.append("Access-Control-Allow-Origin","http://www.winnie.cn");
    res.append('Content-Type','text/html');
    var count = 0;
    setTimeout(function generateRandomNum() {
        res.write(Math.random()+' ');
        count++;
        if(count<5){
            /* 现在已经不推荐使用arguments.callee()；
            原因：访问 arguments 是个很昂贵的操作，因为它是个很大的对象，
            每次递归调用时都需要重新创建。影响现代浏览器的性能，还会影响闭包。*/
            /* setTimeout(arguments.callee,1000); */
                setTimeout(generateRandomNum,1000);
        }else{
        /* 结束响应，告诉客户端所有消息已经发送。当所有要返回的内容发送完毕时，该函数必须被调用一次。
            如何不调用该函数，客户端将永远处于等待状态。 */
            res.end();
        }
    },1000);
});
app.listen(3000);