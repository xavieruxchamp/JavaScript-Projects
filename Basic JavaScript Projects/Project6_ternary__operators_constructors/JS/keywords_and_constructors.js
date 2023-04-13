//JavaScript Keywords

//Object constructor
function Vehicle(Make, Model, Year, Color) {
//Using "this" keyword
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
//Assigning variables
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red")
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black")
var Erik= new Vehicle("Ford", "Pinto", 1971, "Mustard")
//The "new" keyword is used to create objects with the Vehicle() function
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in "+ Erik.Vehicle_Year;

}

//The "new" keyword is used to create objects with the Vehicle() function