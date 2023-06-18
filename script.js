console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');




let songs = [
    {songName:"My song", filepath:"songs/1.mp3", coverPath: "covers/1.png"},
    {songName:"My song", filepath:"songs/2.mp3", coverPath: "covers/2.png"},
    {songName:"My song", filepath:"songs/3.mp3", coverPath: "covers/3.png"},
    {songName:"My song", filepath:"songs/4.mp3", coverPath: "covers/4.png"},
    {songName:"My song", filepath:"songs/5.mp3", coverPath: "covers/5.png"},
    {songName:"My song", filepath:"songs/6.mp3", coverPath: "covers/6.png"},
    
]



// audioElement.play();


//Handle play/pause click
masterPlay.addEventListener('click', ()=>
{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play()
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }

    else{
        audioElement.pause()
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity =0;
    }

})

// Listen to Events
audioElement.addEventListener('timeupdate', ()=> {
    // console.log('timeupdate');

    // update seekbar.
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;

    //change song duration by seekbar.
    myProgressBar.addEventListener('change', ()=> {
        audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
    })
})
