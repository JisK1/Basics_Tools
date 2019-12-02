
//number of current choices on the page.

function addchoice(inputValue){

    var tr = document.createElement("TR");
    
    var inputTD = document.createElement("TD");

    var input = document.createElement("input");
    input.type = "text";
    input.size = 10;
    input.placeholder = "New Choice";
    input.className = "chooserInput";
    input.value = inputValue;

    var imgTD = document.createElement("TD");

    imgTD.innerHTML = '<img src="img/minus.png" width="20" height="20" style="margin-left: 10;" onclick="removeElement(this)">'

    inputTD.appendChild(input); 

    tr.appendChild(inputTD);
    tr.appendChild(imgTD);

    document.getElementById("chooserTable").appendChild(tr);

}

//removes the table row 
function removeElement(element) {
    //gets the tr parent element
    var trElement = element.parentNode.parentNode;
    trElement.remove();
}

//function that will read a file line by line and add each line as a new input. 
function addChoicesFromFile(){
    //remove any empty choices
    removeEmptyInputs();
    
    //file from page
    var inputFile = document.getElementById('inputFile');
    
    //if there is no file selected then return;
    if(inputFile.files[0] === undefined)
        return;

    let fr = new FileReader();

    //use the file reader to get the contents of the file.
    fr.onload = function(e) {
        //split the contents of the file into an array by line and add each element as a choice. 
        var contents = e.target.result.split('\n');
        for(var i = 0; i < contents.length; i++){
            addchoice(contents[i]);
        }
    };
    fr.readAsText(inputFile.files[0]);

}
//function which will go through all the input fields, remove the ones which are empty.
function removeEmptyInputs(){

    //put all the elements currently displayed into an array.
    var inputs = Array.from(document.getElementsByClassName("chooserInput"));
    var inputLength = inputs.length;

    for(var i = 0; i < inputLength; i++){
        //if the input value is blank then remove the element
        if(inputs[i].value === ""){
            removeElement(inputs[i]);
        }

    }

}

function clearChoices(){
    var inputs = Array.from(document.getElementsByClassName("chooserInput"));
    inputs.forEach(element => removeElement(element));
}