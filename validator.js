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
    const emailValue = email.value.trim();
    const phoneValue = phone_number.value.trim();
    

    /*student Info*/
    const student_firstNameValue = student_firstName.value.trim();
    const student_lastNameValue = student_lastName.value.trim();
    const dobValue = student_dob.value.trim();
    const genderValue = student_gender.value.trim();

    if(primary_firstNameValue ==='') {
        setErrorFor(primary_firstName, "Empty input");
        e.preventDefault();
    } else {
            setSuccessFor(primary_firstName);
        }

    if(primary_lastNameValue ==='') {
        setErrorFor(primary_lastName, "Empty input");
        e.preventDefault();
    } else {
            setSuccessFor(primary_lastName);
        }
    
    if(streetValue ==='') {
        setErrorFor(street_address, "Empty input");
        e.preventDefault();
    } else {
            setSuccessFor(street_address);
        }

    if(cityValue ==='') {
        setErrorFor(city, "Empty input");
        e.preventDefault();
    } else {
            setSuccessFor(city);
        }

    if(stateValue ==='') {
        setErrorFor(state, "Empty input");
        e.preventDefault();
    } else {
            setSuccessFor(state);
        }
    if(zipValue ==='') {
        setErrorFor(zip, "Empty input");
        e.preventDefault();
    } else {
            setSuccessFor(zip);
        }
    if(emailValue ==='') {
        setErrorFor(zip, "Empty input");
        e.preventDefault();
    } else {
            setSuccessFor(zip);
        }
    if(phoneValue ==='') {
        setErrorFor(zip, "Empty input");
        e.preventDefault();
    } else {
            setSuccessFor(zip);
        }







  });


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
