module.exports = function(app)
{
	var labels = require("../data/labels.json");
	var labels_hi_IN = require("../data/labels_hi_IN.json");
	app.get('/',function(req,res, next){
		res.render('index.html')
	});
	app.get('/about',function(req,res, next){
		res.render('about.html');
	});
	app.get('/test',function(req,res){
		res.render('about.html');
	});
	app.get('/headers',function(req,res,next){
		res.json(req.headers);
	});
	app.post('/text',function(req,res,next){
		res.send('This call will return some TEXT.');
	});
	app.post('/save',function(req,res,next){
		console.log(req.body);
		//res.render('about.html');
		res.json({"status": "SUCCESS"});
	});
	app.get('/labels/:lang?',function(req,res,next){
		var lang = req.params.lang;
		console.log("Language = "+ lang);
		if(lang && lang === "hi" ){
			res.json(labels_hi_IN);
		}else {
			res.json(labels);
		}
	});
	app.get('/loginCaptcha',function(req,res,next){
		var loginCaptcha = require("../data/loginCaptcha.json");
		res.json(loginCaptcha);
	});
	app.get('/login',function(req,res,next){
		var resp = require("../data/requestToken.json");
		res.json(resp);
	});
	app.get('/validateUser',function(req,res,next){
		var resp = require("../data/validateUser.json");
		res.json(resp);
	});
	app.get('/tbisResult',function(req,res,next){
		var resp = require("../data/tbisResult.json");
		res.json(resp);
	});
}
