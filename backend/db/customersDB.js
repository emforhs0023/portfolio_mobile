var pool = require("../services/database").pool;

module.exports.dataInfo = function(callback){
	
	pool.getConnection(function(err, connection){
		if(err){
			console.log(err);
			callback(false);
			return;
		}
		var query = "SELECT * FROM tbl_mainimg";
	
		connection.query(query, [], function(err,result){
			connection.release()

			if(err){
				console.log(err);
				callback(false)
			}

			callback(result)
		})
	})
}

module.exports.mobileDataInfo = function(lastId, limit, callback){
	pool.getConnection(function(err, connection){
		lastId = Number(lastId);
		limit = Number(limit);
		
		if(err){
			console.log(err);
			callback(false);
			return;
		}
		var query = "SELECT * FROM tbl_mainimg WHERE seq > ? ORDER BY seq DESC LIMIT 0, ?";
	
		connection.query(query, [lastId, limit], function(err,result){
			connection.release()

			if(err){
				console.log(err);
				callback(false)
			}

			callback(result)
		})
	})
}

module.exports.mobileMoreList = function(lastId, limit, callback){
	pool.getConnection(function(err, connection){
		lastId = Number(lastId);
		limit = Number(limit);
		
		console.log(lastId)
		console.log(limit)

		if(err){
			console.log(err);
			callback(false);
			return;
		}
		var query = "SELECT * FROM tbl_mainimg WHERE seq < ? ORDER BY seq DESC LIMIT 0, ?";
	
		connection.query(query, [lastId, limit], function(err,result){
			connection.release()

			if(err){
				console.log(err);
				callback(false)
			}

			callback(result)
		})
	})
}

module.exports.logoInfo = function(callback){
	
	pool.getConnection(function(err, connection){
		if(err){
			console.log(err);
			callback(false);
			return;
		}
		var query = "SELECT * FROM tbl_logo";
	
		connection.query(query, [], function(err,result){
			connection.release()

			if(err){
				console.log(err);
				callback(false)
			}

			callback(result)
		})
	})
}

module.exports.detailInfo = function(params, callback){
	
	pool.getConnection(function(err, connection){
		if(err){
			console.log(err);
			callback(false);
			return;
		}
		var query = "SELECT * FROM tbl_data WHERE projectName = ? ";
	
		connection.query(query, [params], function(err,result){
			connection.release()

			if(err){
				console.log(err);
				callback(false)
			}

			callback(result)
		})
	})
}

module.exports.homePageList = function(lastId, limit, callback){
	pool.getConnection(function(err, connection){
		lastId = Number(lastId);
		limit = Number(limit);
		
		if(err){
			console.log(err);
			callback(false);
			return;
		}
		var query = "SELECT t2.seq ,t2.img, t2.title FROM tbl_data t1 JOIN tbl_homepage t2 ON t1.projectName = t2.projectName WHERE t2.projectName = 'homePage' AND t2.seq > ? ORDER BY t2.seq DESC LIMIT 0, ?";
	
		connection.query(query, [lastId, limit], function(err,result){
			connection.release()

			if(err){
				console.log(err);
				callback(false)
			}

			callback(result)
		})
	})
}

module.exports.moreHomePageList = function(lastId, limit, callback){
	pool.getConnection(function(err, connection){
		lastId = Number(lastId);
		limit = Number(limit);
		
		if(err){
			console.log(err);
			callback(false);
			return;
		}
		var query = "SELECT t2.seq ,t2.img, t2.title FROM tbl_data t1 JOIN tbl_homepage t2 ON t1.projectName = t2.projectName WHERE t2.projectName = 'homePage' AND t2.seq < ? ORDER BY t2.seq DESC LIMIT 0, ?";
	
		connection.query(query, [lastId, limit], function(err,result){
			connection.release()

			if(err){
				console.log(err);
				callback(false)
			}

			callback(result)
		})
	})
}

