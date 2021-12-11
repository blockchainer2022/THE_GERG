export default class Particle {
  constructor(args) {
    this.position = args.position;
    this.velocity = args.velocity;
    this.radius = 5;
    this.lifeSpan = 20;
    this.inertia = 0.98;
  }

  destroy() {
    this.delete = true;
  }

  render(state) {
    // Move
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
    this.velocity.x *= this.inertia;
    this.velocity.y *= this.inertia;

    // Shrink
    this.radius -= 0.1;
    if (this.radius < 0.1) {
      this.radius = 0.1;
    }
    if (this.lifeSpan-- < 1) {
      this.destroy();
    }

    // Draw
    const context = state.context;
    context.save();
    context.translate(this.position.x, this.position.y);
    context.fillStyle =
      Math.round(this.position.x) % 2 === 0 ? "orange" : "red";
    context.lineWidth = 2;
    context.beginPath();
    context.moveTo(0, -this.radius);
    context.arc(0, 0, this.radius, 0, 2 * Math.PI);
    context.closePath();
    context.fill();
    context.restore();
  }
}
