//Addition function
function mySum() {

    //Set variables
    let x = 5;
    let y = 6;
    let z = x + y;
    //using the getElementById method and the innerHTML property
    document.getElementById("Math").innerHTML ="x + y = " + z;
}

//Substraction function
function mySub() {
    let a = 10;
    let b = 6;
    let s = a - b;
    document.getElementById("Math").innerHTML ="a - b = " + s;
}

//Substraction function
function myMulti() {
    //Set variables
    var multiplication = 5 * 6
    //Concatenating string and variable above
    document.getElementById("Math").innerHTML ="5 times 6 is " + multiplication;
}

//Division function
function myDiv() {
    var division = 35/5
    document.getElementById("Math").innerHTML ="35 divided by 5 is " + division;
}

//Multiple operators function
function myMO() {
    var MultiOper = ((1 + 3)*6)/10
    document.getElementById("Math").innerHTML ="One plus three, multiplied by 6 and then divided by 10 is  " + MultiOper;
}

//Modulus operator function
function modOP() {
    var modulus = 81 % 10
    document.getElementById("Math").innerHTML ="When you divide 81 by 10, you have a remainder of  " + modulus;
}

//Negative operator function
function negOP() {
    var number = 6
    document.getElementById("Math").innerHTML = -number;
}

//Increment function
function myInc() {
    var Inc = 6
    Inc++
    document.getElementById("Math").innerHTML = Inc;
}

//Decrement function
function myDec() {
    var Dec = 7.9
    Dec--
    document.getElementById("Math").innerHTML = Dec;
}

//Random function
function myRan() {
    //Displaying an alert
    window.alert(Math.random() * 100);
}

//Math Object function
function mathOB() {
    //Applying the Math.trunc math object
    document.getElementById("Math").innerHTML = Math.trunc(4.5);
}