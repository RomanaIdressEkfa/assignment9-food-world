import React from 'react';
import logo from '../../images/food1.png'
import CustomerReview from '../CustomerReview/CustomerReview';


const Home2 = () => {
    return (
        <div>
            <div className='inline-flex m-20 '>
                <div>
                    <h1 className='text-5xl font-bold mb-9 '>This is Food World</h1>
                    <p className='text-xl'>Food is the basic necessity of man. It is a mixture of different nutrients such as carbohydrate, protein, fat, vitamins and minerals. These nutrients are essential for growth, development, and maintenance of good health throughout life.
                    </p>
                    <button className=' border-2 px-12 py-3 text-xl font-bold text-white bg-lime-700 mt-10'>Click Button</button>
                </div>

                <div >
                    <img className='rounded' src={logo} alt="" />
                </div>
            </div>
            <CustomerReview></CustomerReview>
        </div>


    );
};

export default Home2;