import React from 'react';
import { Link } from 'react-router-dom';
import pic from '../../../images/maxresdefault.jpg'
import Blogs from './Blogs';
const blogs = [
    {
        name:'10 Javscript Problem I faced and solve',
        description: 'This is a blog published on medium . I wrote 10 basic javascript problem and solve it. ',
        im:pic
    },
    {
        name:'50 Javscript problem solve',
        description: 'This is an awesome blog. I wrote 50 basic javascript problem solve which must know. ',
        im:pic
    },
    {
        name:'Why React for developement?',
        description: 'This is an awesome blog. I wrote React basics information and why everyone must know.. ',
        im:pic
    },
    {
        name:'Python Or Javascript',
        description: 'This blog is written for programming purposes. Every Beginner must know which programming language is best for them. ',
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
        </div>
    );
};

export default MyBlogs;