//Move the catcher with the left and right arrow keys to catch the falling objects. 

/* VARIABLES */
let catcher, Object, obj, scoreText, directionsText;
let score = 0;
let level;


/* SETUP RUNS ONCE */
function setup() {
  createCanvas(400, 400);


  //Create catcher 
  catcher = new Sprite(200, 380, 100, 20);

  catcher.color = color('white');
  catcher.collider = 's'
  //Create falling object
  Object = new Sprite(100, 0, 10);
  obj = new Sprite(100, 0, 10);


  Object.vel.y = 2;
  obj.vel.y = 2;
}

  // Text

  /* DRAW LOOP REPEATS */
  function draw() {
    background('black');

    // Text
    fill('white')
    text('Score: ' + score, width / 3, height / 2 - 180);
    text("Move the \ncatcher with the \nleft and right arrow \nkeys to catch the \nfalling objects.", width - 100, height / 2 - 180);
      level = round(score/6)

    if (Object.y >= height) {
      reset();
      score--;
    }
    if (obj.y >= height) {
      reset();
      score--;
    }
      // Move catcher
    

    // If Object collides with catcher, move back to random position at the top
    if (Object.mouse.presses()) {
      Object.y = 0;
      Object.x = random(0, width);
      Object.vel.x = 0;
      Object.vel.y = random(1 + score / 5, 5 + score / 5)
      score++;
    }

    if (score < 0) {
      clear();
      reset();
      Object.pos = { x: -150, y: -50 }
      catcher.pos = { x: -100, y: 100 };

      background(224, 224, 224);
      textAlign(CENTER);
      textSize(25);
      text('You Lose', width / 2, height / 2 - 15);
      textSize(15);
    }
  }


  function reset() {
    Object.y = 0;
    Object.x = random(0, width);
    Object.vel.x = 0;
    Object.vel.y = random(1, 5);
  }
