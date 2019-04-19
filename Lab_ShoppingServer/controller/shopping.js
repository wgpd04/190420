module.exports = function (request, response, controllerName) {

    this.request  = request;
    this.response = response;
    this.viewPath = controllerName + "/";
    
    
	this.data = function () {
		
		var this_response = this.response;
		
		var mysql = require("mysql");

		var cn = mysql.createConnection({
		   host: "localhost",
		   user: "root",
		   password: "",
		   database: "shoppingDb"
		});

		cn.connect(function (err) {

			if (err)
				console.log(err);
		});

		cn.query("select * from shopping where clientID = ?",
			[this.request.query.id],
			function (err, rows) {
				console.log("flag 5");
				this_response.send(rows[0].shoppingList);
			}
		
		);
		
	}
	

	this.post_data = function () {
		// console.log(this.request.body.data);
		// return;
		
		var this_response = this.response;
		
		var mysql = require("mysql");

		var cn = mysql.createConnection({
		  host: "localhost",
		  user: "root",
		  password: "",
		  database: "shoppingDb"
		});

		cn.connect(function (err) {

			if (err)
				console.log(err);
		});
		
		cn.query("delete from shopping where clientID = ?",
			[this.request.query.id]
		);

		cn.query("insert into shopping values (?, ?)",
			[this.request.query.id, this.request.body.data],
			function (err, rows) {
				this_response.send("data updated");
			}
		
		);
		
	}




	this.about = function () {
	    // this.response.render(this.viewPath + "about.html", 
	    //     {}
	    // );
	}


	
}
