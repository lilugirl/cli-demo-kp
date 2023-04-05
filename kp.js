#! /usr/bin/env node

var server_port=5502;
var pre='';

// 参数处理

var kp=require('./index.js');
kp(server_port,pre);