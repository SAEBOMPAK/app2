import React from 'react';
import axios from 'axios';
import Movie from './Movie';
import './App.css';

class App extends React.Component {
  state = {
    isLoading : true,
    movies : []
  };
  // state안에 꼭 미래에 사용할것에 대해 미리 선언할 필요는 없음 = setState를 사용할때 state안에 default 값을 선언할 필요는 없음
  getMoives = async () => {   //비동기함수. axios 가 끝날때까지 기다렸다가 계속하라는뜻
    // const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    // console.log(movies.data.data.movies); //movies.data....이거 너무 길어서 아래같이 바꿈 ES6
    const {
      data: { 
        data: { movies } 
      } 
  } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    this.setState( {movies, isLoading : false} );
  }

  componentDidMount() {
    this.getMoives();
  }
  // componentDidMount 에서 data를 fetch할것임 -> 그후에 movie를 render하고 map을 만듬
  render() {
    const { isLoading, movies } = this.state; 
    // this.state.isLoading 하기가 귀찮으니까 위와같이 선언. ES6 속성이라고함
    //return <div>{isLoading ? "Loading" : "We are ready"}</div>;
    // javascript ternary operator(삼항 연산자) 만약 isLoading 이 true면 "Loading"을 보여주고 아니면 "we are ready"를 보여줌
    return (
    <section className="container">
      {isLoading ? (
        <div className="loader">
          <span className="loader_text">Loading...</span>
        </div>
      ) : (
        <div className="movies">
        {movies.map(movie => (   //map 펑션 안에는 꼭 key 가 있어야 함 
        <Movie 
          key={movie.id}
          id={movie.id} 
          year={movie.year} 
          title={movie.title} 
          summary={movie.summary} 
          poster={movie.medium_cover_image} 
          genres={movie.genres}
          />
        ))}
        </div>
      )}
    </section>
    );
    //loading 끝난후 movie map으로 내용보여줌
  }
}



export default App;