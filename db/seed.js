var restore = require('mongodb-restore');

restore(
	{
		uri: 'mongodb://localhost:27017/aleph'
	,	root: __dirname + '/aleph'
	}
);