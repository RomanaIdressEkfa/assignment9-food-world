import React from 'react';

const Review = (props) => {
    const { name, comment, rating, picture } = props.review;
    return (
        <div className='mt-8 shadow-lg '>
            <div className=' m-8 p-8 '>
                <img className='w-16 h-16 rounded-full' src={picture} alt="" />
                <h1 className='font-bold text-xl'>Name: {name}</h1>
                <p className='font-semibold'>Comment: {comment}</p>
                <p className='font-bold' >Ratings: {rating}</p>
            </div>


        </div>

    );
};

export default Review;