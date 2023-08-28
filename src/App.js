import React from 'react';
import Potato from './Potato';
import PropTypes from 'prop-types';

//function Food(props){ 
//  return <h1>I like {props.fav}</h1>;
//}

//function Food({fav}){ 
  //{fav} = props;
//  return <h1>I like {fav}</h1>;   //여러개의 컴포넌트 값이 다른 fav props를 전달
//}

function Food({name, picture, rating}){ 
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>

  ); 
}

const foodILike = [
    {id :1,
      name:'kimchi',
      image:'https://yunseofood.com/data/goods/1/2022/05/40476_temp_16514161634099view.jpg',
      rating: 5,
    },
    {id:2,
      name:'ramen',
      image:'https://img.hankyung.com/photo/201902/AA.18901823.1.jpg',
      rating: 4.9,
    },
    {id:3,
      name:'samgiopsal',
      image:'https://t3.ftcdn.net/jpg/05/00/83/40/360_F_500834060_MDelPQsZd5hLN7NPm6u5ECadZ3O9l8P2.jpg',
      rating: 4.5,
    },
    {id:4,
      name:'bibimbap',
      image:'https://t4.ftcdn.net/jpg/05/14/61/81/360_F_514618189_sq7oLxZODqeOzH1yrHDL9kFepHqnB8Ft.jpg',
      rating: 3.8,
    }
];


//function renderFood(dish){
//    return <Food name={dish.name} picture={dish.image}/>;
//}

// const renderFood = dish => <Food name={dish.name} picture={dish.image}/>;

function App() {
  return(
     <div>
      <h1>MULTI Food!!!</h1>
      <Potato />

      {/* {foodILike.map(dish => (renderFood))} 오류코드! */}

      {/* {foodILike.map(dish => (<Food name={dish.name} picture={dish.image}/>))}  */}

      {foodILike.map(dish => (<Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>))}

      {/* <Food fav="kimchi" something={true} arr={[1,2,3,4,"food"]}/> */}

      {/* <Food fav="kimchi"/> 
      <Food fav="ramen"/> 
      <Food fav="samgiopsal"/> 
      <Food fav="chukumi"/> */}

     </div>
     );
}

export default App;
