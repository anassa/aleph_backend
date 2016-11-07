var backup = require('mongodb-backup');

backup(
	{
		uri: 'mongodb://localhost:27017/aleph'
	,	root: __dirname
	}
);