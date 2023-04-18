function getReceipt() {
    // This initializes our string so it can get passed from
    // function to function, growing line by line into a full receipt
    var textl = "<h3>You Ordered:</h3>";
    var runningTotal = 0 ;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size");
    for (var i = 0; i < sizeArray.length; i++) { 
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            textl = textl+selectedSize+"<br>";
        }
    }
    if (selectedSize === "Personal Pizza")
        { sizeTotal = 6;
    } else if (selectedSize === "Small Pizza")
        { sizeTotal = 8;
    } else if (selectedSize === "Medium Pizza")
        { sizeTotal = 10;
    } else if (selectedSize === "Large Pizza")
        { sizeTotal = 14;
    } else if (selectedSize === "Extra Large Pizza")
        { sizeTotal = 16;
    }
    runningTotal = sizeTotal;
    console.log(selectedSize+" = $"+sizeTotal+".00");
    console.log("size textl: "+textl);
    console.log("subtotal: $"+runningTotal+".00");
    //these variables will get passed on to each function
    getTopping(runningTotal,textl);
};

function getTopping(runningTotal,textl) { 
    var toppingTotal = 0 ;
    var selectedTopping = [];
    var toppingArray = document.getElementsByClassName("toppings");
    for (var j =0; j < toppingArray.length; j++) {
        if (toppingArray[j].checked) {
        selectedTopping.push(toppingArray[j].value);
        console.log("selected topping item: ("+toppingArray[j].value+")");
        textl = textl+toppingArray[j].value+"<br>";
        }
    }
    var toppingCount = selectedTopping.length;
    if (toppingCount > 1) {
        toppingTotal = (toppingCount - 1);
    } else {
        toppingTotal = 0 ;
    }
    runningTotal = (runningTotal + toppingTotal);
    console.log("total selected topping items: "+toppingCount);
    console.log(toppingCount+" topping - 1 free topping = "+"$"+toppingTotal+".00")
    console.log("topping textl: "+textl);
    console.log("Purchase Total: "+"$"+runningTotal+".00");
    document.getElementById("showText").innerHTML=textl;
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$" +
        runningTotal+". 00"+"</strong></h3>" ;
};
    
    