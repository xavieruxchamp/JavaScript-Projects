function funChallenge() {

    //Set variables
        var brand = "Ferrari";
        var designer = "Pininfarina" 
    
    //to be retrieved by an HTML element using its ID
        var Auto = document.getElementById("newDOM");
    
    // Set the innerHTML of the paragraph element to 2 variables concatenated    
    // Auto.innerHTML = "I drive a " + brand + " designed by " + designer;
    
    //display brand and designer cncatenated  
    Auto.textContent = "I drive a " + brand + " designed by " + designer;
     }
    
     //Operator assignment
     function opFunction() {
        var words = "I like to travel"
        words += " during the summer"
    //Concatenating strings and using innerHTML
        document.getElementById("Operator").innerHTML = words;
     }