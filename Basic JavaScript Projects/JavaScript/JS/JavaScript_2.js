//Form JS script
function validateForm() {
    let given = document.forms["theForm"]["given"].value;
    let surname = document.forms["theForm"]["surname"].value;
    let email = document.forms["theForm"]["email"].value;
    let mobile = document.forms["theForm"]["mobile"].value;
    
    if (given == "" || surname == "" || email == "" || mobile == "") {
        alert("Form must be filled out completely");
        return false;
    }
}