


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

// 1) Начальное значение счетчика должно передаваться через props
// 2) INC и DEC увеличивают и уменьшают счетчик соответственно на 1. Без ограничений, но можете добавить границу в -50/50. По достижению границы ничего не происходит
// 3) RND изменяет счетчик в случайное значение от -50 до 50. Конструкцию можете прогуглить за 20 секунд :) Не зависит от предыдущего состояния
// 4) RESET сбрасывает счетчик в 0 или в начальное значение из пропсов. Выберите один из вариантов