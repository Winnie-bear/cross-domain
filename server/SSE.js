var app=require("express")();
app.get("/sse",function (req,res) {
    res.append("Access-Control-Allow-Origin","http://www.winnie.cn");
    res.append("Content-Type","text/event-stream");
    res.write("event: connecttime\n");
    var timer=setInterval(function () {
    //\r使光标移动到本行行首，\n使光标移动到下一行行首
        res.write(`data:${new Date()}\r\n\n`);
    },2000);
});

app.listen(8088);