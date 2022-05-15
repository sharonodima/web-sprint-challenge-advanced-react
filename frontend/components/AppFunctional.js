import React, {useState} from 'react';
import axios from "axios"

export default function AppFunctional(props) {
  const [x, setx] = useState(2);
  const [y, sety] = useState(2);
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [count, setCount] = useState(0);
  const { className } = props;
  const squares = [];
  for (let yI = 1; yI <= 3; yI++) {
    for (let xI = 1; xI <= 3; xI++) {
      const isActive = x === xI && y === yI;
      squares.push(<div className={isActive ? "square active" : "square"}>{isActive && "B"}</div>);
    }
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    //const {x, y, count, email} = this.state
    axios.post("http://localhost:9000/api/result", {
      x, y, email,
      steps: count
    })
    .then((response) =>{
      console.log(response.data)
      // this.setState({
      //   ...this.state,
      //   error: response.data.message
      // })
      setError(response.data.message)
      setEmail("")
    })
    .catch((err) => {
      console.log(err)
      setError(err.response.data.message)
      setEmail("")
    }) 
  }

  function move(direction){
    switch (direction) {
      case "Left":
        if (x <= 1) {
          // this.setState({
          //   ...this.state,
          //   error: "You cannot go left"

          // });
          setError("You can't go left")
          return;
        }
        // this.setState({
        //   ...this.state,
        //   x: this.state.x - 1,
        //   count: this.state.count + 1,
        //   error: null,
        // });
        setx(x - 1)
        setCount(count + 1)
        setError(null)
        break;
      case "Right":
        if (x >= 3) {
          // this.setState({
          //   ...this.state,
          //   error: "You cannot go right"

          // });
          setError("You can't go right")
          return;
        }
        // this.setState({
        //   ...this.state,
        //   x: this.state.x + 1,
        //   count: this.state.count + 1,
        //   error: null,
        // });
        setx(x + 1)
        setCount(count + 1)
        setError(null)
        break;
      case "Down":
        if (y >= 3) {
          // this.setState({
          //   ...this.state,
          //   error: "You cannot go down"

          // });
          setError("You can't go down")
          return;
        }
        // this.setState({
        //   ...this.state,
        //   y: this.state.y + 1,
        //   count: this.state.count + 1,
        //   error: null,
        // });
        sety(y + 1)
        setCount(count + 1)
        setError(null)
        break;
      case "Up":
        if (y <= 1) {
          // this.setState({
          //   ...this.state,
          //   error: "You cannot go up"

          // });
          setError("You can't go up")
          return;
        }
        // this.setState({
        //   ...this.state,
        //   y: this.state.y - 1,
        //   count: this.state.count + 1,
        //   error: null,
        // });
        sety(y-1)
        setCount(count + 1)
        setError(null)
        break;
      case "Reset":
        // this.setState({
        //   ...this.state,
        //   x: 2,
        //   y: 2,
        //   count: 0,
        //   error: null,
        // });
        setx(2)
        sety(2)
        setCount(0)
        setError(null)
        break;
    }

  }
  return (
    <div id="wrapper" className={className}>
      <div className="info">
        <h3 id="coordinates">Coordinates ({x}, {y})</h3>
        <h3 id="steps">{count === 1 ? `You moved ${count} time` : `You moved ${count} times`}</h3>
      </div>
      <div id="grid">
        {squares}
      </div>
      <div className="info">
        <h3 id="message">{error}</h3>
      </div>
      <div id="keypad">
        <button id="left" onClick={() => move("Left")}>LEFT</button>
        <button id="up" onClick={() => move("Up")}>UP</button>
        <button id="right" onClick={() => move("Right")}>RIGHT</button>
        <button id="down" onClick={() => move("Down")}>DOWN</button>
        <button id="reset" onClick={() => move("Reset")}>reset</button>
      </div>
      <form onSubmit={handleSubmit}>
        <input onChange={(evt) => setEmail(evt.target.value)} value={email} id="email" type="email" placeholder="type email"></input>
        <input id="submit" type="submit"></input>
      </form>
    </div>
  );
}
