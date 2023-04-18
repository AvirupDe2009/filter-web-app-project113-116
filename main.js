
function preload() {
    mustach = loadImage("https://i.postimg.cc/Y2sB2F6x/image.png");
}
function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}


function take_snapshot() {
    save('myFilterImage.png');
}

function modelLoaded(){
    console.log('PoseNet is Initialized');
}

function draw() {
    image(video, 0,0,300,300);
    image(clown_nose,nose_x,nose_y,30,30);
}