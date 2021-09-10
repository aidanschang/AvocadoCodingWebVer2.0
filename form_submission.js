
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
   
    const primary_firstNameValue = primary_firstName.value&&primary_firstName.value.trim();
    const primary_lastNameValue = primary_lastName.value&&primary_lastName.value.trim();
    const streetValue = street_address.value&&street_address.value.trim();
    const cityValue = city.value&&city.value.trim();
    const stateValue = state.value&&state.value.trim();
    const zipValue = zip.value&&zip.value.trim();
    const emailValue = email.value&&email.value.trim();
    const phoneValue = phone_number.valuer&&phone_number.value.trim();

    var flag = true
    var hasEmptyInput = false

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
    
    if(primary_firstNameValue ==='' || primary_lastNameValue ==='' || streetValue ==='' || cityValue ==='' || stateValue ==='' || zipValue ==='' || emailValue ==='' || phoneValue ==='') {
        console.log("failed");
        e.preventDefault(); 
    } else {
        console.log("success");
        var xmlhttp = new XMLHttpRequest();
        var url = "http://39.108.187.78:5814/home/studentInfoForm";
        
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var myArr = JSON.parse(this.responseText);
                console.log(myArr);
                myFunction(myArr);
            }
        };
        
        function myFunction(data) {
            console.log("response",data)
        }
        
        if(flag){
            xmlhttp.open("PUT", url, true);
            xmlhttp.send(JSON.stringify({
                primary_firstNameValue:primary_firstNameValue,
                primary_lastNameValue:primary_lastNameValue,
                streetValue:streetValue,
                cityValue:cityValue,
                stateValue:stateValue,
                zipValue:zipValue,
                emailValue:emailValue,
                phoneValue:phoneValue}));
            }
        }
    
  });

/*success/error functions */
function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const p = formControl.querySelector('p');
  
    p.innerText = message;
    formControl.className = 'form-control error';
    flag = false
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

const btn = document.getElementById('submit');


