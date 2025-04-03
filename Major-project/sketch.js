let ast;     // astronaut
let rot = 0;      // rotation angle
let stars = [];        // array of stars
let astX;            // x coordinate of astronaut
let astY;            // y coordinate of astronaut
let alien;           // alien 
let vel = 0;        // velocity
let gravity = 8;       // gravity
let speed = 2;        // speed
var shots = [];          // array that stores the bulltes shot by shooter 
var movement = 5;           
var remoteSpeed = 5;     // shooter sppeed
var scrollY = 0
var sceneDisplay = 1;       // scene that is being displayed
var rock;                  // rock in scene 3
var sky;                   // sky in scene 2 and 6
let rocks = [];               // array of rocks
let weapons = [];             // bullets thrown by monster
let interval_dialog = 1500;       // interval to show the text
let colors = "ffc857-e9724c-c5283d-481d24-255f85-a9e5bb-2d1e2f-777da7-94c9a9-074f57".split("-").map(a => "#" + a);     // color in scene Four
let numberOfParticles;           // array that stores number of particles in space
let rotation_speed = 0.004;            // rotation speed for astronaut
let earthSky;                       // sky on earth scene
let gateX = 1150;                 // coordiate of gate in last scene
let launching = false;             // flag for launching the rocket
let shooting_star;                // shooting star
let shooter;                         // shooter that shoots bullets in everyscene
let monsterX;                     // x coordinate of monnster
let monsterY;                      // y coordinate of monnster
let monsterHit;                     // flag to determine whether the monster was hit
let bulletX;                        // x coordinate of bullet
let bulletY;                       // y coordinate of bullet
let arrayOfimages = [];              // array to store images
let aliens = [];                   // array to store aliens
let spaceshipVisible = false;                 // flag to know whether the spaceship is visible
let aliensVisible = true;                    // flag to know whether the alien is visible
let direction = 0;                   
let walk = 2;
let alienInsideHouse = false;             // flag to check whether the aliens are inside the house 
let astronautInHouse = false;             // flag to check whether the astronaut is inside the house
let rocketSound;                          // music for sound of rocket
let rocketAlarm;                            // music for the alarm of rocket
let fire;                                 // music for firing the bullet
let monsterLaugh;                          // music for laughing monster
let scream;                            // music for screaming astronaut
let alienCrying;                     // music for crying aliens
let alienCheering;                    // music for cheering aliens
let rockSound;                        // music for rocks
let chanting;                   // Om chanting
let calm_music;                  // calm music in sceneFour
let happy_astronaut;                 
let buttons = [];
let button;
let alienGoingHome = false;




/** Loading all the image and music files 
 */
function preload(){
  ast = loadImage("assets/astronaut.png");
  rock = loadImage("assets/rock.png");
  sky = loadImage("assets/sky.jpg");
  for (let i = 0; i < 4; i++) {
    arrayOfimages = loadImage("assets/aiens.png");
  }
  alien = loadImage("assets/aiens.png");
  earthSky = loadImage("assets/earth.png");
  shooting_star = loadImage("assets/shootingStar.png");
  rocketSound = loadSound("assets/rocket_sound.mp3");
  rocketAlarm = loadSound("assets/rocket_alarm.mp3");
  fire = loadSound("assets/firing.wav");
  monsterLaugh = loadSound("assets/monster_laugh.wav");
  scream = loadSound("assets/scared.wav");
  alienCrying = loadSound("assets/alien_cry.wav");
  alienCheering = loadSound("assets/alien_cheering.wav");
  rockSound = loadSound("assets/hittingrock.wav");
  chanting = loadSound("assets/om_chanting.mp3");
  calm_music = loadSound("assets/calm.mp3");
  happy_astronaut = loadSound("assets/happy.mp3");

  



}



function setup() {
  // create the canvas using the full browser window
 
  createCanvas(windowWidth, windowHeight);
  astX = width/6;
  astY = height/2;
  imgx = 10/100*width;
  imgy = 80/100*height;
  total = 1200;
  background(0);
  createStars();
  drawButton1();
  drawButton2();
  drawButton3();
  drawButton4();
  drawButton5();
  drawButton6();
  shooter = new Shooter(width/2, height - 40);

}


