import React from 'react';
import ForCustomerReviews from '../../Hook/ForCustomerReviews/ForCustomerReviews';
import ReviewPage from '../ReviewPage/ReviewPage';

const Reviews = (props) => {
    const [reviews, setReviews] = ForCustomerReviews();
    return (
        <div>
            <h1 className='text-5xl font-bold mb-9 mt-8 '>Total Customer Reviews</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                {
                    reviews.map(review => <ReviewPage
                        review={review} >
                    </ReviewPage>)
                }
            </div>
        </div >
    );
};

export default Reviews;