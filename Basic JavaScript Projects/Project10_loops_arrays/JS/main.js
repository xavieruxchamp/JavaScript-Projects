//While loop adding an "i" percentage, incrementally, to a value, on each iteration
function Call_Loop() {
  let a = document.getElementById("a").value;
  let i = 5;
  let output = "";

  while (i > 0) {
    const percent = i * 10; // calculate the percentage based on i
    const increment = (percent / 100) * a; // calculate the amount to increment a
    a = Number(a) + increment; // add the increment to a as a number
    output += "Additional " + percent + "% to above gives " + a + "<br>";
    i--;
  }
  document.getElementById("Loop").innerHTML = output;
}

// Lenght method
function myLen() {
  let text = document.getElementById("T").value;
  document.getElementById("Len").innerHTML = text.length;
}

//For loop
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
    Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
  }

//Array
function array_Function() {
  var Pet_Pic = [];
  Pet_Pic[0] = "Cat";
  Pet_Pic[1] = "Dog";
  Pet_Pic[2] = "Iguana";
  Pet_Pic[3] = "Snake";
  document.getElementById("Array").innerHTML = "This is a picture of a " + Pet_Pic[0];
    }
 
//Const Keyword
function constant_Function() {
  const Car = {brand: "Ferrari", designer: "Pininfarina", plant: "Maranello"};
  Car.color = "Red";
  Car.designer = "Bertone";
  document.getElementById("Constant").innerHTML = "That " + Car.brand + " was designed by " + Car.designer;


}

//Let code assignment
function myLet() {
  var J = 20
  document.getElementById("L").innerHTML = J;
    {    
      let J = 25
      document.getElementById("L").innerHTML = J;
    }
  document.getElementById("L").innerHTML = J;
}

//Return Statement Challenge
function myRet() {
  return document.getElementById("name").value = "Hello " + name + "!";
} 

//Object Assignment
function myObj() {
  let Aircraft = {
    Manufacturer: "Boeing",
    Type: "Wide-bodied",
    Model: "Dreamliner",
    description : function() {
      return "This is a " + this.Manufacturer + " " + this.Model + " Aircraft.";
    }
  };
document.getElementById("O").innerHTML = Aircraft.description();
}

//Break challenge
let text = "";
for (let i = 0; i < 10; i++) {
  if (i === 3) { break; }
  text = "The number is " + i + "<br>";
  console.log(text);
}

//Continue challenge
let word = "";
for (let i = 0; i < 10; i++) {
  if (i === 3) { continue; }
  word = "The number is " + i + "<br>";
  console.log(word);
}