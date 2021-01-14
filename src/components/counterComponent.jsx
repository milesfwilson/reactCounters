import React, { Component } from 'react';


class Counter extends Component {


  render() { 

    return(

      <div className="row">
        <div className="col-12 d-flex justify-content-center">
        <div className="d-flex justify-content-around text-center">

      <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-primary btn-sm m-2">Increment</button>
      <h3 className={this.getBadgeClass()}>
        {this.formatCount()}
      </h3>
      <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-small m-2">Delete</button>

    </div>
        </div>
      </div >
    
    )
  }
formatCount(){
  const { value } = this.props.counter
  return value === 0 ? "Zero" : value;
}

getBadgeClass() {
  let classes = "badge m-2 badge-"
  classes += (this.props.counter.value === 0 ? 'warning' : 'primary')
  return classes

}

}
 
export default Counter;