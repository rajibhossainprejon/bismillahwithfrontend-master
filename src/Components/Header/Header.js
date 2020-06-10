import React, { useState } from 'react';
import './Header.css'
import data from '../../fakeData/fakeData';
import Foods from '../Foods/Foods';
import Lunch from '../Lunch/Lunch';
import Dinner from '../Dinner/Dinner'
const Header = () => {
    const [foods, setFoods] = useState(data);
    

    
    return (
        <div className="body ">
            <section className="header ">
                <h1>Welcome to Our Retaurant</h1>
                <img src="../../" alt=""/>
                <div className="row justify-content-center">
                        <div className="col-12 col-md-10 col-lg-8">
                            <form className="card card-sm">
                                <div className="card-body row no-gutters align-items-center">
                                    <div className="col-auto">
                                        <i className="fas fa-search h4 text-body"></i>
                                    </div>
                                 
                                    <div className="col">
                                        <input className="form-control form-control-lg form-control-borderless" type="search" placeholder="Search "/>
                                    </div>
                               
                                    <div className="col-auto">
                                        <button className="btn btn-lg btn-danger" type="submit">Search</button>
                                    </div>
                                    
                                </div>
                            </form>
                        </div>
                       
</div>
            </section >
            
                <section className='foods'>
                <nav>
                <a href="/breakfast" className='anchor'>Breakfast</a>
                <a href="/lunch" className='anchor'>Lunch</a>
                <a href="/dinner" className='anchor'>Dinner</a>
                
            </nav>
                
          {
                foods.map(fd=>fd.userId===1 &&
                   <Foods food={fd}></Foods>
                    )

             }

            
                    
             
          
                </section>
                <section>

                </section>
            
        </div>
    );
};

export default Header;