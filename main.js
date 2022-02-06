function preload(){

}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();

}

function draw(){
image(video,0,0,300,300);
let c = color('green');
fill(c);
rect(40, 22, 230, 15);
rect(22, 40, 15, 230);
rect(40, 262, 230, 15);
rect(262, 40, 15, 230);
c = color(65);
fill('red');
circle(30, 30, 30);
circle(270, 270, 30);
circle(270, 30, 30);
circle(30, 270, 30);
}

function take_snapshot(){
    save("my_filtered_img");
}
function modelLoaded(){
    console.log("model is initialized");

}