function draw() {
  background(0); 
  translate(0, scrollY);
  
  showStars();                         // Showing the stars randomly on screen

  if (sceneDisplay == 1 || sceneDisplay == 2 || sceneDisplay == 3) {
    shootBullets();

  }
  
 

  if (astX <= 0 && sceneDisplay > 1 && sceneDisplay != 3) {
    astX = 0;
    sceneDisplay--;
  }

  if (astY <= 0 && sceneDisplay > 1 && sceneDisplay != 3) {
    astY = 0;
    sceneDisplay--;
  }

  if (astY >= height) {
    astY = height;
  }

  if (astX > width) {
    sceneDisplay++;
    astX = width/6;
    astY = height/2;
    if (sceneDisplay == 3) {
      createRocks();
      
    }

  }

  if (imgx > width) {
    sceneDisplay ++;
    imgx = 10/100 * width;
    imgy = 80/100 * height;
  }



  if (sceneDisplay == 1) {
     
     sceneOne();
     shootBullets();
     

     
     
     
    
    
   
  }

  if (sceneDisplay == 2) {
    
    sceneTwo();
    shootBullets();
  }

  if (sceneDisplay == 3) {
   // background(0, 0, 255);
   
    sceneThree();
  }

  if (sceneDisplay == 4) {
    sceneFour();
  }

  if (sceneDisplay == 5) {
    
    sceneFive();
    shootBullets();
  }

  if (sceneDisplay == 6) {
    
      sceneSix();

    

    
   

  }

}


// Creating buttons for an alternative way to move from one scene to another
function drawButton1() {

 fill(255);
 button = createButton('1');
 button.size(40, 40);
 button.position(600, 0)
 button.mousePressed(() => {
 sceneDisplay = 1;  
  
});

}

function drawButton2() {

  fill(255);
  button = createButton('2');
  button.size(40, 40);
  button.position(640, 0);
  button.mouseClicked(sceneTwo);
  button.mousePressed(() => {
    sceneDisplay = 2;  
     
   });
 
 }

 function drawButton3() {

  fill(255);
  button = createButton('3');
  button.size(40, 40);
  button.position(680, 0);
  button.mousePressed(() => {
    sceneDisplay = 3; 
    createRocks(); 
     
   });
 
 }

 function drawButton4() {

  fill(255);
  button = createButton('4');
  button.size(40, 40);
  button.position(720, 0);
  button.mousePressed(() => {
    sceneDisplay = 4;  
     
   });
 
 }

 function drawButton5() {

  fill(255);
  button = createButton('5');
  button.size(40, 40);
  button.position(760, 0);
  button.mousePressed(() => {
    sceneDisplay = 5;  
     
   });
 
 }

 function drawButton6() {

  fill(255);
  button = createButton('6');
  button.size(40, 40);
  button.position(800, 0);
  button.mousePressed(() => {
    sceneDisplay = 6;  
     
   });
 
 }





// Constructor for shot
class Shot {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.r = 8;          
    this.speed = 9; 
  }
  
  // Move bullet upwards
  update() {
    this.y -= this.speed;
  }
  
  // Display the bullet
  display() {
    fill(255, 100, 0);
    ellipse(this.x, this.y, 24);
  }
  
 // When the bullet goes out of the screen
  offScreen() {
    return this.y < 0;
  }
}


// When the bullet hits the monster
function hitWithMonster(bX, bY, mX, mY) {
  let range = dist(bX, bY, mX, mY);
  return range < 24;
}





// Shooter class with its constructor containing position, dimensions
class Shooter {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.w = 200;
    this.h = 40;
  }
  
  // Display the shooter
  display() {
    fill(255, 100, 0);
    rect(this.x - this.w / 2, this.y - this.h / 2, this.w, this.h, 10);
    fill(255, 100, 0);
    rect(this.x - this.w + 195, this.y - this.h, 20, 20);
    if (mouseX >=  this.x - this.w / 2 && mouseX <= this.x - this.w / 2 + 200 && mouseY >= this.y - this.h / 2 && mouseY <= this.y - this.h / 2 + 40) {
      fill(255, 0, 0);
      rect(this.x - this.w / 2, this.y - this.h / 2, this.w, this.h, 10);
    }
   
  }
  
  // Move the shooter left or right
  move(direction) {
    this.x += direction;
    
    // Prevent the shooter from moving off the canvas
    this.x = constrain(this.x, this.w / 2, width - this.w / 2);
  }
}


