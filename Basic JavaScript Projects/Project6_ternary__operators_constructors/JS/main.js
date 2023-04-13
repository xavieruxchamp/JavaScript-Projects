function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

//JavaScript Keywords

//Object constructor
function Country(Continent, Language, Capital) {
    //Using "this" keyword
        this.Country_Continent = Continent;
        this.Country_Language = Language;
        this.Country_Capital = Capital;
    }
    //Assigning variables
    var Spain = new Country("Europe", "Spanish", "Madrid")
    var France = new Country("Europe", "French", "Paris")

    //The "new" keyword is used to create objects with the Country() function
    function myKey() {
        document.getElementById("New_and_This").innerHTML =
        "Spain is a country located in " + Spain.Country_Continent +
        ", and its capital is " + Spain.Country_Capital + " and they speak "
       + Spain.Country_Language + ".";

    }

    //Nested Function Assignment
    function nestF() {
        document.getElementById("Nested_Function").innerHTML = Add();
        function Add() {
                var a, b;
                a = parseInt(document.getElementById("a").value);
                b = parseInt(document.getElementById("b").value);
                c = a+b;
      //          return c
                function Mult() {c*=100;}
                Mult();
                return c;
        }
    }

    

    //Reserved keywords challenge
    //function Dog(Color, Origin) {
    //Using "this" keyword
    //    this.Dog_Color = Color;
    //    this.Dog_Origin = Origin;
   //}
    //Assigning a reserved word as a variable
   // try Chihuahua = new Dog("Brown", "Mexico")
   // try Poodle = new Dog("Beige", "France")

    //The "new" keyword is used to create objects with the Country() function
    //function resKey() {
     //  document.getElementById("Reserved").innerHTML =
     //   "Poodles are dogs that are typically " + Poodle.Dog_Color +
      //  ", and they originate from " + Poodle.Dog_Origin + ".";

   // }