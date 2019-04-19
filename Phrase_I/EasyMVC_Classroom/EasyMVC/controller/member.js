module.exports = function () {
    
    this.index = function (request, response) {
        var mysql = require("mysql");
        var connection = mysql.createConnection({
           host: "localhost",
           user: "root",
           password: "",
           database: "easyMvcDb"
        });
        
        connection.connect(function (err) {
            if (err) {
                console.log("cannot connect");
            }
        })
        
        connection.query("select * from member",
          "",
          function (err, rows) {
            response.render("member/index.html", 
            { 
                rows: rows,
                request: request,
                response: response
            });
          }
        );
    }

    this.edit = function (request, response) {
       // response.send(request.query.id);

        var mysql = require("mysql");
        var connection = mysql.createConnection({
           host: "localhost",
           user: "root",
           password: "",
           database: "easyMvcDb"
        });
        
        connection.connect(function (err) {
            if (err) {
                console.log("cannot connect");
            }
        })
        
        connection.query("select * from member where memberId = ?",
          [request.query.id],
          function (err, rows) {
            response.render("member/edit.html", 
            { 
                rows: rows,
                request: request,
                response: response
            });
          }
        );

        //response.render("member/edit.html", {})
    }

    
    this.post_edit = function (request, response) {

        var mysql = require("mysql");
        var connection = mysql.createConnection({
           host: "localhost",
           user: "root",
           password: "",
           database: "easyMvcDb"
        });
        
        connection.connect(function (err) {
            if (err) {
                console.log("cannot connect");
            }
        })
        
        connection.query("update member set memberName = ?, memberCity = ? where memberId = ?",
          [request.body.memberName, request.body.memberCity, request.body.memberId],
          function (err, rows) {
            response.redirect("/member/index");
          }
        );

        // response.send(request.body);
    }
}
