import React from 'react';
import images from '../../Breakfast/breakfast1.png'
import './Foods.css'
const Foods = (props) => {

const {img,userId,id,title}=props.food;
return (
<div className='products'>
<div className="card" style={{width: "20rem" , border: "none" }}>
<div className="imageOfFoods">
<img className="card-img-top" src={require(`../../${img}`)} alt="Card image cap"/>
</div>
<div className="card-body" style={{height: "8rem"}}>
<p className="card-text">Price: ${id}</p>
<p className="card-text">{title}</p>
</div>
</div>
</div>
);
};
export default Foods;