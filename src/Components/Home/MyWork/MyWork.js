import React from 'react';
import { Link } from 'react-router-dom';
import avatar3 from '../../../images/scale.jpg'
import khida from '../../../images/website/khida lagse.PNG'
import programmer from '../../../images/website/progrMMER.PNG'
import repair from '../../../images/website/repair.PNG'
import Work from './Work';
const works = [
    {
        name:'Khida Lagse',
        picture: khida,
        description:'A single page responsive resturant website where user can order their favourite food any time'
    },
    {
        name:'Prorammer Library',
        picture: programmer,
        description:'A single page responsive Book Shop website where user can buy any programming books'
    },
    {
        name:'Repair House',
        picture: repair,
        description:'A single page responsive electronic repair shop website where user can book any service at any time'
    }
]
const MyWork = () => {
    return (
        <div className="mb-1 container">
            <h2 className="text-center mt-5 mb-1 text-primary">MY LATEST WORK</h2>
            <hr style={{backgroundColor:'green'}}/>
            <div className="row container mx-auto mt-5  mb-1">
            {
                works.map(work =><Work work={work}></Work>)
            }
        </div>
        <div className="text-center">
            <Link to="/work">See more...</Link>
        </div>
        </div>
    );
};

export default MyWork;