// Function that allows you to shoot 
function shootBullets() {
  let faceX = 900*sin(frameCount * 0.01);
  if (keyIsDown(82)) {   // Pressing r
    shooter.move(-remoteSpeed); // Move left
  } 
  if (keyIsDown(84)) {    // Pressing t
    shooter.move(remoteSpeed); // Move right
  }
  
  shooter.display();
  
  
  for (let j = shots.length - 1; j >= 0; j--) {
    shots[j].update();
    shots[j].display();

    if (hitWithMonster(shots[j].x, shots[j].y, faceX + 400, 220)) {
      monsterHit = true;
    }
    
    
    if (shots[j].offScreen()) {
      shots.splice(j, 1);
    }
  }

}

// Creating the rocks
function createRocks() {
  rocks = [];
  for (let i = 0; i < 30; i++) { 
    rocks.push(new Rock());
  }
  
}


// image of the astronaut

function drawAstronaut() {
  image(ast, 400, 200, 85, 140);
}



// Rendering the rocks
function drawRock() {
  for (let rock of rocks) {
    rock.render();
  }
  
}

// Function that creates the sky
function drawSky() {
  image(sky, 0, -400, 1500, 1400);
}


// Function that creates the earth sky
function drawEarthSky() {
  image(earthSky, 0, -400, 1500, 1400);
}


// Function that displays the stars
function showStars() {
  push();
  fill(255);
  for (let i = 0; i < stars.length; i++) {
    stars[i].move();
    stars[i].display();
  }

  pop();
}


// Function of pressing keys
function keyPressed(){
  if (key == 's' || key === 'S') {
    launching = !launching;
    if (!rocketAlarm.isPlaying()) {
      rocketAlarm.play();
    }

    if (launching == false) {
      rocketAlarm.stop();
    }
   }
  if (keyCode === SHIFT) {
    spaceshipVisible = true; 
  }

 
}




// Rock class with constructor containing positions, dimensions, directions
class Rock {
  constructor() {
    this.x = random(width - 100);
    this.y = random(height - 100);
    this.size = 90;
    this.speed = random(1,3);
    this.direction = random([1, -1]);
  }


  // Updating the positions of rock
  update() {
    this.x += this.speed * this.direction;
    this.y += this.speed * this.direction;
    if (this.x < 0 || this.x > width) {
      this.direction *= -1;
    }

    if (this.y < 0 || this.y > height) {
      this.direction *= -1;
    }
  }

  // Rendering the rocks
  render() {
    image(rock, this.x, this.y, this.size, this.size);
  }

  // Rock that hits the shot
  hittingWithShot(shot) {
    return (shot.x > this.x && shot.x < this.x + 90) && (shot.y > this.y && shot.y < this.y + 90);
  }
// Rock hitting the astronaut
  hittingWithAstronaut() {
    return (astX + 80.4 >= this.x);
  }
}

// Updating the rocks
function updateRocks() {
  for (let rock of rocks) {
    rock.update();
  }
}

// Function for shooting rocks
function shootingRocks() {
  for (let i = rocks.length -1; i >= 0; i--) {
    for (let j = shots.length -1; j >= 0; j--) {
      if (rocks[i].hittingWithShot(shots[j])) {
        rocks.splice(i, 1);
        break;
      }
      
     
    }
  }
}

// Function of colliding astronaut with rocks
function hittingAstronaut() {
  for (let i = rocks.length -1; i >= 0; i--) {
    if (rocks[i].hittingWithAstronaut()) {
      astX -= 5*speed;
      break;

    }
  }
}






// Scene One: Astronaut with its spaceship, moon, satellite and planet

function sceneOne() {
  push();
  spaceship();
  drawMoon();
  drawPlanet();
  rotateAstronaut();
  moveAstronaut();
  drawsatellite();

  if (monsterLaugh.isPlaying() || scream.isPlaying() || alienCheering.isPlaying() || alienCrying.isPlaying()) {
    monsterLaugh.stop();
    scream.stop();
    alienCheering.stop();
    alienCrying.stop();
  }
  pop();
 
}

//create astronaut with rotating effect as there is no gravity in space.
function rotateAstronaut(){
  push();
  translate(astX,astY);
  rotate(rot);
  imageMode(CENTER);
  image(ast,0,0,80.4,130);
  rot += 0.009;
  pop();
}


// Rotating astronaut in multiverse
function rotateAstronautMultiverse() {
  push();
  translate(astX,astY);
  rotate(rot);
  image(ast,0,0,80.4,130);
  rot += 0.009;
  pop();

}

