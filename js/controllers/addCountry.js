import{
    addCountry
} from "../models/main.js"

let myForm = document.querySelector("#frmAddCity")

myForm.addEventListener("submit", function(event){
    console.log("work")

    addCountry(
        document.querySelector("#nameCountry").value,
        document.querySelector("#region").value,
        "Portugal",
        document.querySelector("#imgCity").value,
        document.querySelector("#txtDescription").value,
        "",
        [],
        document.querySelector("#stage").value
    )
    event.preventDefault();
    
})