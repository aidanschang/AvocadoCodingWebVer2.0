let form = document.getElementById("form_container");
let primary_firstName = document.getElementById("firstname");
let primary_lastName = document.getElementById("lastname");
let street_address = document.getElementById("streetaddress1");
let city = document.getElementById("city");
let state = document.getElementById("state");
let zip = document.getElementById("zip");
let email = document.getElementById("email");
let phone_number = document.getElementById("phonenumber");

/*--student info--*/
let student_firstName = document.getElementById("student_firstname");
let student_lastName = document.getElementById("student_lastname");
let student_dob = document.getElementById("dob_input");
let student_gender = document.getElementById("student_lastname");




document.getElementById("submit").addEventListener("click", (e) => {
   
    const primary_firstNameValue = primary_firstName.value.trim();
    const primary_lastNameValue = primary_lastName.value.trim();
    const streetValue = street_address.value.trim();
    const cityValue = city.value.trim();
    const stateValue = state.value.trim();
    const zipValue = zip.value.trim();
    

    /*student Info*/
    const student_firstNameValue = student_firstName.value.trim();
    const student_lastNameValue = student_lastName.value.trim();
    const dobValue = student_dob.value.trim();
    const genderValue = student_gender.value.trim();

    if(primary_firstNameValue ==='') {
        setErrorFor(primary_firstName, "Empty input");
        e.preventDefault();
    } else if (
        primary_firstNameValue.length < 2) {
            setErrorFor(primary_firstName, "First name is less than 2 characters");
            e.preventDefault();
        } else if (!a_zA_Z(primary_firstNameValue)) {
            setErrorFor(primary_firstName, "Only alphabetical characters allowed");
            e.preventDefault();
        } else {
            setSuccessFor(primary_firstName);
        }

    if(primary_lastNameValue ==='') {
        setErrorFor(primary_lastName, "Empty input");
        e.preventDefault();
    } else if (
        primary_lastNameValue.length < 2) {
            setErrorFor(primary_lastName, "Last name is less than 2 characters");
            e.preventDefault();
        } else if (!a_zA_Z(primary_lastNameValue)) {
            setErrorFor(primary_lastName, "Only alphabetical characters allowed");
            e.preventDefault();
        } else {
            setSuccessFor(primary_lastName);
        }
    

  });

/*Validators*/
function a_zA_Z(input) {
    return /^[a-zA-Z]*$/.test(input);
}

function isfacilitatorinvalid(input) {return !(input == "Laura" || input =="Fazil" || input =="Harsh");
}

/*success/error functions */
function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const p = formControl.querySelector('p');
  
    p.innerText = message;
    formControl.className = 'form-control error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}