// This function allows the astronaut to move forwards, backwards, upwards and downwards
function moveAstronaut() {
  if (keyIsDown(LEFT_ARROW)) {
    astX -= speed;  // Move left
  }
  if (keyIsDown(RIGHT_ARROW)) {
    astX += speed;  // Move right
    if (sceneDisplay == 1 && !rocketSound.isPlaying()) {
       rocketSound.loop();
    }
  }
  if (keyIsDown(UP_ARROW)) {
    astY -= speed;  // Move up
  }
  if (keyIsDown(DOWN_ARROW)) {
    astY += speed;  // Move down
  }
}



// Function that allows astronaut to land on earth
function astronautOnEarth(x,y){
  image(ast,x,y,80.4,130);
  vel += gravity
  imgy += vel
  if(imgy> 80/100 *height) {
    vel = 0
    imgy = 80/100 *height
}
if(imgy < height/2){
  vel -= op - 1
}
if(keyIsDown(UP_ARROW)){
  vel += op
}
if(keyIsDown(RIGHT_ARROW)){
  imgx += 3
}
if(keyIsDown(LEFT_ARROW)){
  imgx -= 3
}
//stop astronaut at top
if(imgy<=0){
  imgy = 0
}

}


// Pressing the mouse on the astronaut will release the bullets
function mousePressed() {

  if (mouseX > shooter.x - shooter.w/2 && mouseX < shooter.x + shooter.w/2 && mouseY > shooter.y - shooter.h/2 && mouseY < shooter.y + shooter.h/2) {
    shots.push(new Shot(shooter.x, shooter.y - shooter.h/2));
    if (!fire.isPlaying()) {
      fire.play();
    }
  }

  

 
}

// This function draws spaceship
function spaceship() {
  // Body of the spaceship
  
  let flameX = 50*sin(frameCount*0.05);
  let shipX = 40*sin(frameCount*0.05);
  fill(150);
  beginShape();
  rect(120, 250 + shipX, 150, 170);
  fill(228, 8, 10);
  arc(195, 250 + shipX, 150, 240, PI, TWO_PI);
  endShape(CLOSE); // Complete the triangular body

  // Wings
  fill(100);
  triangle(120, 420 + shipX, 150, 420 + shipX, 110, 500 + shipX); // Left wing
  triangle(240, 420 +shipX, 270, 420 + shipX, 280, 500 + shipX); // Right wing
  
  // Cockpit
  fill(0, 150, 255);
  ellipse(193, 330 + shipX, 80, 80); // Cockpit window

  // Thrusters
  fill(200);
  rect(150, 420 + shipX, 30, 90); 
  rect(210, 420 + shipX, 30, 90); 

  // Flames from thrusters 
  fill(255, 100, 0);
  triangle(150, 510 + shipX, 180, 510 + shipX, 165, 540 +flameX); 
  triangle(210, 510 + shipX, 240, 510 + shipX, 225, 540 +flameX); 

  // Launch circles

  if (launching) {
    let launchColor = color(random(255), random(255), random(255));
    fill(launchColor);
  }

  else {
    fill(0);
  }
  
  ellipse(193, 235 + shipX, 20, 20);
  ellipse(222, 235 + shipX, 20, 20);
  ellipse(250, 235 + shipX, 20, 20);
  ellipse(165, 235 + shipX, 20, 20);
  ellipse(140, 235 + shipX, 20, 20);



}


// Launching the spacechips
function launchingSpaceship() {
  fill(252, 181, 15);
  ellipse(193, 235 + shipX, 20, 20);
  ellipse(222, 235 + shipX, 20, 20);
  ellipse(250, 235 + shipX, 20, 20);
  ellipse(165, 235 + shipX, 20, 20);
  ellipse(140, 235 + shipX, 20, 20);
}




// Satellite 
let Satellite = {
  x: 600,
  y: 150,
  width: 100,
  height: 60,
  angle: 0,
  rotSpeed: 0.012
};

