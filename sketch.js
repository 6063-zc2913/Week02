let earWidth = 150;
let faceWidth = 300;

function setup() {
    createCanvas(600,800);
    background(255,153,51);
}

function draw() {
    stroke("black");
    fill("black");
    ellipse(300,400,faceWidth,faceWidth);
    ellipse(150,350,earWidth,earWidth);
    ellipse(450,350,earWidth,earWidth);
    fill("white")
    triangle(280, 430, 320, 430, 300, 400);
    ellipse(250,350,50,50);
    ellipse(350,350,50,50);
    stroke("white");
    line(250,450, 350, 450);
}