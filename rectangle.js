class Rectangle {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }

  draw() {
    rect(this.x, this.y, this.w, this.h);
  }

  collidesWith(rect2) {
    if (!rect2) return;
    return (
      this.x < rect2.x + rect2.w &&
      this.x + this.w > rect2.x &&
      this.y < rect2.y + rect2.h &&
      this.h + this.y > rect2.y
    );
  }
}
