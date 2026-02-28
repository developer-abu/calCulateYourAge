// storing all the input fields and btn that needs 
let form = document.getElementById("form");
let dobInput = form.querySelector("#forDOB");
let cDateInput = form.querySelector("#forCurrentDate");
let submitBTN = form.querySelector("#submitBTN");
let showResult = document.getElementById("showResult");





submitBTN.addEventListener("click", (e)=>{
    e.preventDefault()
    //value of date input fields 
let dobInputValue = dobInput.value;
let cDateInputValue = cDateInput.value;
// slicing and transforming into number dob date year month
let dobYear = parseInt(dobInputValue.slice(0,4));
let dobMonth = parseInt(dobInputValue.slice(5,7));
let dobDate = parseInt(dobInputValue.slice(8,9));
//slicing and transforming into number current date year month
let cYear = parseInt(cDateInputValue.slice(0,4));
let cMonth = parseInt(cDateInputValue.slice(5,7));
let cDate = parseInt(cDateInputValue.slice(8,9));
// printing in console
console.log(dobYear);
console.log(dobMonth);
console.log(dobDate);
// printing in console
console.log(cYear);
console.log(cMonth);
console.log(cDate);

})