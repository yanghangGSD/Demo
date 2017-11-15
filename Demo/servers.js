var http = require('http');
var fs = require('fs');


function handle_request(req, res) {
    // 客户端对服务器的请求，说白了就是对相关文件内容的请求。
    var suffix = req.url.substr(req.url.length - 4, req.url.length);
    var realpath = __dirname + '\\' + 'public' + '\\CSS';
    var filename = req.url.substr(req.url.length - 9);
    console.log(filename);
    if (suffix === '.css') {
        res.writeHead(200, { 'Content-Type': 'text/css' });
        console.log(realpath + '\\css\\' + filename)
        res.end(get_file_content(realpath + '\\' + filename));
    } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(get_file_content(__dirname + '\\' + 'public\\Html' + '\\' + 'index.html'));
    }
}
function get_file_content(filepath) {
    return fs.readFileSync(filepath);
}
var server = http.createServer(handle_request);
server.listen(8080);