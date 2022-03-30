var mysql = require('mysql');

var db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Nav@gur1",
    database: "Facebook_clone"
});

// db.connect(function(err) {
//     if (err) throw err;
//     console.log("database connected");
//     var sql = "DROP TABLE registration";
//     db.query(sql, function(err, result) {
//         if (err) throw err;
//         console.log("Table deleted");
//     });
// });

// db.connect(function(err) {
//     if (err) throw err;
//     console.log("database connected");
//     var sql = "CREATE TABLE registration(user_id INT AUTO_INCREMENT PRIMARY KEY,Name VARCHAR(320) NOT NULL ,Email VARCHAR(320) NOT NULL ,password VARCHAR(255) NOT NULL,unique key (Email))"
//     db.query(sql, (err, result) => {
//         if (err) throw err;
//         console.log("table created");
//     })
// })



// db.connect(function(err) {
//     if (err) throw err;
//     console.log("database connected");
//     var sql = "CREATE TABLE Friend_Requests(friend_id INT AUTO_INCREMENT PRIMARY KEY,user_id int,foreign key(user_id) references registration(user_id))"
//     db.query(sql, (err, result) => {
//         if (err) throw err;
//         console.log("table created");
//     })
// })


// db.connect(function(err) {
//     if (err) throw err;
//     console.log("database connected");
//     var sql = "CREATE TABLE Friends(accept_friend_id INT AUTO_INCREMENT PRIMARY KEY,friend_id int,foreign key(friend_id) references Friend_Requests(friend_id),user_id int,foreign key(user_id) references registration(user_id))"
//     db.query(sql, (err, result) => {
//         if (err) throw err;
//         console.log("table created");
//     })
// })



// db.connect(function(err) {
//     if (err) throw err;
//     console.log("database connected");
//     var sql = "CREATE TABLE posts(post_id INT AUTO_INCREMENT PRIMARY KEY,Title VARCHAR(320) NOT NULL ,description VARCHAR(320) NOT NULL ,user_id int,foreign key(user_id) references registration(user_id))"
//     db.query(sql, (err, result) => {
//         if (err) throw err;
//         console.log("table created");
//     })
// })





// db.connect(function(err) {
//     if (err) throw err;
//     console.log("database connected");
//     var sql = "CREATE TABLE Visibility(Visibility_id INT AUTO_INCREMENT PRIMARY KEY,privatepublic VARCHAR(320) NOT NULL,user_id int,foreign key(user_id) references registration(user_id))"
//     db.query(sql, (err, result) => {
//         if (err) throw err;
//         console.log("table created");
//     })
// })