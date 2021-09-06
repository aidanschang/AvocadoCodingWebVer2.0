const btn = document.getElementById('submit');

btn.addEventListener('click', function(){
   
var xmlhttp = new XMLHttpRequest();
var url = "http://39.108.187.78:5814/home/studentInfoForm";

xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        console.log(myArr);
        myFunction(myArr);
    }
};
xmlhttp.open("PUT", url, true);
xmlhttp.send('{"status": "error", "message:": "request method requires to be PUT"}');

function myFunction(data) {
   console.log("response",data)
}
});

