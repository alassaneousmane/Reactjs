class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: 4};

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState({count: this.state.count + 1});
  }

  decrement() {
     this.state.count > 0 && this.setState({count: this.state.count -  1});
  }

  render() {
    return (
      <div>
      <h1>Vous avez {this.state.count} copines.</h1>
      <button onClick={this.increment}>J'ai une nouvelle copine</button>
      <button onClick={this.decrement}>J'ai perdu une copine</button>
      </div>
      
      )
   }
}


ReactDOM.render(<Counter />, document.querySelector('#root'))