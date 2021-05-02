import React, { useEffect } from 'react';
import { Card } from 'react-bootstrap';
import Aos from 'aos'
import 'aos/dist/aos.css'
const Work = ({work}) => {
    useEffect(()=>{
        Aos.init({duration:4000})
    })
    const {name,picture,description} = work;
    return (
        <div className='col-md-4 mt-3' data-aos='fade-left'>
            <Card>
                <Card.Img src={picture} style={{height:'250px'}}></Card.Img>
                <Card.Header>
                    <Card.Title className='text-center text-info'>{name}</Card.Title>
                </Card.Header>
                <Card.Body>
                    <Card.Text className='text-justify'>{description}</Card.Text>
                </Card.Body>
            </Card>
            
        </div>
    );
};

export default Work;