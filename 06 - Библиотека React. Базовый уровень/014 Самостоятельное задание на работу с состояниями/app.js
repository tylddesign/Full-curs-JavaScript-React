class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 2
        }
    }

    increase = () => {
        console.log('+++');
        this.setState(state => ({
            counter: state.counter + 1
        }));
    }

    decrease = () => {
        console.log('---');
        this.setState(state => ({
            counter: state.counter - 1
        }));
    }

    rnd = () => {
        console.log('rnd');
        this.setState(state => ({
            counter: Math.round(Math.random() * ((Math.random() < 0.5) ? -50 : 50))
        }))
    }

    reset = () => {
        this.setState({ counter: 0 });
    }

    render() {
        return (
            <div class="app">
                <div class="counter">{this.state.counter}</div>
                <div class="controls">
                    <button onClick={this.increase}>INC</button>
                    <button onClick={this.decrease}>DEC</button>
                    <button onClick={this.rnd}>RND</button>
                    <button onClick={this.reset}>RESET</button>
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <App />, document.getElementById('app')
);

  // 1) Начальное значение счетчика должно передаваться через props
  // 2) INC и DEC увеличивают и уменьшают счетчик соответственно на 1. Без ограничений, но можете добавить границу в -50/50. По достижению границы ничего не происходит
  // 3) RND изменяет счетчик в случайное значение от -50 до 50. Конструкцию можете прогуглить за 20 секунд :) Не зависит от предыдущего состояния
  // 4) RESET сбрасывает счетчик в 0 или в начальное значение из пропсов. Выберите один из вариантов