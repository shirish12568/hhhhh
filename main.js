status="";
object_name="";

function setup() {
    canvas=createCanvas(480, 380);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 480, 380);
}

function start() {
    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting Objects";
    object_name=document.getElementById("object_name").value;
}

function modelLoaded() {
    console.log("Model Is Loaded!");
    status=true;
}