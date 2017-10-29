var http = require('http')
var fs = require('fs')
var url = require('url')
var port = process.argv[2]

if(!port){
  console.log('请指定端口号\nnode server.js 8888 例如')
  process.exit(1)
}

var server = http.createServer(function(request, response){
  var parsedUrl = url.parse(request.url, true)
  var path = request.url 
  var query = ''
  if(path.indexOf('?') >= 0){ query = path.substring(path.indexOf('?')) }
  var pathNoQuery = parsedUrl.pathname
  var queryObject = parsedUrl.query
  var method = request.method

  /************ 代码开始 ************/



  console.log('HTTP 路径\n' + path)
  if(path == '/'){
    response.setHeader('Content-Type', 'text/html; charset=utf-8')
    response.write('<!DOCTYPE>' + 
    '<head> <link rel="stylesheet" href="/style.css"></head>' + 
    '<body><div class="shake">網絡一線牽 珍惜這段緣</div>' +
    '<script src="/main.js"></script> ' +
    '</body>')
    response.end()	
  }else if(path == '/style.css'){
    response.setHeader('Content-Type', 'text/css; charset=utf-8')
    response.write('body{background-color: pink;}' + 
    '@-webkit-keyframes shake {0%{-webkit-transform:translate(2px, 2px);}25%{-webkit-transform:translate(-2px, -2px);}50%{-webkit-transform:translate(0px, 0px);}75%{-webkit-transform:translate(2px, -2px);}100%{-webkit-transform:translate(-2px, 2px);}}@keyframes shake {0%{transform:translate(2px, 2px);}25%{transform:translate(-2px, -2px);}50%{transform:translate(0px, 0px);}75%{transform:translate(2px, -2px);}100%{transform:translate(-2px, 2px);}}.shake{position: relative;top: 30px;left: 100px;width: 200px;color: #1589F5;content-heigh:80px;}.shake:hover{-webkit-animation:shake 0.2s infinite;animation:shake 0.2s infinite;}'
    )
    response.end()
  }else if(path == '/main.js') {
    response.setHeader('Content-Type','text/javascript; charset=utf-8')
    response.write('alert("测试")')
    response.end()
  }else{
    response.statusCode = 404
    response.end()
  }	  



  /************ 代码结束 ************/
})

server.listen(port)
console.log('监听 ' + port + ' 成功\n请用浏览器打开 http://localhost:' + port)


