//Global Variable
var g = 99
function f1() {
    document.write(20 + g + "<br>");
}
function f2() {
    document.write(g + 100 + "<br>");
}
f1();
f2();

//Local Variable
function f3() {
    var h = 99
    document.write(20 + h + "<br>");
}
//function f4() {
//document.write(h + 100 );
//}
//f3();
//f4();

//Displaying error with console.log

function f5() {
    var i = 99
    console.log(15 + i);
}
function f6() {
    console.log(i + 100);
}
f5();
f6();

//Method assignment
function nuDate() {
    if (new Date().getHours() < 23) {
        document.getElementById("Meth").innerHTML = "Howdy"
    }
}

//If statement assignment

function myIF() {
    Year = document.getElementById("Year").value
    if (Year < 2000) {
        document.getElementById("Iffy").innerHTML = "Y2K affected you"
    }
}

//ELSE statement assignment

function myEL() {
    INC = document.getElementById("Inc").value;
    if (INC < 2000) {
        Y2K = "You were most likely affected by the Y2K bug"
    }
    else {
        Y2K = "You were not affected by the Y2K bug";
    }
        document.getElementById("eStat").innerHTML = Y2K;
}

//ELSEIF Assignment
function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning tim!";
    }
    else if (Time >= 12 == Time <18) {
        Reply = "It is afternoon!";
    }
    else {
        Reply = "It is evening time!";
    }
        document.getElementById("Time_of_Day").innerHTML = Reply;
}