function enableCors(req, res, next) {
	res.setHeader('Acess-Control-Allow-Origin', '*');
	res.setHeader('Acess-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
	res.setHeader('Acess-Control-Allow-Headers', 'Content-Type');
	next();
}

module.exports = enableCors;
