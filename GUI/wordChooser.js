//Takes the number of choices on the page and sends that number to a python script. The python script returns an integer from 1 to the maximun number of choices.
function chooseWord(){

    var nameList = document.getElementsByClassName("chooserInput");

    if(nameList.length > 1){

        //Randomly choose a word from the list.
        var theChosenOne = nameList[Math.floor(Math.random() * nameList.length)].value;

        //display the chosen word.
        document.getElementById("choosenWord").innerText = "The chosen one is: " + theChosenOne;
         

    } else{
        document.getElementById("chooserError").innerHTML = "Error there must be at least two words in the list.";
    }

}