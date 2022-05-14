import React from 'react'

export default class AppClass extends React.Component {
  constructor() {
    super();
    this.state = {
      x: 2,
      y: 2,
      error: null,
    }
    this.move = this.move.bind(this)
  }

  move(direction){
    switch(direction){
      case "Left":
        if(this.state.x <= 1){
          this.setState({
            ...this.state,
            error:"You cannot go left"

          })
          return;
        }
        this.setState({
          ...this.state,
          x:this.state.x-1
        })
        break;
        case "Right":
        if(this.state.x >= 3){
          this.setState({
            ...this.state,
            error:"You cannot go right"

          })
          return;
        }
        this.setState({
          ...this.state,
          x:this.state.x+1
        })
        break;
        case "Down":
        if(this.state.y >= 3){
          this.setState({
            ...this.state,
            error:"You cannot go down"

          })
          return;
        }
        this.setState({
          ...this.state,
          y:this.state.y+1
        })
        break;
        case "Up":
        if(this.state.y <= 1){
          this.setState({
            ...this.state,
            error:"You cannot go up"

          })
          return;
        }
        this.setState({
          ...this.state,
          y:this.state.y-1
        })
        break;
        case "Reset":
        if(this.state.y = 1){
          this.setState({
            ...this.state,
          })
          return;
        }
        this.setState({
          ...this.state,
          y:this.state.y
        })
        break;
    }
  }

  render() {
    const { className } = this.props
    const squares = []
    for(let y = 1; y<=3; y++){
    for(let x = 1; x<=3; x++){
        const isActive = this.state.x === x && this.state.y === y
        squares.push(<div className="square">{isActive && "B"}</div>)
      }
    }
    return (
      <div id="wrapper" className={className}>
        <div className="info">
          <h3 id="coordinates">Coordinates ({this.state.x}, {this.state.y})</h3>
          <h3 id="steps">You moved {this.state.x} times</h3>
        </div>
        <div id="grid">
          {/* <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square active">B</div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div> */}
          {squares}
        </div>
        <div className="info">
          <h3 id="message">{this.state.error}</h3>
        </div>
        <div id="keypad">
          <button id="left" onClick = {() =>this.move("Left")}>LEFT</button>
          <button id="up" onClick = {() =>this.move("Up")}>UP</button>
          <button id="right" onClick = {() =>this.move("Right")}>RIGHT</button>
          <button id="down" onClick = {() =>this.move("Down")}>DOWN</button>
          <button id="reset" onClick = {() =>this.move("Reset")}>reset</button>
        </div>
        <form>
          <input id="email" type="email" placeholder="type email"></input>
          <input id="submit" type="submit"></input>
        </form>
      </div>
    )
  }
}
