import React from 'react';
import PropTypes from 'prop-types';

function Food( {name, picture, rating} ) {
  return (
    <div>
      <h2>I like { name }</h2>
      <h4>{ rating }/5.0</h4>
      <img src={picture} alt={name} title={name} />
    </div>
  );
}

Food.propTypes = {
 name: PropTypes.string.isRequired,
 picture: PropTypes.string.isRequired,
 rating: PropTypes.number
};
//description of the probs that I want to get


const foodILike = [
  {
    id: 1,
    name: "pizza",
    image: "https://langara.ca/_files/images/homepage/2019-layout/carousel/lunar-new-year-slider.jpg",
    rating : 5
  },
  {
    id: 2,
    name: "langara",
    image: "https://langara.ca/_files/images/homepage/2019-layout/carousel/bell-lets-talk.jpeg",
    rating : 3
  }
];

function App() {
  return (
    <div>
      {foodILike.map(dish => (  //여기서 dish는 object임
        <Food 
        key={dish.id} 
        name={dish.name} 
        picture={dish.image} 
        rating={dish.rating} />
      ))}
    </div>
  );
}

export default App;