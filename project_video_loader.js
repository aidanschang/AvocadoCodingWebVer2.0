
const videoContent = document.getElementById('project_row');

//THE REQUEST
const xhr = new XMLHttpRequest();
xhr.open('GET', 'http://39.108.187.78:5814/home/videoList?pageIndex=1', true);
xhr.send();

//THE RESPONSE
xhr.onreadystatechange = function() {
    if ((xhr.status == 200) && (xhr.readyState === XMLHttpRequest.DONE)) {
        console.log(xhr.responseText)
        const myData = JSON.parse(xhr.responseText).data.Videos;

        let videos = "";
        // looping each videos
        myData.forEach( video => {
            videos += `
            <div class="individual_project">
                <video controls class=project_videos>
                    <div class="individual_project"></div>
                    <source src="http://39.108.187.78:5814${video.url}" type="video/mp4">
                </video>
                <p class="project_title">
                    ${video.title}
                </p>
                <p class="project_description">
                    video.video_description
                </p>
            </div>`
            ;
        });
        //write each videos into html
        videoContent.innerHTML = videos;
    }
    else {
        videos += `
        <div class="individual_project">
            <p>Videos not fund</p>
        </div>`
    }
    
};