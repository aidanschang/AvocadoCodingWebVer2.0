const formTest = document.querySelectorAll('.form');
const submitInput = document.getElementById('submit');
let courses = form.querySelectorAll('input[name="class"]').value;
console.log(courses);


function getDataForm(e) {
    e.preventDefault();
    var formData = new FormData(formTest[0]);
    
    const toSend = {
        primary_first_name: formData.get('firstname'),
        primary_last_name: formData.get('lastname'),
        primary_address: (formData.get('streetaddress1') + ' ' + formData.get('streetaddress2') + ' ' + 
        formData.get('city')+ ' ' + formData.get('state')+ ' ' + formData.get('zip')),
        primary_email: formData.get('email'),
        primary_email: formData.get('phonenumber'),
        
        student_first_name: formData.get('student_firstname'),
        student_last_name: formData.get('student_lastname'),
        student_dob: formData.get('birthday'),
        student_gender: formData.get('gender'),
        
    };
    console.log(toSend);
    
};

document.addEventListener('DOMContentLoaded', function(){
    submitInput.addEventListener('click', getDataForm, false);
    
}, false);




















/*
}


[
    {
      "University": "Penn State University",
      "Major" : "Hospitality Management",
      "Type": "B.S.",
      "Year": "2013"
    },
    {
      "University": "Boston University",
      "Major" : "Software Development",
      "Type": "M.S.",
      "Year": "2022"
    }
  ]*/