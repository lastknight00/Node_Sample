var connect = require('connect');

connect().use(function hello(req, res) {
	foo();
	res.setHeader('Content-type', 'text/plain');
	res.end('hello world');
}).listen(3000);

function errorHandler() {
	/*******
	 * connect()
	 * .use(router(require('./routers/user')))
	 * .use(router(require('./routers/blog')))//user에서 에러 발생 시, error 파라미터에 대한 처리가 없어서 수행되지 않고 errorHandler까지 제어가 넘어가게된다.
	 * .use(router(require('./routers/admin')))
	 * .use(errorHandler());
	 */
	var env = process.env.NODE_ENV || 'development';
	return function(err, req, res, next) {
		res.statusCode = 500;
		switch(env) {
		case 'development':
			res.setHeader('Content-Type', 'application/json');
			res.end(JSON.stringify(err));
			break;
		default:
			res.end('Server error');
		}
	}
}