//Takes the number of choices on the page and sends that number to a python script. The python script returns an integer from 1 to the maximun number of choices.
function chooseWord(){
    let {PythonShell} = require('python-shell')
    var path = require("path")

    //The total number of choices in the list Default is 3.
    var numChoices = 3;

    var error = true;

    var options = {
        scriptPath: path.join(__dirname, '/../Engine/'),
        args: [numChoices]
    }

    if(error){

        PythonShell.run('wordChooser.py', options, function (err, results) {
            if (err) throw err;
            // results is an array consisting of messages collected during execution
            
            //set the value of an html element by id.    
        document.getElementById("chooserOutput").innerHTML = results;
        document.getElementById("chooserNumError").innerHTML = "";

            console.log('results', results);
        });

    } else{
        document.getElementById("chooserError").innerHTML = "Error Max Number must be greater then Min Number.";
    }

}