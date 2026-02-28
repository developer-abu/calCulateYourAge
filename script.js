// storing all the input fields and btn that needs 
let form = document.getElementById("form");
let dobInput = form.querySelector("#forDOB");
let cDateInput = form.querySelector("#forCurrentDate");
let submitBTN = form.querySelector("#submitBTN");
let showResult = document.getElementById("showResult");






submitBTN.addEventListener("click", (e) => {
    e.preventDefault();

    let dobInputValue = dobInput.value;
    let cDateInputValue = cDateInput.value;

    let dobYear = parseInt(dobInputValue.slice(0, 4));
    let dobMonth = parseInt(dobInputValue.slice(5, 7));
    let dobDate = parseInt(dobInputValue.slice(8, 10));

    let cYear = parseInt(cDateInputValue.slice(0, 4));
    let cMonth = parseInt(cDateInputValue.slice(5, 7));
    let cDate = parseInt(cDateInputValue.slice(8, 10));

    let year = cYear - dobYear;
    let month = cMonth - dobMonth;
    let date = cDate - dobDate;


    if (month >= 0 && date >= 0) {
     showResult.innerHTML = `Age: ${year} Month: ${month} Days: ${date}`
    }


    else if (month < 0 && date >= 0) {
        year--;
        month += 12;

       showResult.innerHTML = `Age: ${year} Month: ${month} Days: ${date}`
    }


    else if (month >= 0 && date < 0) {

        let daysInPrevMonth = new Date(cYear, cMonth - 1, 0).getDate();
        date += daysInPrevMonth;
        month--;

showResult.innerHTML = `Age: ${year} Month: ${month} Days: ${date}`
    }


    else if (month < 0 && date < 0) {

        let daysInPrevMonth = new Date(cYear, cMonth - 1, 0).getDate();
        date += daysInPrevMonth;

        month--;     
        year--;  
        month += 12;

  showResult.innerHTML = `Age: ${year} Month: ${month} Days: ${date}`
    }
});