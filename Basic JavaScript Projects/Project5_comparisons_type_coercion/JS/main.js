//Type of Function
function myType() {
 
//Using "Type Of" Operator
    document.write(typeof 3);
}

//Coercion Function
function myCoercion() {
 
    //Applying the Type Coercion Operator
        document.write("23" + 3);
    }

//Using JavaScript to make the browser display NaN.
function Nan() {
    document.getElementById("na").innerHTML = 0/0;
}

//Using the isNaN() function to make the browser display "true".
function posInf() {
    document.getElementById("pi").innerHTML = isNaN("Some Text");
}


//Using the isNaN() function to make the browser display "false".
function negInf() {
    document.getElementById("ni").innerHTML = isNaN("123");
}

//Infinity function
function myInfinity() {
    let x = 2E310
    document.getElementById("mi").innerHTML = x;
}

//-Infinity function
function negInfinity() {
    let y = -3E310
    document.getElementById("nin").innerHTML = y;
}

//True Boolean
function truB() {
    let t = 10 < 60;
    document.getElementById("tb").innerHTML = 10 < 60;
}

//False Boolean
function falseB() {
    let f = 45 > 49;
    document.getElementById("fb").innerHTML = Boolean(f);
}

function cl() {
    console.log(2 +2);
}

//Boolean False and console.log
function boolf() {
   console.log(6 < 3);
}

//Double equal
function myDE() {
    document.write(3 == 6);
}

//Triple equal
function t1() {
    document.write(3 === 3);
}

function t2() {
    document.write(3 === "Four");
}

function t3() {
    document.write(3 === "Three");
}

function t4() {
    document.write(3 === 4);
}

//AND operator assignment
function a1() {
    document.write((6 > 3) && (10 > 5));
}

function a2() {
    document.write((6 > 3) && (10 > 20));
}

function a3() {
    document.write((6 > 3) || (10 > 20));
}

function a4() {
    document.write((3 > 6) || (10 > 20));
}

//NOT operator Assignment
function n1() {
    document.getElementById("Not").innerHTML = !(6 > 3)
}

function n2() {
    document.getElementById("Not").innerHTML = !(3 > 6)
}
