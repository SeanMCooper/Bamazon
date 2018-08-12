var mysql = require("mysql")
var inquirer = require("inquirer")
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "n/a",
    database: "bamazondb"
})

function showInventory(){

    connection.query('SELECT * FROM Inventory', function(err, res){
        if(err) throw err;
        console.log("==========================================================================================================")
        console.log("=======================================Welcome to our online store!=======================================")
        console.log("====================================Enjoy browsing our vast inventory!====================================")
        console.log("==========================================================================================================")

        for(var i =0; i<res.length;i++){
            console.log("----------------------------------------------------------------------------------------------------------")
            console.log("#: " + res[i].ID + " || " + " Item: " + res[i].Item + " || " + " Department: " + res[i].Department + " Price: $" + res[i].Price + " || " + " Amount Left: " + res[i].Stock)
       
        }

        console.log("==========================================================================================================")
        console.log("=======================================Thanks for seeing our store!=======================================")
        console.log("====================================Come back again soon to see us!!!!====================================")
        console.log("==========================================================================================================")
    
   
    
        inquirer.prompt([
        {
            type: "input",
            name: "buyingItem",
            message: "Please select what you would like to buy ! (indicated by the # on the left!)",
            validate: function(itemNum){
                if(isNaN(itemNum) == false && parseInt(itemNum) <= res.length && parseInt(itemNum) >0 ){
                    return true;     
                }else{
                    console.log("")
                    console.log("Invalid input, please select a valid number from the list!")
                    return false;
                }
            }

        },
        {
            type: "input",
            name: "amount",
            message: "How many would you like to purchase?",
            validate: function(amount){
                if(isNaN(amount)){
                    return false;
                }else{
                    return true;
                }
            }
         
        }
    ]).then(function(answer){

        
        var toPurchase = (answer.buyingItem) - 1
        
        var amountPurchased = parseInt(answer.amount)
        var price = parseFloat(((res[toPurchase].Price)*amountPurchased).toFixed(2));
        var newStock = (res[toPurchase].Stock - amountPurchased)
        var itemName = (res[toPurchase].Item)
        
        if(res[toPurchase].Stock >= amountPurchased){
              


            connection.query("UPDATE Inventory SET Stock = ? WHERE ID = ?", [newStock, answer.buyingItem], 
            function(err, res){
                if(err) throw err;
                console.log("------------------------------------------------------------------------------------------------------------------")
                console.log("You have made your purchase! You will recieve " + amountPurchased + " orders of " + itemName + "!")
                console.log("Your grand total will be $" + price.toFixed(2) + ". Thanks for shopping at Bamazon! Come again!")
                console.log(newStock)
                continueShopping()
            })
        }else{
            console.log("")
            console.log("Sorry stock is too low for that purchase!")
            continueShopping();
        }
        console.log("")
        console.log("")
       
        
    
    })

    })
}
function continueShopping(){
    
    inquirer.prompt([
        {
            type: "list",
            name: "continue",
            message: "Would you like to make more purchases?",
            choices: ["Continue", "No thanks!"]
        }
    ]).then(function(answer){
        if(answer.continue === "Continue"){
            showInventory();
        }else{
            console.log("Thanks for coming by!")
            process.exit()
        }
    })
}

function launchStore(){
    console.log("------------------------------------------------------------------------------------------------------------------")

    inquirer.prompt([
        {
            type: "list",
            name: "shop",
            message: "What would you like to do today?",
            choices: ["Check stores inventory", "Leave"]
        }
    ]).then(function(answer){
        if(answer.shop === "Check stores inventory"){
            showInventory()
        }else{
            console.log("Thanks for coming by!")
            process.exit()
        }
        
        })}

launchStore();