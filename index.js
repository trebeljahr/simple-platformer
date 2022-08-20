let player;
let obstacles = [];

function setup() {
  createCanvas(innerWidth, innerHeight);
  player = new Player(width / 2, height - 50, 50, 50);
  for (let i = 0; i < 30; i++) {
    obstacles.push(new Obstacle());
  }
}

function draw() {
  background("white");
  noStroke();
  fill("red");
  player.draw();

  fill("green");
  obstacles.forEach((obstacle) => obstacle.draw());
}

function keyPressed() {
  if (keyCode === UP_ARROW && player.isOnGround()) {
    console.log("Trying to jump!");
    player.velY -= 20;
  }
}

function windowResized() {
  resizeCanvas(innerWidth, innerHeight);
}
