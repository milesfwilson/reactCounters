import React, { Component } from 'react'; 
class Navbar extends Component {

  render() { 
    return (  
      <div className="row bg-dark text-light py-2">
        <div className="col-12 d-flex justify-content-between">
<h3 className="my-auto">
  Total Counters {this.props.totalCounters}
</h3>

<p className="my-auto">
  Test
</p>
        </div>
      </div>
    );
  }
}
 
export default Navbar;