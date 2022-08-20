class Player extends Rectangle {
  constructor(x, y, w, h) {
    super(x, y, w, h);
    this.velX = 0;
    this.velY = 0;
  }

  move() {
    const collidingObstacle = obstacles.find((obstacle) => {
      return obstacle.collidesWith(this);
    });

    if (collidingObstacle) {
      this.handleCollisions(collidingObstacle);
      if (this.getYDirection() !== 0) {
        this.velY = 0;
      }

      if (this.getXDirection() !== 0) {
        this.velX = 0;
      }
    }

    if (keyIsDown(LEFT_ARROW)) {
      player.velX = -5;
    } else if (keyIsDown(RIGHT_ARROW)) {
      player.velX = 5;
    } else {
      player.velX = 0;
    }

    this.x += this.velX;
    this.y += this.velY;

    // constrain y so player "lands" on ground.
    this.y = constrain(this.y, 0, height - this.h);

    // update velocity to "fall"
    if (this.isOnGround()) {
      this.velY = 0;
    } else {
      this.velY += 1;
    }
  }

  getXDirection() {
    if (this.velX > 0) {
      return 1;
    } else if (this.velX < 0) {
      return -1;
    } else {
      return 0;
    }
  }

  getYDirection() {
    if (this.velY > 0) {
      return 1;
    } else if (this.velY < 0) {
      return -1;
    } else {
      return 0;
    }
  }

  handleCollisions(obj) {
    while (this.collidesWith(obj)) {
      const xDir = this.getXDirection();
      const yDir = this.getYDirection();

      this.x -= xDir;
      this.y -= yDir;
    }
  }

  draw() {
    this.move();
    super.draw();
  }

  isOnObstacle() {
    const obstacle = obstacles.find((obstacle) => {
      return (
        this.x < obstacle.x + obstacle.w &&
        this.x + this.w > obstacle.x &&
        obstacle.y === this.y + this.h
      );
    });
    return obstacle;
  }

  isOnGround() {
    if (this.y === height - this.h || this.isOnObstacle()) {
      return true;
    }
  }
}
