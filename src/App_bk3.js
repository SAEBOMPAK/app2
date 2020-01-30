import React from 'react';


class App extends React.Component {
  state = {
    isLoading : true,
    movies : []
  };
  // state안에 꼭 미래에 사용할것에 대해 미리 선언할 필요는 없음 = setState를 사용할때 state안에 default 값을 선언할 필요는 없음
  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false});
    }, 6000);
  }
  // componentDidMount 에서 data를 fetch할것임 -> 그후에 movie를 render하고 map을 만듬
  render() {
    const { isLoading } = this.state; 
    // this.state.isLoading 하기가 귀찮으니까 위와같이 선언. ES6 속성이라고함
    return <div>{isLoading ? "Loading" : "We are ready"}</div>;
    // javascript ternary operator(삼항 연산자) 만약 isLoading 이 true면 "Loading"을 보여주고 아니면 "we are ready"를 보여줌
  }
}



export default App;