// Draw the satellite and rotate it 
function drawsatellite() {
  Satellite.angle += Satellite.rotSpeed;
  translate(Satellite.x, Satellite.y);
  rotate(Satellite.angle);
  fill(255);
  rect(-Satellite.width / 1.5, -Satellite.height / 1.5, Satellite.width, Satellite.height);  
  fill(10, 108, 200);
  rect(-Satellite.width - 30, -Satellite.height / 2 + 10, 20, Satellite.height - 20);
  rect(Satellite.width - 20, -Satellite.height / 2 + 10, 20, Satellite.height - 20);
  fill(255, 0, 0);
  ellipse(-17, -Satellite.height -10, 10, 10);
  line(-22, -Satellite.height + 20, -22, -Satellite.height + 100);
  line(-2, -Satellite.height + 20, -2, -Satellite.height + 100);
  line(-37, -Satellite.height + 20, -37, -Satellite.height + 100);
  line(-55, -Satellite.height + 20, -55, -Satellite.height + 100);
  line(13, -Satellite.height + 20, 13, -Satellite.height + 100);
  line(30, -Satellite.height + 20, 30, -Satellite.height + 100);
  line(35, -Satellite.height + 35, -100, -Satellite.height + 35);
  line(40, -Satellite.height + 50, -68, -Satellite.height + 50);
  line(45, -Satellite.height + 65, - 75, -Satellite.height + 65);
 
 }


// Moon
function drawMoon() {
  fill(255);
  ellipse(1000, 100, 130, 130);
  fill(185, 180, 180);
  ellipse(960, 100, 20, 20);
  ellipse(980, 60, 20, 20);
  ellipse(1000, 130, 30, 30);
  

}


// Planet

function drawPlanet() {
  fill(60, 135, 214);
  arc(1475, 355, 140, 690, HALF_PI, PI + HALF_PI); 
  fill(66, 74, 82);
  ellipse(1450, 100, 20, 20);
  ellipse(1470, 200, 50, 50);
  ellipse(1480, 400, 50, 80);
  ellipse(1450, 600, 30, 50);
  ellipse(1425, 330, 10, 20);
}


// Constructor of star
class Star {
  constructor(x_coord, y_coord, width, height) {
    this.x_coord = x_coord;
    this.y_coord = y_coord;
    this.width = width;
    this.height = height;
    this.xSpeed = random(-400, 400);
    this.ySpeed = random(-400, 400); 
  }

  move() {
    this.x_coord += this.xSpeed;
    this.y_coord += this.ySpeed;

    if(this.x_coord > windowWidth) this.x_coord = 0;
    if (this.x_coord < 0) this.x_coord = windowWidth;
    if (this.y_coord > windowHeight) this.y_coord = 0;
    if (this.y_coord < 0) this.y_coord = windowHeight;
    
  }

  display() {
    ellipse(this.x_coord, this.y_coord, this.width, this.height);
  }
}

// Creating stars
function createStars() {
  for(let i = 0; i < 200; i++) {
  let star = new Star(random(windowWidth - 50), random(windowHeight), random(4), random(4));
  stars.push(star);
  }
}


// Scene Three
function sceneThree() {
  push();
  rotateAstronaut();
  moveAstronaut();
  drawRock();
  updateRocks();
  shootingRocks();
  hittingAstronaut();

  if (astX < 1200) {
    if (!rockSound.isPlaying() && !scream.isPlaying()) {
      rockSound.play();
      scream.play();
    }
  }

  if (calm_music.isPlaying() || happy_astronaut.isPlaying()) {
    calm_music.stop();
    happy_astronaut.stop();

  }

  pop();
  
 
}

// Scene Two
function sceneTwo() {
  push();
  drawSky();
  rotateAstronaut();
  moveAstronaut();
  drawMonster();
  drawSurface();
  drawAlien();
  drawPrison();
  if (rocketSound.isPlaying() || calm_music.isPlaying() 
  || rocketAlarm.isPlaying()) {
    rocketAlarm.stop();
    rocketSound.stop();
    calm_music.stop();
  }

  

  pop();


 

}




// Scene Four - create a multiverse
function sceneFour() {
  push();
  multiverseScene();
  rotateAstronautMultiverse();
  moveAstronaut();
  if (rocketSound.isPlaying() || alienCheering.isPlaying() || alienCrying.isPlaying || scream.isPlaying()) {
    rocketSound.stop();
    alienCheering.stop();
    alienCrying.stop();
    scream.stop();
    
  }

  if (!calm_music.isPlaying() && !happy_astronaut.isPlaying()) {
    calm_music.play();
    happy_astronaut.play();
  }


}

// Scene Five
function sceneFive() {
  push();
  drawSky();
  drawSurface();
  rotateAstronaut();
  moveAstronaut();
  if (calm_music.isPlaying() || happy_astronaut.isPlaying()) {
    calm_music.stop();
    happy_astronaut.stop();

  }

  if (!alienCheering.isPlaying()) {
    alienCheering.play();
  }


  if (aliensVisible) {
    drawAlienWithoutPrison();

  }
  
  if (spaceshipVisible) {
    spaceship1(); // Draw the spaceship if the flag is true
    launching = !launching; 
    if (!rocketAlarm.isPlaying) {
      rocketAlarm.play();
    }
  }

  pop();


}



