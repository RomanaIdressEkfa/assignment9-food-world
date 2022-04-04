import React from 'react';

const ReviewPage = (props) => {
    const { name, comment, rating, picture } = props.review;
    return (
        <div className='mt-8 shadow-lg '>
            <div className=' m-8 p-8 '>
                <div className='flex items-center'>
                    <img className='w-16 h-16 rounded-full' src={picture} alt="" />
                    <h1 className='font-bold text-xl ml-2'>Name: {name}</h1>
                </div>
                <p className='font-semibold'>Comment: {comment}</p>
                <p className='font-bold' >Ratings: {rating} <i className='fas fa-star text-yellow-400'></i>
                    <i className='fas fa-star text-yellow-400'></i>
                    <i className='fas fa-star text-yellow-400'></i>
                    <i className='fas fa-star text-yellow-400'></i>
                    <i className='fas fa-star text-yellow-400'></i></p>
            </div>
        </div>
    );
};

export default ReviewPage;