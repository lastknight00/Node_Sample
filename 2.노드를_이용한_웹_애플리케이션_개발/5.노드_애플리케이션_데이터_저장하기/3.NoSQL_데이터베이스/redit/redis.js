var redis = require('redis');
var client = redis.createClient(6379, '127.0.0.1');

client.on('error', function(err) {
	console.log('Error ' + err);
});

/********************************데이터 조작********************************/
//client.set('color', 'red', redis.print);
client.set('color', 'blue', function(err, result) {
	if(err) throw err;
	console.log(result);
});

client.get('color', function(err, value) {
	if(err) throw err;
	console.log('Got: ' + value);
});
/********************************데이터 조작********************************/

/********************************해시 테이블********************************/
client.hmset('camping', {
	'shelter' : '2-person tent',
	'cooking' : 'campstove'
}, redis.print);

client.hget('camping', 'cooking', function(err, value) {
	if(err) throw err;
	console.log('Will be cooking with: ' + value);
});

client.hkeys('camping', function(err, keys) {
	if(err) throw err;
	keys.forEach(function(key, i) {
		console.log(' ' + key);
	})
});
/********************************해시 테이블********************************/

/********************************리스트********************************/
client.lpush('tasks', 'Paint the bikeshed red.', redis.print);
client.lpush('tasks', 'Paint the bikeshed greed.', redis.print);
client.lrange('tasks', 0, -1, function(err, items) {//-1은 마지막 인자를 의미
	if(err) throw err;
	console.log(items.length);
	items.forEach(function(item, i) {
		console.log(' ' + item);
	});
});
/********************************리스트********************************/

/********************************SET********************************/
client.sadd('ip_addresses', '204.10.37.96', redis.print);
client.sadd('ip_addresses', '204.10.37.96', redis.print);
client.sadd('ip_addresses', '72.32.231.8', redis.print);
client.smembers('ip_addresses', function(err, members) {
	if(err) throw err;
	console.log(members);
});
/********************************SET********************************/