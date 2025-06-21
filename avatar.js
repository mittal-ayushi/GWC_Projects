/* VARIABLES */
let eyeWidth = 50;
let eyeHeight = 40;
let pupilWidth = 22;
let pupilHeight = 25;

/* SETUP RUNS ONCE */
function setup() {
  // sets the screen size
  createCanvas(400, 400);

  // sets the background color
  stroke(0);
  strokeWeight(1.4);
  background('#CBC3E3');
}

/* DRAW LOOP REPEATS */
function draw() {
  angleMode(DEGREES);
  rectMode(CENTER);

  // Hair
  fill('black');
  rect(200, 220, 205, 330, 90);

  // Clothes & Neck
  fill(263, 252, 220);
  rect(200, 280, 80, 50);
  fill('purple');
  arc(200, 355, 200, 150, 180, 0);
  noStroke(); 
  rect(200, 380, 200, 80);

  // Face
  fill(263, 252, 220);
  ellipse(width / 2, height/2.2, 160, 180);
  fill(200, 85, 25);

  // Eyes
  if (mouseIsPressed) {
    stroke(0);
    strokeWeight(1.4);
    fill(263, 252, 220);
    arc(230, 170, 50, 50, 0, 180);
    arc(170, 170, 50, 50, 0, 180);
  } else {
    // Eyes open
    stroke(0);
    strokeWeight(1.4);
    fill('white');
    ellipse(170, 170, eyeWidth, eyeHeight);
    ellipse(230, 170, eyeWidth, eyeHeight);
    fill(0);
    ellipse(170, 170, pupilWidth, pupilHeight);
    ellipse(230, 170, pupilWidth, pupilHeight);
  }

  // Mouth 
  if (mouseIsPressed) {
  fill(200, 120, 120);
  arc(200, 220, 50, 50, 0, 180);
  }
  else {
  fill('black')
  line(180,220,220,220)
  }

  // Text
  textSize(25);
  text('I may look sad but you can..', 50, 30);

  // Directions for mouse press
  fill("white");
  textSize(15);
  text('Click to see me change', 100, 50);
}