// Drawing alien without prison
function drawAlienWithoutPrison() {
  let alienY1 = 30*sin(frameCount*0.2);
  let alienY2 = 30*sin(frameCount*0.3);
  let alienY3 = 30*sin(frameCount*0.15);
  let alienY4 = 30*sin(frameCount*0.18);
  image(alien, 1200, 400 + alienY1, 200, 300);
  image(alien, 1130, 400 + alienY2, 200, 300);
  image(alien, 1060, 400 + alienY3, 200, 300);
  image(alien, 1000, 400 + alienY4, 200, 300);

 

}


// function that draws spaceship in sceneOne
function spaceship1() {
  // Body of the spaceship
  
  let flameX = 50*sin(frameCount*0.05);
  let shipX = 40*sin(frameCount*0.05);
 
  fill(150);
  beginShape();
  rect(120 + direction, 250 + shipX, 150, 170);
  fill(228, 8, 10);
  arc(195 + direction, 250 + shipX, 150, 240, PI, TWO_PI);
  endShape(CLOSE); // Complete the triangular body

  // Wings
  fill(100);
  triangle(120 + direction, 420 + shipX, 150 + direction, 420 + shipX, 110 + direction, 500 + shipX); // Left wing
  triangle(240 + direction, 420 +shipX, 270 + direction, 420 + shipX, 280 + direction, 500 + shipX); // Right wing
  
  // Cockpit
  fill(0, 150, 255);
  ellipse(193 +direction, 330 + shipX, 80, 80); // Cockpit window

  // Thrusters
  fill(200);
  rect(150 + direction, 420 + shipX, 30, 90); 
  rect(210 + direction, 420 + shipX, 30, 90); 

  // Flames from thrusters 
  fill(255, 100, 0);
  triangle(150 + direction, 510 + shipX, 180 + direction, 510 + shipX, 165 + direction, 540 +flameX); 
  triangle(210 +direction, 510 + shipX, 240 + direction, 510 + shipX, 225 +direction, 540 +flameX); 

  // Launch circles

  if (launching) {
    let launchColor = color(random(255), random(255), random(255));
    fill(launchColor);
  }

  else {
    fill(0);
  }
  
  ellipse(193 + direction, 235 + shipX, 20, 20);
  ellipse(222 + direction, 235 + shipX, 20, 20);
  ellipse(250 + direction, 235 + shipX, 20, 20);
  ellipse(165 + direction, 235 + shipX, 20, 20);
  ellipse(140 + direction, 235 + shipX, 20, 20);

  direction += 2;

  if (direction == 800) {
    aliensVisible = false;
  }

  if (direction > 1300) {
    sceneDisplay++;
  }

}



function spcaeship() {
  // Body of the spaceship
  
 
  fill(150);
  beginShape();
  rect(120, 400 , 150, 170);
  fill(228, 8, 10);
  arc(195, 400 , 150, 240, PI, TWO_PI);
  endShape(CLOSE); // Complete the triangular body

  // Wings
  fill(100);
  triangle(120, 570, 150, 570, 110, 610 ); // Left wing
  triangle(240, 570, 270, 570 , 280, 610); // Right wing
  
  // Cockpit
  fill(0, 150, 255);
  ellipse(193, 480 , 80, 80); // Cockpit window

  // Thrusters
  fill(200);
  rect(150, 570 , 30, 90); 
  rect(210, 570, 30, 90); 

  // Flames from thrusters 
  fill(255, 100, 0);
  triangle(150, 660 , 180, 660 , 165, 690); 
  triangle(210, 660, 240, 660 , 225, 690); 

  fill(0);
  ellipse(193, 380, 20, 20);
  ellipse(222, 380, 20, 20);
  ellipse(250, 380, 20, 20);
  ellipse(165, 380, 20, 20);
  ellipse(140, 380, 20, 20);

  

}


function drawTrees() {
  fill(68, 105, 35);
  triangle(600, 300, 550, 550, 650, 550);
  triangle(700, 375, 655, 570, 745, 570);
  triangle(790, 450, 760, 600, 840, 600);
  fill(135,62,35);
  rect(585, 550, 30, 90);
  rect(690, 570, 20, 70);
  rect(795, 600, 15, 50);




}





