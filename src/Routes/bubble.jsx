import React, { useEffect, useRef } from "react";

const BubbleAnimation = () => {
  const canvasRef = useRef(null);
  let canvas;
  let ctx;
  const balls = [];
  const ballNumber = 6;

  class Ball {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.size = 24 + Math.random() * 30;
      this.angle = Math.random() * (Math.PI * 2);
      this.power = Math.random() * 2 + 1;
      this.directionX = this.power * Math.cos(this.angle);
      this.directionY = this.power * Math.sin(this.angle);
    }

    update() {
      this.y += this.directionY;
      this.x += this.directionX;

      if (this.y + this.size > canvas.height || this.y - this.size < 0) {
        this.directionY *= -1;
      }

      if (this.x > canvas.width - this.size) {
        this.x = canvas.width - this.size;
        this.directionX *= -1;
      } else if (this.x - this.size < 0) {
        this.directionX *= -1;
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, true);
      ctx.closePath();

      ctx.shadowColor = "rgba(0, 0, 0, 0.198)";
      ctx.shadowBlur = 20;
      ctx.shadowOffsetX = 3;
      ctx.shadowOffsetY = 2;

      ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
      ctx.strokeStyle = "rgba(255, 255, 255, 0.3)";
      ctx.lineWidth = 2;

      ctx.fill();
      ctx.stroke();

      ctx.shadowColor = "transparent";
      ctx.shadowBlur = 0;
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 0;
    }
  }

  useEffect(() => {
    canvas = canvasRef.current;
    ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth - 15;
    canvas.height = window.innerHeight - 15;

    const init = () => {
      for (let i = 0; i < ballNumber; i++) {
        balls[i] = new Ball(canvas.width * 0.5, canvas.height * 0.5);
      }
    };

    const animate = () => {
      ctx.fillStyle = "rgba(255, 255, 255, 1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < ballNumber; i++) {
        balls[i].update();
        balls[i].draw();
      }

      window.addEventListener("resize", () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      });

      requestAnimationFrame(animate);
    };

    init();
    animate();
  }, []);

  return <canvas style={{ zIndex: -1 }} ref={canvasRef} />;
};

export default BubbleAnimation;
