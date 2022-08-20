let player;
let obstacles = [];

function setup() {
  createCanvas(innerWidth, innerHeight);
  player = new Player(width / 2, height - 50, 50, 50);
  obstacles.push(
    new Obstacle(width / 3, height - player.h * 2 - 100, 100, 150)
  );

  obstacles.push(
    new Obstacle(
      obstacles.reduce(
        (sum, obstacle) => sum + obstacle.w + player.w,
        width / 3
      ),
      height - player.h * 2 - 300
    )
  );
  obstacles.push(
    new Obstacle(
      obstacles.reduce(
        (sum, obstacle) => sum + obstacle.w + player.w,
        width / 3
      ),
      height - player.h * 2 - 300
    )
  );
  obstacles.push(
    new Obstacle(
      obstacles.reduce(
        (sum, obstacle) => sum + obstacle.w + player.w,
        width / 3
      ),
      height - player.h * 2 - 100,
      100,
      150
    )
  );

  //   for (let i = 0; i < 5; i++) {
  //     obstacles.push(new Obstacle());
  //   }
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
