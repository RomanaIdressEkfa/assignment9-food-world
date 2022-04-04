import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <nav className='text-xl font-medium ms-4 bg-gray-200 p-4'>
            <Link className='mx-7' to="/Home2">Home</Link>
            <Link className='mx-7' to="/reviews">Reviews</Link>
            <Link className='mx-7' to="/dashboard">Dashboard</Link>
            <Link className='mx-7' to="/blogs">Blogs</Link>
            {/* <Link className='mx-7' to="/about">About</Link> */}
        </nav>


    );
};

export default Home;