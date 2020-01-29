const express = require('express');
const db = require('../db/customersDB')
const router = express.Router();

router.get("/api/dataInfo", (req, res, next) => {
	db.dataInfo((result) => {
		res.send(result)
	})
})

router.get("/api/mobileDataInfo", (req, res, next) => {
	const lastId = req.query.lastId
	const limit = req.query.limit
	
	db.mobileDataInfo(lastId, limit, (result) => {
		res.send(result)
	})
})

router.get("/api/mobile/more", (req, res, next) => {
	const lastId = req.query.lastId
	const limit = req.query.limit

	db.mobileMoreList(lastId, limit, (result) => {
		res.send(result)
	})	
})

router.get("/api/logoInfo", (req, res, next) => {
	db.logoInfo((result) => {
		res.send(result)
	})
})



router.get("/api/:id", (req, res, next) => {
	let params = req.params.id;
	db.detailInfo(params, (result) => {
		res.send(result)
	})	
})

router.get("/api/homeList/data", (req, res, next) => {
	const lastId = req.query.lastId
	const limit = req.query.limit

	db.homePageList(lastId, limit, (result) => {
		res.send(result)
	})	
})

router.get("/api/more/data", (req, res, next) => {
	const lastId = req.query.lastId
	const limit = req.query.limit

	db.moreHomePageList(lastId, limit, (result) => {
		res.send(result)
	})	
})

// router.get("/api/", (req, res, next) => {
// 	console.log(req)
// 	console.log("dsjkljasdklfjadsklfjkldasf")
// 	db.detailInfo((result) => {
// 		console.log(result)
// 		res.send(result)
// 	})	
// })


module.exports = router;
