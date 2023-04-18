
//Using the Switch method
function cFunc() {
    var car_output;
    var car = document.getElementById("C").value;
    var car_string = " is a wondeful car!";
    switch(car) {
        case "Aston Martin":
            car_output = "Aston Martin" + car_string;
        break;
        case "Ferrai":
            car_output = "Ferrari" + car_string;
        break;
        case "Tesla":
            car_output = "Tesla" + car_string;
        break;
        case "BMW":
            car_output = "BMW" + car_string;
        break;
        default:
            car_output = "Please enter a car exactly as written on the above list."
    }
    document.getElementById("S").innerHTML = car_output;
}

//Using the getElementsByClassName() method
function myGame() {
    var A = document.getElementsByClassName("Game");
    A[0].innerHTML = "You win!";
}

//Canvas challenge
var c = document.getElementById("Canvas");
var ctx = c.getContext("2d");
ctx.font = "25px Courier";
ctx.strokeText("You Win!", 10, 50)

//Linear Gradient() Method
var c = document.getElementById("grCanvas");
var ctx = c.getContext("2d");

var grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "blue");
grd.addColorStop(1, "pink");

ctx.fillStyle = grd;
ctx.fillRect(50, 50, 150, 100);