function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);

  fill(0);
  noStroke();
  strokeWeight(6);
  ellipse(200, 150, 280, 250)

  fill(255, 204, 153);
  noStroke();
  ellipseMode(CENTER);
  ellipse(200,200,200,250)

  //eyes
  fill(255);
  stroke(0,0,255);
  strokeWeight(2);
  ellipse(150, 185, 60, 40)

  fill(255);
  stroke(0,0,255);
  strokeWeight(2);
  ellipse(250, 185, 60, 40)

  fill(0);
  stroke(0,0,255);
  strokeWeight(2);
  ellipse(150, 185, 35,35)

  fill(0);
  stroke(0,0,255);
  strokeWeight(2);
  ellipse(250, 185, 35, 35)

  //glasses
  fill(255,255,0, 175);
  stroke(0,0,255);
  strokeWeight(6);
  ellipse(145, 210, 80, 50)

  fill(255,255,0, 175);
  stroke(0,0,255);
  strokeWeight(6);
  ellipse(255, 210, 80,50)

  fill(0,0,255)
  rect(185,210,26, 6)

}
