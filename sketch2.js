function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  
  //hair
  fill(102, 51, 0);
  noStroke();
  ellipse(200, 150, 260, 250)
  
  fill(102, 51, 0);
  noStroke();
  ellipse(200,250,240,150)
  
  //neck
  fill(255, 220, 180);
  noStroke();
  rect(135,270,130, 100);
  
  //shoulders
  fill(0, 220, 180);
  noStroke();
  quad(70, 360, 330, 360, 360, 400, 40, 400);
  
  
  //face
  fill(255, 204, 153);
  noStroke();
  ellipseMode(CENTER);
  ellipse(200,200,200,250);
  
  //nose
  fill(255, 220, 180);
  noStroke();
  rect(190,165,20,80);
  
  //mouth
  fill(255,0, 0);
  noStroke();
  ellipseMode(CENTER);
  ellipse(200, 280, 68, 30);
  
  //teeth
  fill(255);
  noStroke();
  rect(166, 265, 68, 15)
  
  //hair bangs
  fill(102, 51, 0);
  noStroke();
  rect(100,70,200,90)
  
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
