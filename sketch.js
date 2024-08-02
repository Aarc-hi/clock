let startTime;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES); 
  startTime = millis(); 
}

function draw() {
  background('lightblue');
  translate(width / 2, height / 2); 

  let elapsedTime = (millis() - startTime) / 1000;
  let timeleft = max(60 - elapsedTime, 0);
  let angle = map(timeleft, 0, 60, 0, 360);


  stroke(0);
  strokeWeight(6);
  
 
  arc(0, 0, 300, 300, -90, angle - 90);
}
