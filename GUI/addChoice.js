//number of current choices on the page.
var currentNumChoices = 3;

function addchoice(){

    var tr = document.createElement("TR");
    
    var inputTD = document.createElement("TD");

    var input = document.createElement("input");
    input.type = "text";
    input.size = 10;
    input.placeholder = "New Choice";
    input.className = "chooserInput";

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