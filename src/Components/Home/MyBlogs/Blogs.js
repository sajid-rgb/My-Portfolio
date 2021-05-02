import React from 'react';
import { Card } from 'react-bootstrap';

const Blogs = ({blog}) => {
    const {name,description,im} = blog;
    console.log(blog);
    return (
        <div className='col-md-6 mt-4'>
            <div>
            <Card>
                    
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>{description}</Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default Blogs;