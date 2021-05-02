import React from 'react';
import my2 from '../../../images/my2.jpg'
const About = () => {
    return (
        <div className="row mx-auto container mt-5">
            <div className="col-md-6">
                <img src={my2} className='img-fluid rounded'/>
            </div>
            <div className="col-md-6 d-flex flex-column align-content-center justify-content-center">
                <h3 className="text-danger ml-3">About Me</h3>
                <p className="text-muted text-justify ml-3">I am a hard worker web developer. More than 6 months i am working on it.  I have more  than 10 mern stack projects. I always try to learn new things and want to join a company where i can learn more from team members. I love my work. Always fit for any situation and any works.</p>
                <a href='https://drive.google.com/uc?export=download&id=1nCi97opCJlF_s-GphNvO0RB3gCXewvzb' download>
                <button className='btn btn-success w-75 ml-5'>Download Resume</button>
                </a>
            </div>
            
        </div>
    );
};

export default About;