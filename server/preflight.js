'use strict';

var http = require('http');
var server = http.createServer((req, res) => {
  //之后设置了Access-Control-Allow-Origin，才会允许跨域
  //要处理带凭证的请求，此Header不能使用*。
  res.setHeader('Access-Control-Allow-Origin', 'http://www.winnie.cn');
  res.setHeader('Access-Control-Allow-Methods', 'POST, DELETE, GET,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'x-token');
  //设置预请求缓存1天，1天内再次请求，可以跳过预请求
  //此功能需要客户端缓存支持，如果客户端禁用缓存，那么每次都会预请求
  res.setHeader('Access-Control-Max-Age', 60 * 60 * 24);
  //只有设置了该Header，才允许带凭证的请求。
  res.setHeader('Access-Control-Allow-Credentials', true); 
  res.write('Nodejs');
  res.end();
});

server.listen(8888, () => {
  console.log('started.');
});