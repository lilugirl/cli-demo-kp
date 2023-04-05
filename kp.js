#! /usr/bin/env node

var server_port=5502;
var pre='';

// 参数处理
var argv=process.argv;
argv.shift();

if(argv.length>1){
    server_port=argv[1];
   
}

if(argv.length>2 && ( argv[2] == '-s' || argv[2] == '--sudo' )){
    pre='sudo';
}
    

var kp=require('./index.js');
kp(server_port,pre);