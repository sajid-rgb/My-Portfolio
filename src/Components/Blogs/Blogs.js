import React from 'react';
import Footer from '../Home/Footer/Footer';
import MyBlogs from '../Home/MyBlogs/MyBlogs';
import Navigation from '../Home/Navigation/Navigation';

const Blogs = () => {
    return (
        <div>
            <Navigation></Navigation>
            <MyBlogs></MyBlogs>
            <Footer></Footer>
        </div>
    );
};

export default Blogs;