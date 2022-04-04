import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ForCustomerReviews from '../../Hook/ForCustomerReviews/ForCustomerReviews';
import ReviewPage from '../ReviewPage/ReviewPage';

const CustomerReview = () => {
    const [reviews, setReviews] = ForCustomerReviews();
    return (
        <div>
            <h1 className='text-5xl font-bold mb-9 '>Customer Review</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                {
                    reviews.slice(0, 3).map(review => <ReviewPage
                        review={review}>
                    </ReviewPage>)
                }
            </div>
            <button className=' border-2 px-12 py-3 text-xl font-bold text-white bg-lime-700 mt-10 mb-8' >
                <Link to="/reviews"> Customer Reviews</Link> </button>
        </div >
    );
};

export default CustomerReview;