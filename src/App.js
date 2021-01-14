import Counters from './components/counters'
import Navbar from './components/navbar'
import './App.css';
import { Component } from "react";

class App extends Component {

  state = {  
    counters: [
      {id: Math.random()*1000, value: 0},
      {id: Math.random()*1000, value: 0},
      {id: Math.random()*1000, value: 0},
      {id: Math.random()*1000, value: 0},
      {id: Math.random()*1000, value: 0}
    ]
  }

  handleDelete = (counterId) => {
const counters = this.state.counters.filter(counter => counter.id !== counterId)
this.setState({counters})
  }

  handleIncrement = counter => {
const counters = [...this.state.counters]
const index = counters.indexOf(counter)
counters[index].value++
this.setState({counters})
    }

    handleReset = () => {
      const counters = this.state.counters.map(counter => {
        counter.value = 0
        return counter
      })
this.setState({counters})
    }

    handleAdd = () => {
      let counters = [...this.state.counters]
      counters.push({id: Math.random()*1000, value:0})
      this.setState({counters})
    }

render() {

  return (
    <div className="App container-fluid">
<Navbar totalCounters={this.state.counters.length}/>
<Counters counters={this.state.counters} onReset={this.handleReset} onAdd={this.handleAdd} onDelete={this.handleDelete} onIncrement={this.handleIncrement}/>
    </div>
  );
}
}

export default App;
