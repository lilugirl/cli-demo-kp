# liuyi-kp

kp is a tool for kill process by server port. only used for mac && linux

## install

[sudo] npm install -g liuyi-kp

## Usage

default server port is 5502

`$ kp2`

or kill by some port

`$ kp2 3002`

or wit sudo

`$ kp2 3002 -s or kp2 3002 --sudo`

## Code

kill by some port

```
#! /usr/bin/env node

var kp =require("liuyi-kp");
ke(3980);

```

or kill by some port with sudo

```
#! /usr/bin/env node

var kp=require('liuyi-kp');
kp(3980,'sudo')
```

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new pull request

## 历史版本

- v1.0.1 实现可编程调用
- v1.0.0 初始化版本 CLI，实现 kp 导出

## 欢迎 fork 和反馈
- write by `lilugirl` lilugirl2005@126.com

如果有建议或意见， 请在issue
提问或发送邮件

## License

this repo is released under the [MIT License](http://www.opensource.org/license/MIT)