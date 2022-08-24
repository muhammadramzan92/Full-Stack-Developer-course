const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

//event listeners
video.addEventListener('click',toggleVideoStatus);
// event listener play
video.addEventListener('play',updatePlayIcon);
video.addEventListener('pause',updatePlayIcon);
video.addEventListener('timeupdate',updateProgress);

// create fun for clicking on video

function toggleVideoStatus(){
   if(video.paused)
   {video.play();
}else{
    video.pause();
}
}
// create fun for updating play/ pause icon
function updatePlayIcon(){
    if(video.paused)
    {
        play.innerHTML='<i class="fa fa-play fa-2x"></i>'
    } else {
        play.innerHTML='<i class="fa fa-pause fa-2x"></i>'

    }
}
// create fun for update progress bar
function updateProgress(){

    progress.value=(video.currentTime / video.duration) * 100;

    let mins = Math.floor(video.currentTime / 60);
    if(mins < 10){
        mins = '0' + String(mins);
    
    }
    let secs = Math.floor(video.currentTime % 60);
    if(secs < 10)
    {
        secs= '0' + String(secs);
    }
    timestamp.innerHTML=`${mins}:${secs}`;
}
// create fun for stop video
function stopvideo(){
    video.currentTime=0;
    video.pause();
}
// creat fun for update the video progres using the slider 
function setVideoProgress(){
    
   video.currentTime=(+progress.value * video.duration) / 100;
}

// event for play button

play.addEventListener('click',toggleVideoStatus); 
// event listner for stop button

stop.addEventListener('click',stopvideo);
 
// event listner for progress bar 

progress.addEventListener('change',setVideoProgress);

