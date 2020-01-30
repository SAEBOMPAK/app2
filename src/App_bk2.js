import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("hello");
  }
  state = { 
    count : 0
  }
   // state는 object임
  add = () => {
    // this.setState({ count: this.state.count + 1});  //<-setState안에서 this.state쓰는거 별로임
    //  current state를 가져오도록 펑션을 씀
    this.setState( current => ({ count: current.count + 1}));
  };
  minus = () => {
    this.setState( current => ({ count: current.count - 1}));
  };
  componentDidMount() {
    console.log("component rendered");
  }
  //componentDidMount: render 를 하면 호출되는 life cycle method
  componentDidUpdate() {
    console.log("I just updated");
  }
  render (){
    console.log("I am rendering");
    return (
      <div>
        <h1>The number is : {this.state.count}</h1>
        <button onClick={this.add}>Add</button> {/* this.add()가 아닌이유: ()는 바로 실행할때만 붙임. 여기서는 클릭후 실행해야하므로 ()안씀 */}
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}



export default App;