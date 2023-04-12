//Dictionary function
function myDictionary() {
    //Dictioanry - Key Value Pairs
    var Car = {
        Brand:"Ferrari",
        Colour:"Red",
        Model:"250 GT/E",
        Year:"1960",
        Designer:"Pininfarina"
    };
    //deleting one of the KVP
    delete Car.Brand
    document.getElementById("Dictionary").innerHTML = Car.Brand;

}