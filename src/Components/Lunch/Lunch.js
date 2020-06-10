import React from 'react';
import images from '../../Breakfast/breakfast1.png'

const Lunch = (props) => {
    const {userId,id,title}=props.food;
    return (
        <div>
           <div className='products'>
       <div className="card" style={{width: "20rem" , border: "none" }}>
 <div className="imageOfFoods">
 <img className="card-img-top" src={images} alt="Card image cap"/>
 </div>
  <div className="card-body" style={{height: "8rem"}}>
    <p className="card-text">Price: ${id}</p>
    <p className="card-text">{title}</p>
  </div>
</div>
        </div>
        </div>
    );
};

export default Lunch;