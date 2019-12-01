//number of current choices on the page.
var currentNumChoices = 3;

function addchoice(){
    //Array to store all items of the list 
    var currentChoices = [];

    //The string which will contain the html to be displayed in the chooserTable.
    var tableString = "";

    for(var i = 1; i < currentNumChoices + 1; i++){
        currentChoices.push(document.getElementById("Choice" + i).innerHTML);
    }

    //add all the choices into the tableString
    for(var j = 0; j < currentChoices.length; j++){
        tableString = tableString + '<tr id="Choice' + (j+1).toString() + '">' + currentChoices[j] + '</tr>';
        //console.log(currentChoices[j]);
    }
    tableString = tableString + '<tr id="Choice' + (currentChoices.length + 1).toString() + '">' 
                                + '<td><input type="text" size="10" value="Choice ' + (currentChoices.length + 1).toString() + '"></td></tr>'
    currentNumChoices++;

    //update the table with the new contents.
    console.log(tableString);

    document.getElementById("chooserTable").innerHTML = tableString;
}

//removes the table row 
function removeElement(elementId) {
    // Removes an element from the document
    var element = document.getElementById(elementId);
    element.parentNode.removeChild(element);
}