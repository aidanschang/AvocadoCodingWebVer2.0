
//THE REQUEST
const xhr = new XMLHttpRequest();
xhr.open('GET', 'project_videos.json', true);
xhr.send();

//THE RESPONSE
xhr.onload = function() {
    if ((xhr.status == 200) && (xhr.readyState === XMLHttpRequest.DONE)) {
        const myData = JSON.parse(xhr.responseText);
        console.log(myData);
        console.log(myData[0]);
        console.log(myData[1]);

    }
    
};



//HTML render


// function obtained_data(data) {
//     let degreeString = '';
//     for (let i = 0; i < data.length; i++) {
//         degreeString += `<p> ${data[i].University}: ${data[i].Type} in ${data[i].Major} ${data[i].Year}.</p>`;
//     }
    
//     degreeContainer.insertAdjacentHTML('beforeend', degreeString);
// }