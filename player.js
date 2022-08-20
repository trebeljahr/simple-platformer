class Player extends Rectangle {
  constructor(x, y, w, h) {
    super(x, y, w, h);
    this.velX = 0;
    this.velY = 0;
  }

  move() {
    if (keyIsDown(LEFT_ARROW)) {
      player.velX = -5;
    } else if (keyIsDown(RIGHT_ARROW)) {
      player.velX = 5;
    } else {
      player.velX = 0;
    }

    const collidingObstacles = obstacles.filter((obstacle) => {
      return obstacle.collidesWith(this);
    });

    this.x += this.velX;
    this.y += this.velY;

    collidingObstacles.forEach((obstacle) => this.handleCollisions(obstacle));

    // if (collidingObstacles.length) {
    //   if (this.getYDirection() !== 0) {
    //     this.velY = 0;
    //   }
    //   if (this.getXDirection() !== 0) {
    //     this.velX = 0;
    //   }
    // }

    // constrain y so player "lands" on ground.
    this.y = Math.min(this.y, height - this.h);

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
    if (!this.collidesWith(obj)) return;

    while (this.collidesInXWith(obj)) {
      const xDir = this.getXDirection();
      this.x -= xDir;
      if (xDir === 0) {
        break;
      }
    }

    if (!this.collidesWith(obj)) return;

    while (this.collidesInYWith(obj)) {
      const yDir = this.getYDirection();
      if (yDir === 0) {
        break;
      }
      this.y -= yDir;
    }
    this.velY = 0;

    // console.log("Reached after first while loop");
  }

  draw() {
    this.move();
    super.draw();
  }

  isOnObstacle() {
    const obstacle = obstacles.find((obstacle) => {
      return this.collidesInXWith(obstacle) && obstacle.y === this.y + this.h;
    });
    return obstacle;
  }

  isOnGround() {
    if (this.y === height - this.h || this.isOnObstacle()) {
      return true;
    }
  }
}
