/*
var express = require('express');
var app = express();
app.get('/', function(req, res){
var sql = require("mssql");
//config your database
var config = {
    
    //server: "192.168.18.5,1433",
    //port: 1452,
    //port: 1433,
    user: 'adina',
    password: 'adina786',
    server: 'localhost',
    database: 'StudentDB'
};
//connect to your database
sql.connect(config, function(err){
  if(err) 
  console.log(err);
//create request object
  var request = new sql.Request();
//query to the database and get the records
  request.query('Select distinct * from StudentTable', function(err, recordset){
  if (err) console.log(err);
//send records as a response
res.send(recordset);
});
});
sql.close();  
});
var server = app.listen(5000, function(){
console.log('server is running..');
});
*/

var Connection = require('tedious').Connection;  
    var config = {  
        server: 'localhost',  //update me
        authentication: {
            type: 'default',
            options: {
                userName: 'adina', //update me
                password: 'adina786'  //update me
            }
        },
        options: {
            // If you are on Microsoft Azure, you need encryption:
            encrypt: false,
            database: 'StudentDB'  //update me
        }
    }; 
    var connection = new Connection(config);  
    connection.on('connect', function(err) {  
        // If no error, then good to proceed.  
        console.log("Connected");  
        executeStatement();  
    });  
    
    connection.connect();
  
    var Request = require('tedious').Request;  
    var TYPES = require('tedious').TYPES;  
  
    function executeStatement() {  
        request = new Request("SELECT * FROM StudentTable;", function(err) {  
        if (err) {  
            console.log(err);}  
        });  
        var result = "";  
        request.on('row', function(columns) {  
            columns.forEach(function(column) {  
              if (column.value === null) {  
                console.log('NULL');  
              } else {  
                result+= column.value + " ";  
              }  
            });  
            console.log(result);  
            result ="";  
        });  
  
        request.on('done', function(rowCount, more) {  
        console.log(rowCount + ' rows returned');  
        });  
        
        // Close the connection after the final event emitted by the request, after the callback passes
        request.on("requestCompleted", function (rowCount, more) {
            connection.close();
        });
        connection.execSql(request);  
    }