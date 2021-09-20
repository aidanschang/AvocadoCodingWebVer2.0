
const videoContent = document.getElementById('project_row');

//THE REQUEST
const xhr = new XMLHttpRequest();
xhr.open('GET', 'project_videos.json', true);
xhr.send();

//THE RESPONSE
xhr.onload = function() {
    if ((xhr.status == 200) && (xhr.readyState === XMLHttpRequest.DONE)) {
        const myData = JSON.parse(xhr.responseText);

        let videos = "";
        // looping each videos
        myData.forEach( video => {
            videos += `
            <div class="individual_project">
                <video controls class=project_videos>
                    <div class="individual_project"></div>
                    <source src="${video.video_name}" type="video/mp4">
                </video>
                <p class="project_title">
                    ${video.video_title}
                </p>
                <p class="project_description">
                    ${video.video_description}
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