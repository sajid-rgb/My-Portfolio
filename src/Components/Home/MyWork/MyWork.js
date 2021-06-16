import React from 'react';
import { Link } from 'react-router-dom';
import avatar3 from '../../../images/scale.jpg'
import khida from '../../../images/website/khida lagse.PNG'
import programmer from '../../../images/website/progrMMER.PNG'
import repair from '../../../images/website/repair.PNG'
import rideShare from '../../../images/website/vehicle services.PNG'
import Work from './Work';
const works = [
    {
        name:'Khida Lagse (A Restaurent Website)',
        picture: khida,
        Technology:['React JS','Node Js','Express Js','MongoDb','stripe,CSS','Bootstrap','Google Map','Firebase','Heroku'],
        liveSite:'https://khidha-lagse.web.app/',
        description:'A single page responsive restaurant website where user can order their favourite food at any time.User should complete payment by card payment method. In admin pannel admin can add and delete foods.',
        codeLink:'https://github.com/sajid-rgb/restaurant-project'
    },
    {
        name:'Programmer Library',
        picture: programmer,
        description:'This is a Book Shop website where user can buy any programming books. There are two dashboard in the website, one for admin and another for user. User can order book and find orders list at any time. Admin can  add,delete and modify the books.',
        Technology:['React','Node Js','Express Js','MongoDb','CSS','Bootstrap','Firebase','Heroku','React Router'],
          liveSite:'https://programmer-library.web.app/',
          codeLink:'https://github.com/sajid-rgb/Programmers-library'
    },
    {
        name:'Repair House',
        picture: repair,
        Technology:['React Js','Node Js','Express Js','MongoDb','stripe,CSS','Bootstrap','Firebase','Heroku'],
    liveSite:'https://repair-house-70c7c.web.app/',
        description:'A single page responsive electronic repair shop website where user can book any service at any time. User can book any services and also find their order list in dashboard. Admin can add,delete and modify any services.',
        codeLink:'https://github.com/sajid-rgb/Repair-house'
    },
    {
        name:'Vehicle Services',
        description: 'Vehicle services is a single page responsive website where user can find any vehicle for ride if they want. User must fill up an address form and find location in google map. They will see Various vehicle in their UI.',
        Technology:['React','Google Map','React router','npm','CSS','Bootstrap','Firebase','Router dom'],
        picture:rideShare,
        liveSite:'https://vehicle-services-1eb87.web.app/',
        codeLink:'https://github.com/sajid-rgb/vehicle-services'
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