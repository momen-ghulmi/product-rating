var mysql = require('mysql');
const express = require('express');

var con = mysql.createConnection({
  host: "localhost",
  user: "momen",
  password: "momen",
  database: "testDB",

});

const app = express();
const port = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
con.connect(function(err) {
  if (err) throw err;
  console.log("connected");
})
console.log("listening on " + port)

app.get('/product/1', (req, res) => {
  statement = "";
  con.query("select * from product", function(err, result) {
    if (err) throw err;
    data = result[0];
    rating = [];
    for(var i = 0; i< 5; i++) {
      if(data.rating < i+1) {
        if(parseFloat(data.rating) - (i) == 0.5) {
          rating[i] = 0.5;
        }
        else{
        rating[i] = 0;
        }
      }
      else {
        rating[i] = 1;
      }
    }
    data.rating = rating;
    res.send(JSON.stringify(data));
  });})
  app.listen(port, (err) => {
    if(err) { console.log(err) };
    console.log('Listening on port ' + port);
  })