// Function that creates home
function drawHome() {
  fill(255, 222, 89);
  rect(1000, 400, 400, 260);
  fill(240, 80, 80);
  quad(1000, 400, 1400, 400, 1340, 300, 1050, 300);
  triangle(1050, 300, 1000, 400, 1100, 400);
  line(1100, 400, 1100, 660);
  // gate 
  fill(135,62,35);
  rect(1200, 500, 100, 160);
 // window
  fill(21,76,121, 100);
  rect(1020, 450, 60, 50);
  line(1050, 450, 1050, 500);
  line(1020, 475, 1080, 475);
}


// Function that creates surface on earth
function drawSurfaceEarth() {
  fill(191, 214, 65);
  quad(0, 600, 1500, 650, 1500, 750, 0, 750);
}


// Function that creates collision with house
function collisionWithHouse(astX, gateX) {
  if (astX >= gateX) {
    return true;
  }


  return false;

}

// Scene Six
function sceneSix() {
  push();
  drawEarthSky();
  drawSurfaceEarth();
  drawHome();
  spcaeship();
  drawTrees();

  if (calm_music.isPlaying()) {
    calm_music.stop();
  }

  if (happy_astronaut.isPlaying()) {
    happy_astronaut.stop();
  }

  if (rocketAlarm.isPlaying()) {
    rocketAlarm.stop();

  }

  if (!alienCheering.isPlaying()) {
    alienCheering.play();
  }


  if (imgx <= 1200) {
    astronautOnEarth(imgx, imgy);
  }
 
  //moveAstronaut();
  if (!alienInsideHouse){
    moveAliens();

  }


  pop();
 
  


}

function sceneSeven() {
  push();
  drawEarthSky();
  drawSurfaceEarth();
  drawHome();
  spcaeship();
  drawTrees();

  if (calm_music.isPlaying()) {
    calm_music.stop();
  }

  if (happy_astronaut.isPlaying()) {
    happy_astronaut.stop();
  }

  if (rocketAlarm.isPlaying()) {
    rocketAlarm.stop();

  }

 


  if (imgx <= 1200) {
    astronautOnEarth(imgx, imgy);
  }
 
  
 


  pop();
 
  


}



// Prison where aliens are captured
function drawPrison() {

  if (monsterHit) return;
  fill(205, 18, 19);
  ellipse(1200, 300, 340, 10);
  ellipse(1200, 680, 340, 10);
  fill(155, 185, 235, 100);
  quad(1030, 300, 1370, 300, 1370, 680, 1030, 680);
}



// drawAlien
function drawAlien() {
  let alienY1 = 30*sin(frameCount*0.2);
  let alienY2 = 30*sin(frameCount*0.3);
  let alienY3 = 30*sin(frameCount*0.15);
  let alienY4 = 30*sin(frameCount*0.18);
  image(alien, 1200, 400 + alienY1, 200, 300);
  image(alien, 1130, 400 + alienY2, 200, 300);
  image(alien, 1060, 400 + alienY3, 200, 300);
  image(alien, 1000, 400 + alienY4, 200, 300);
}




// Creating multiverse on sceneFour
function multiverseScene() {
  push();
  translate(width/2, height/2);
  rotate(frameCount *rotation_speed);
  for (let j = 0; j < total; j++) {
    let torque1 = sin(j + frameCount * 0.002) * 10;
    let torque2 = cos(j + frameCount * 0.004) * 650;

    let increment = 85;
    let patternX = map(sin(frameCount * 0.01), -1, -1, -increment, increment);
    let patternY = map(cos(frameCount * 0.01), -1, -1, -increment, increment);

    let m = -394;
    let x_coord = sin(radians(j)) * (torque2 + m) + patternX;
    let y_coord = cos(radians(j)) * (torque2 + m) + patternY;

    let n = 860;
    let x1_coord = sin(radians(j)) * (n / torque1);
    let y1_coord = cos(radians(j)) * (n / torque1);

    fill(255);
    circle(x_coord, y_coord, 1);

    let size = map(sin(j * frameCount * 0.0002), -1, 1, 0, map(mouseX, 0, width, 1, 6));
    if (key = 'RIGHT_ARROW') {
      size *= 2;
    }
    fill(colors[j % colors.length]);
    circle(x1_coord, y1_coord, size);

    
    

  }

  pop();
}




// Landscape of the planet where aliens live

