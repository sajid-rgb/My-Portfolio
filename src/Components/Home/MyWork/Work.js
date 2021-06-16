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
                    <Card.Title className='text-center text-dark'>{name}</Card.Title>
                </Card.Header>
                <Card.Body>
                    <Card.Text className='text-justify'>{description}</Card.Text>
               <h6 className='text-dark'>Technology</h6>
               <div className='row'>
               {
                   Technology.map(tech=><div className='col-6 col-md-4'>
                       <button className='btn w-100 btn-secondary mt-3'>{tech}</button>
                   </div>)
               }
               </div>
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