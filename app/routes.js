	// red data ---------------------------------------------------------------------
	// all contacts
	var contacts=[{Head:'Mohit Aggarwal',Id:'1',Number:'+919873978939'},
	                          {Head:'Priyansh Goel',Id:'2', Number:'+919643317648'},
	                          {Head:'Mohit Jio',Id:'3', Number:'+919410675400'},
	                          {Head:'Priyansh Watsapp',Id:'4', Number:'+919410849035'}];

	// all mesages will be stored here
	var messages=[];
	var value=0;

	module.exports = function(app) {

	// api ---------------------------------------------------------------------

	// get Value
	app.get('/api/getvalue', function(req, res) {		
		res.json(value);
    });
    
    
    app.get('/api/sendValue', function(req, res) {
		console.log("Get Update req received");
		value=req.query.value;
		res.json(value);			

	});

	// Update Value
	app.post('/api/sendValue', function(req, res) {
		console.log("Post req received");
		value=req.body.value;
		//console.log(req);
		res.json(value);			

	});
		
	// application -------------------------------------------------------------
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html'); 
	});
};
