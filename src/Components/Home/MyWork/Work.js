import React, { useEffect } from 'react';
import { Card } from 'react-bootstrap';
import Aos from 'aos'
import 'aos/dist/aos.css'
const Work = ({work}) => {
    useEffect(()=>{
        Aos.init({duration:4000})
    })
    const {name,picture,description,Technology,liveSite,codeLink} = work;
    return (
        <div className='col-md-6 mt-3' data-aos='fade-left'>
            <Card>
                <Card.Img src={picture} style={{height:'250px'}}></Card.Img>
                <Card.Header>
                    <Card.Title className='text-center text-success'>{name}</Card.Title>
                </Card.Header>
                <Card.Body>
                    <Card.Text className='text-justify'>{description}</Card.Text>
               <h6 className='text-dark'>Technology</h6>
               {
                   Technology.map(tech=><li>{tech}</li>)
               }
                </Card.Body>
                <Card.Footer className='text-center'>
                    <a href={liveSite} target="_blank">
                        Live Site
                        </a>
                        <a href={codeLink} className='ml-4' target="_blank">
                        Code
                        </a>
                        </Card.Footer>            </Card>
            
        </div>
    );
};

export default Work;