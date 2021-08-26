const btn = document.getElementById('submit');

btn.addEventListener('click', function(){
    // document.querySelectorAll( '#primary_contact .fillout-input')

    // // document.querySelector('input[name="gender"]:checked').value;
    
    // //check box
    // var form = document.getElementById('student_info');
    // var chks = form.querySelectorAll('input[name="class"]');
    // var checked = [];
    
    // for(var i = 0; i < chks.length; i++){
    //     if(chks[i].checked){
    //         checked.push(chks[i].value);
    //     }   
    // }
    // console.log(checked);
    // return checked;
    
var xmlhttp = new XMLHttpRequest();
var url = "http://39.108.187.78:5814/home/studentInfoForm";

xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        myFunction(myArr);
    }
};
xmlhttp.open("PUT", url, true);
xmlhttp.send('{"status": "error", "message:": "request method requires to be PUT"}');

function myFunction(data) {
   console.log("response",data)
}
});

