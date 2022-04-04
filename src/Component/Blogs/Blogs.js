import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className=' p-4 shadow-md'>
                <h1 className='text-3xl font-bold mt-5'>What is Context API?</h1>
                <p className=' mt-5 '>
                    React Context API is a method of creating global variables for a React app. This allows us to pass data through the component tree, enabling our components to share information across different levels and which helps solve prop-drilling solutions from all levels of your application. The issue is also referred to as a simple, easy way to manage the state using Redox.</p>
            </div>

            <div className=' p-4 mt-6 shadow-md'>
                <h1 className='text-3xl font-bold mt-5'>What is the difference between Inline,Block and Inline-Block element?</h1>
                <p className=' mt-5 '>
                    Inline:  The inline element will not start on a new line and will only occupy its required width. You cannot set width or height.The inline elements here are span, img, a, strong, i, small.
                    <br />
                    Block:  The block element will always start in a new line and it will occupy the whole width and you can set the width and height values ​​as you wish.The block elements here are div, h1, p, li, section.
                    <br />
                    Inline-Block:  The inline-block component is the same as the inline component, where it does not start on a new line. But, here you can set width and height values.
                </p>

            </div>
        </div>
    );
};

export default Blogs;