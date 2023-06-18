console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');



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
    }

    else{
        audioElement.pause()
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
    }

})

// Listen to Events
myProgressBar.addEventListener('timeupdate', ()=> {
console.log('timeupdate');
// update seekbar.
})
