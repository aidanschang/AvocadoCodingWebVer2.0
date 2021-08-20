const btn = document.getElementById('play_button');
const question = document.getElementById('ready_to_play');
const background = document.getElementById('introduction_background');

btn.addEventListener('click', function() {
    
    
    background.classList.add('after_clicked');
    btn.style.visibility ='hidden';
    question.style.visibility ='hidden';
});
