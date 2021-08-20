let form = document.getElementById("form");
let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let facilitator = document.getElementById("facilitator");

document.getElementById("submit").addEventListener("click", (e) => {
   
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const facilitatorValue = facilitator.value.trim();
    
    if(firstNameValue ==='') {
        setErrorFor(firstName, "Empty input");
        e.preventDefault();
    } else if (
        firstNameValue.length < 2) {
            setErrorFor(firstName, "First name is less than 2 characters");
            e.preventDefault();
        } else if (!a_zA_Z(firstNameValue)) {
            setErrorFor(firstName, "Only alphabetical characters allowed");
            e.preventDefault();
        } else {
            setSuccessFor(firstName);
        }

    if(lastNameValue ==='') {
        setErrorFor(lastName, "Empty input");
        e.preventDefault();
    } else if (
        lastNameValue.length < 2) {
            setErrorFor(lastName, "Last name is less than 2 characters");
            e.preventDefault();
        } else if (!a_zA_Z(lastNameValue)) {
            setErrorFor(lastName, "Only alphabetical characters allowed");
            e.preventDefault();
        } else {
            setSuccessFor(lastName);
        }
    
    if (facilitatorValue === '') {
        setErrorFor(facilitator, "Empty input");
        e.preventDefault();
        } else if (isfacilitatorinvalid(facilitatorValue)) {
            setErrorFor(facilitator, "Facilitator name incorrect");
            e.preventDefault();
        } else {setSuccessFor(facilitator);
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
