
//Concatenating strings
function Readable() {
    var a = "Let's go"
    var b = " swimming, "
    var c = " and then"
    var d = " dancing"
    var together = a.concat(b, c, d); 
    document.getElementById("Conc").innerHTML = together; 
}

//Slicing strings
function mySlice() {
    let words = "We are not in Kansas anymore!";
    let portion = words.slice(12, 24);
    document.getElementById("newSlice").innerHTML = portion;
}

//Changing text to upper case
function myCap() {
    let text = "I wanna rock with you";
    let tcap = text.toUpperCase();
    document.getElementById("tocap").innerHTML = tcap;
}

//Searching strings within content
function mySearch() {
    let cont = "I ain't gonna play in Sun City";
    let cs = cont.search("Sun City");
    document.getElementById("lookup").innerHTML = cs;
}

//Convert numbers to string
function myStr() {
    let a =99;
    document.getElementById("numtostr").innerHTML = a.toString();
}

//Applying precison method
function myPre() {
    let u =300.1234546;
    document.getElementById("Prec").innerHTML = u.toPrecision(5);
}

//Show a number with given decimal spaces
function myFix() {
    let x =35.123456;
    document.getElementById("fixmeth").innerHTML = x.toFixed(2);
}

//Applying precison method
function myValue() {
    let u =32.67;
    document.getElementById("val").innerHTML = u.valueOf();
}
