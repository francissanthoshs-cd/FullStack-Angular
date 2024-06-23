const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();

app.use(cors());
app.use(bodyParser.json());

//database connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "angular",
  port: 3306,
});

// check database Connection
db.connect((err) => {
  if (err) console.log("Error Connecting to Database");
  console.log("Angular Database Connected");
});

//Get all Data
app.get("/user", (req, res) => {
  let qr = `Select * from user`;
  db.query(qr, (err, result) => {
    if (err) console.log("Error Fetching Data", err);
    if (result.length > 0)
      res.send({
        message: "All Users Data",
        data: result,
      });
  });
});

//Get Single User
app.get("/user/:id", (req, res) => {
  let gId = req.params.id;
  let qr = `Select * from user where id=${gId}`;
  db.query(qr, (err, result) => {
    if (err) console.log("Error Fetching the User with the ID", gId);
    if (result.length > 0) {
      res.send({
        message: "Get Single User's Data",
        data: result,
      });
    } else {
      res.send({ message: "Data not found" });
    }
  });
});

//Create Data
app.post("/createuser", (req, res) => {
  console.log(req.body, "createData");
  let fullName = req.body.fullname;
  let eMail = req.body.email;
  let mb = req.body.mobile;

  let qr = `insert into user(fullname,email,mobile) 
            values('${fullName}','${eMail}','${mb}')`;
  db.query(qr, (err, result) => {
    if (err) console.log(err);
    console.log(result, "result");
    res.send({
      message: "data inserted",
    });
  });
});

//Update Single Data
app.put("/updateuser/:id", (req, res) => {
  console.log(req.body, "UpdateData");
  let gId = req.params.id;
  let fullName = req.body.fullname;
  let eMail = req.body.email;
  let mb = req.body.mobile;

  let qr = `update user set fullname='${fullName}', email='${eMail}', mobile=${mb} 
            where id=${gId}`;

  db.query(qr, (err, result) => {
    if (err) console.log(err);
    console.log(result, "result");
    res.send({
      message: "data updated",
    });
  });
});

//Delete Single Data
app.delete("/deleteuser/:id", (req, res) => {
  let qId = req.params.id;
  let qr = `delete from user where id=${qId}`;
  db.query(qr, (err, result) => {
    if (err) console.log(err);
    console.log(result, "result");
    res.send({
      message: "data deleted",
    });
  });
});

app.listen(3000, () => {
  console.log("Server Running on 3000");
});
