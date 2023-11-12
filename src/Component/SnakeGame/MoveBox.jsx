import React from "react";
import "./Button.css";

class MySnakeGame extends React.Component {
  food_x = 150;
  food_y = 150;

  x = 100;
  y = 100;

  Arr = [];

  key_name = "none";
  state = { a: 0 };
  score = 0;
  fun1 = (e) => {
    this.key_name = e.key;
    
  };

  food_collied() {
    if (
      this.x >= this.food_x - 10 &&
      this.x <= this.food_x + 10 &&
      this.y >= this.food_y - 10 &&
      this.y <= this.food_y + 10
    )
      return true;
    else return false;
  }

  snake_collide = () => {
    this.Arr.forEach((e) => {
      if (e[0] === this.x && e[1] === this.y) {
        this.score = 0;
        this.Arr = [];

      }
    });
    
  };
 
  

  componentWillMount() {
    setInterval(() => {
      if (this.food_collied()) {
        this.food_x = Math.round(Math.random() * 400);
        this.food_y = Math.round(Math.random() * 400);
        this.score++;
      }
      if (this.Arr.length > this.score) {
        this.Arr.splice(0, 1);
      }
      this.Arr.push([this.x, this.y]);

      switch (this.key_name) {
        case "ArrowUp":
          this.y -= 10;
          break;
        case "ArrowDown":
          this.y += 10;
          break;
        case "ArrowLeft":
          this.x -= 10;
          break;
        case "ArrowRight":
          this.x += 10;
          break;
      }
      

      if (this.x > 390) {
        this.x = 0;
      }
      if (this.x < 0) {
        this.x = 400;
      }
      if (this.y > 390) {
        this.y = 0;
      }
      if (this.y < 0) {
        this.y = 400;
      }

      this.snake_collide();

      this.setState({ a: 0 });
    }, 200);
  }

  render = () => {
    return (
      <>
        <div className="main">
          <h1>The Snake Game</h1>
          <h3>Score: {this.score}</h3>
          <input onKeyDown={this.fun1} autoFocus />
          <div className="container">
            <div
              className="container-box"
              style={{ left: this.x, top: this.y }}
            >
              <div className="eye">
                <div className="eye-boll-1"></div>
                <div className="eye-boll-2"></div>
              </div>
            </div>
            {this.Arr.map((e) => (
              <div
                className="container-box2"
                style={{ left: e[0], top: e[1] }}
              ></div>
            ))}
            <div
              className="container-box3"
              style={{ left: this.food_x, top: this.food_y }}
            ><i class="fa-solid fa-apple-whole fa-beat-fade"></i></div>
          </div>
        </div>
      </>
    );
  };
}
export default MySnakeGame;
