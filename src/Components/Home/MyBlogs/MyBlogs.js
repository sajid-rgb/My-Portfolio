import React from 'react';
import { Link } from 'react-router-dom';
import pic from '../../../images/maxresdefault.jpg'
import Blogs from './Blogs';
const blogs = [
    {
        name:'10 Javscript problem solve',
        description: 'This is an awesome blog. I wrote 10 basic javascript problem solve which must know. ',
        im:pic
    },
    {
        name:'10 Javscript problem solve',
        description: 'This is an awesome blog. I wrote 10 basic javascript problem solve which must know. ',
        im:pic
    },
    {
        name:'10 Javscript problem solve',
        description: 'This is an awesome blog. I wrote 10 basic javascript problem solve which must know. ',
        im:pic
    },
    {
        name:'10 Javscript problem solve',
        description: 'This is an awesome blog. I wrote 10 basic javascript problem solve which must know. ',
        im:pic
    }
]
const MyBlogs = () => {
    return (
        <div className="container mt-3">
            <h3 className="text-center text-info">MY BLOGS</h3>
            <hr style={{backgroundColor:'green'}}/>
            <div className="row container mx-auto">
                {
                    blogs.map(blog => <Blogs blog={blog}></Blogs>)
                }
            </div>
            <div className="text-center mt-4">
                <Link to='/blog' className="mt-3">See all....</Link>
            </div>
        </div>
    );
};

export default MyBlogs;