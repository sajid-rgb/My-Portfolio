import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Home/Footer/Footer';
import MyBlogs from '../Home/MyBlogs/MyBlogs';
import Navigation from '../Home/Navigation/Navigation';

const Blogs = () => {
    return (
        <div>
            <Navigation></Navigation>
            <MyBlogs></MyBlogs>
            <h4 className='text-center text-dark mt-5'>Comming Soon......</h4>
            <Footer></Footer>
        </div>
    );
};

export default Blogs;