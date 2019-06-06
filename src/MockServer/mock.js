var http = require('http');
var mockserver = require('mockserver');
mockserver.headers = ['Access-Control-Allow-Origin'];


 
http.createServer(mockserver('./mocks/firstCallMock')).listen(9001);
http.createServer(mockserver('./mocks/secondCallMock')).listen(9001);
http.createServer(mockserver('./mocks/ThirdCallMock')).listen(9001);
