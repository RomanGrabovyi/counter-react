


import { Component } from 'react';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: this.props.counter
    }
  }
  
  incCounter = () => {
    if (this.state.counter < 50) {
      this.setState(state => ({
        counter: state.counter + 1
      }))
    }
  }
  
  decCounter = () => {
    if (this.state.counter > -50) {
      this.setState(state => ({
        counter: state.counter - 1
      }))
    }
  }
  
  rndCounter = () => {
    this.setState({
      counter: +(Math.random() * (-50 - 50) + -50).toFixed(0)
    })
  }
  
  resCounter = () => {
    this.setState({
      counter: this.props.counter
    })
  }
  
  // Используйте только стрелочную форму методов
  // Почему? Подробный ответ будет в следующем уроке
  
  render() {
    
    const {counter} = this.state;
    
    return (
      <div class="app">
        <div class="counter">{counter}</div>
        <div class="controls">
          <button onClick={this.incCounter}>INC</button>
          <button onClick={this.decCounter}>DEC</button>
          <button onClick={this.rndCounter}>RND</button>
          <button onClick={this.resCounter}>RESET</button>
        </div>
      </div>
    )
  }
}

export default App;

