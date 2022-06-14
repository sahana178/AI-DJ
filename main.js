music1 = music.mp3;
music2 = music2.mp3;

function preload(){
    music1 = music.mp3;
    music2 = music2.mp3;
}

function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}