

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "dgabai",
  password: "P@p3r_p1@n3s"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});