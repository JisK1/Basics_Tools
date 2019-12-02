
function randomNum(){
    let {PythonShell} = require('python-shell')
    var path = require("path")

    //var maxNum = document.getElementById("inputMax").value;

    var maxNum = 10;
    var minNum = 0;

    maxNum = parseInt(document.getElementById("inputMax").value)
    minNum = parseInt(document.getElementById("inputMin").value)
    var options = {
        scriptPath: path.join(__dirname, '/../Engine/'),
        args: [maxNum, minNum]
    }

    if(maxNum > minNum){

        PythonShell.run('randomNumGenerator.py', options, function (err, results) {
            if (err) throw err;
            // results is an array consisting of messages collected during execution
            
            //set the value of an html element by id.    
        document.getElementById("output").innerHTML = results;
        document.getElementById("ranNumError").innerHTML = "";
        });

    } else{
        document.getElementById("ranNumError").innerHTML = "Error Max Number must be greater then Min Number.";
    }

}