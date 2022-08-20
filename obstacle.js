class Obstacle extends Rectangle {
  constructor() {
    const w = 100;
    const h = 50;
    super(
      Math.floor(random(0, width - w)),
      Math.floor(random(0, height - player.h - h)),
      w,
      h
    );
  }
}
