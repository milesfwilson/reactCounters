import React, { Component } from 'react';
import Counter from './counterComponent'
class Counters extends Component {
  
  render() { 
    return ( 
      <div>
        <div className="row">
<div className="col-12 d-flex justify-content-center">

<button onClick={this.props.onReset} className="btn btn-primary btn-small m-2">Reset</button> 
<button onClick={this.props.onAdd} className="btn btn-success btn-small m-2">Add</button>
</div>
        </div>

{this.props.counters.map(counter =>  
<Counter key={counter.id}  onIncrement={this.props.onIncrement} onDelete={this.props.onDelete} counter={counter}/>)}


      </div>
     );
  }
}
 

export default Counters;