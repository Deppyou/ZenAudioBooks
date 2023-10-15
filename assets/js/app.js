// media controllers
const playPause = document.querySelector("#play-stop");
const backward = document.querySelector("#backward");
const forward = document.querySelector("#forward");

// record player animation
const circleBig = document.querySelector("#circle-bg");
const circleSm = document.querySelector("#circle-sm");

// playing song
const songName = document.querySelector("#song-name");
const audio = document.querySelector("#audio");
const coverArt = document.querySelector("#cover");
const musicbox = document.querySelector("#musicbox");

// control button images
let playImg = "./assets/images/play.svg";
let pauseImg = "./assets/images/pause.svg";

// default controls
playPause.src = playImg;
let isPlaying = true;

const songList = [
    {
        name: "The Laws of Human Nature (Part I) by Robert Greene",
        source: "./assets/music/music-1.mp3",
        cover: "./assets/images/music-1.jpg"
    },
    {
        name: "The Laws of Human Nature (Part II) by Robert Greene",
        source: "./assets/music/music-2.mp3",
        cover: "./assets/images/music-2.jpg"
    },
    {
        name: "How to become 37.78 times better at anything Atomic Habits by James Clear",
        source: "./assets/music/music-3.mp3",
        cover: "./assets/images/music-3.jpg"
    },
    {
        name: "21 Mind Traps_The Ultimate Guide to your most common Thinking errors (Part I) by Steve Burns",
        source: "./assets/music/music-4.mp3",
        cover: "./assets/images/music-4.jpg"
    },
    {
        name: "21 Mind Traps_The Ultimate Guide to your most common Thinking errors (Part II) by Steve Burns",
        source: "./assets/music/music-5.mp3",
        cover: "./assets/images/music-5.jpg"
    },


    {
        name: "THINK and GROW RICH by Napoleon Hill",
        source: "./assets/music/music-6.mp3",
        cover: "./assets/images/music-6.jpg"
    },


    {
        name: "The 7 Habits of Highly Effective People by Stephen Covey",
        source: "./assets/music/music-7.mp3",
        cover: "./assets/images/music-7.jpg"
    },

    {
        name: "Rich Dad Poor Dad (Part I) by Robert Kiyosaki",
        source: "./assets/music/music-8.mp3",
        cover: "./assets/images/music-8.jpg"
    },

    {
        name: "Rich Dad Poor Dad (Part II) by Robert Kiyosaki",
        source: "./assets/music/music-9.mp3",
        cover: "./assets/images/music-9.jpg"
    },

    {
        name: "Limitless by Jim Kwik",
        source: "./assets/music/music-10.mp3",
        cover: "./assets/images/music-10.jpg"
    },

    {
        name: "The Psychology of Money by Morgan Housel",
        source: "./assets/music/music-11.mp3",
        cover: "./assets/images/music-11.jpg"
    },

    {
        name: "The Four Agreements by Don Miguel Ruiz",
        source: "./assets/music/music-12.mp3",
        cover: "./assets/images/music-12.jpg"
    },

];
// helper function
function createEle(ele) {
    return document.createElement(ele);
}
function append(parent, child) {
    return parent.append(child);
}
// creating track list
const ul = createEle('ul')
function createPlayList() {
    songList.forEach((song) => {
        let h3 = createEle('h3');
        let li = createEle('li');

        li.classList.add("track-item");
        h3.innerText = song.name;
        append(li,h3);
        append(ul,li)
    })
    append(musicbox, ul);
}

let songIndex = 0;
// preloaded song
loadMusic(songList[songIndex]);


function loadMusic() {
    coverArt.src = songList[songIndex].cover;
    songName.innerText = songList[songIndex].name;
    audio.src = songList[songIndex].source;
}

function playSong() {
    playPause.src = pauseImg;
    circleBig.classList.add("animate");
    circleSm.classList.add("animate");

    audio.play();
}

function pauseSong() {
    playPause.src = playImg;
    circleBig.classList.remove("animate");
    circleSm.classList.remove("animate");

    audio.pause();
}

function nextPlay() {
    songIndex++;
    if(songIndex > songList.length - 1) {
        songIndex = 0;
    }
    loadMusic(songList[songIndex]);
    playSong()
}

function backPlay() {
    songIndex--;
    if(songIndex < 0) {
        songIndex = songList.length - 1;
    }
    loadMusic(songList[songIndex]);
    playSong()
}
function playHandler() {
    isPlaying = !isPlaying;
    //console.log("Change: ",isPlaying)
    isPlaying ? pauseSong() : playSong();
}


// player event 
playPause.addEventListener("click", playHandler);
backward.addEventListener("click", backPlay);
forward.addEventListener("click", nextPlay);

createPlayList()