function drawSurface() {
  fill(166, 173, 168);
  quad(0, 650, 1500, 600, 1500, 750, 0, 750);
 

}

// Functions that releases water balls
function releaseBullets(x,y) {
  weapons.push({x: x, y: y})
}


// The monster present in the scene 3
function drawMonster() {

  if (monsterHit) {
    if(scream.isPlaying()) {
      scream.stop();
    }

    if(monsterLaugh.isPlaying()) {
      monsterLaugh.stop();
    }

    if (alienCrying.isPlaying()) {
      alienCrying.stop();
    }

    if (!alienCheering.isPlaying()) {
      alienCheering.play();
    }
    return;

  } 
  if(!monsterLaugh.isPlaying()) {
    monsterLaugh.play();
  }

  if(!scream.isPlaying()) {
    scream.play();
  }

  if (!alienCrying.isPlaying()) {
    alienCrying.play();
  }
  
  let eX = 10*sin(frameCount*0.08);
  let fX = 900*sin(frameCount*0.01);
  quad(fX+365, eX+140,fX+382,188,fX+380,190,fX+363,eX+142);
  quad(fX+433,190,fX+458,eX+140,fX+460,eX+142,fX+436,190);
  fill(204, 29, 78);
  ellipse(fX+365, eX+140, 15, 15);
  ellipse(fX+458, eX+140, 15, 15);
  fill(0);
  ellipse(fX+365, eX+140, 8, 8);
  ellipse(fX+458, eX+140, 8, 8);
  fill(204, 29, 78);
  quad(fX+380, 190, fX+435, 190, fX+440, 220, fX+375, 220);
  quad(fX+375, 218, fX+440, 218, fX+435, 248, fX+380, 248);
 

  // eyes
  fill(255,255,255);
  ellipse(fX+393, 205, 15, 20);
  ellipse(fX+420, 205, 15, 20);

  // eyeballs
  fill(0);
  ellipse(fX+393, 205, 8, 12);
  ellipse(fX+420, 205, 8, 12);

  // mouth
  line(fX+385, 232, fX+395, 235);
  line(fX+395, 235, fX+420, 235);
  line(fX+420, 235, fX+430, 232);

  //teeth
  fill(255);
  triangle(fX+395, 235, fX+405, 235, fX+400, 240);
  
  triangle(fX+410, 235, fX+420, 235, fX+415, 240);

 

  // hands
 fill(204, 29, 78);

 triangle(fX+435, 190, fX+435, 248, fX + 500, 220 + eX);
 triangle(fX+ 380, 190, fX + 380, 248, fX + 315, 220 + eX);

  if (frameCount%10  == 0) {
    releaseBullets(fX + 500, 220 + eX);
    releaseBullets(fX + 315, 220 + eX);
  }
  
  // Creating the water circles
  for (let i = weapons.length -1; i >= 0; i--) {
    weapons[i].y += 2;
    fill(49, 148, 80);
    ellipse(weapons[i].x, weapons[i].y, 10, 10);
    if (weapons[i].y > height) {
      weapons.splice(i,1);
    }
  }
}


// Moving aliens
function moveAliens() {
    
    let alienY1 = 30*sin(frameCount*0.2);
    let alienY2 = 30*sin(frameCount*0.3);
    let alienY3 = 30*sin(frameCount*0.15);
    let alienY4 = 30*sin(frameCount*0.18);
    image(alien, 300 + walk, 400 + alienY1, 200, 300);
    image(alien, 350 + walk, 400 + alienY2, 200, 300);
    image(alien, 400 + walk, 400 + alienY3, 200, 300);
    image(alien, 450 + walk, 400 + alienY4, 200, 300);

   if(keyIsDown(RIGHT_ARROW)) {
    walk += 2;
  }

  if (keyIsDown(LEFT_ARROW)) {
    walk -= 2;
  }

  if (walk > 600) {
    alienInsideHouse = true;
  }

  if (walk < 600) {
    alienInsideHouse = false;
  }
  
   
  
  
}



// when you hit the spacebar, what's currently on the canvas will be saved (as a
// "thumbnail.png" file) to your downloads folder.
// make sure you add and commit the image to the root folder of this repo.
function keyTyped() {
  if (key === " ") {
    saveCanvas("thumbnail.png");
  }
}


//To allow the zoom in and zoom out of the canvas
function resizeWindow() {
  console.log("Hi");
  resizeCanvas(windowWidth, windowHeight);
}



