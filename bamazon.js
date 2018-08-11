var mysql = require("mysql")
var inquirer = require("inquirer")
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "bamazondb"
})

function BamazonLaunch(){

    connection.query('SELECT * FROM Inventory', function(err, res){
        if(err) throw err;
        console.log("================================================")
        console.log("==========Welcome to our online store!==========")
        console.log("=======Enjoy browsing our vast inventory!=======")
        console.log("================================================")

        for(var i =0; i<res.length;i++){
            console.log("#: " + res[i].ID + " || " + "Item: " + res[i].Item + " || " + "Department: " + res[i].Department)
            console.log("Price: $" + res[i].Price + " || " + "Amount Left: " + res[i].Stock)
        }
    })
}