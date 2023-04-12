function displayCar() {

//Set variables
    var brand = "Ferrari";
    var designer = "Pininfarina" 

//to be retrieved by an HTML element using its ID
    var Auto = document.getElementById("myCar");

//display brand and designer concatenated  
Auto.textContent = "I drive a " + brand + " designed by " + designer;
 }

 //Operator assignment
 function opFunction() {
    var words = "I like to travel"
    words += " during the summer"
//Concatenating strings and using innerHTML
    document.getElementById("Operator").innerHTML = words;
 }