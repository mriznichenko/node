console.log("script log");

function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
}


function foo() {
    console.log("foo called");
}