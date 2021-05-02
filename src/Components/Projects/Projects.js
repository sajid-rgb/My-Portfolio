import React, { useEffect } from 'react';
import khida from '../../images/website/khida lagse.PNG'
import Repair from '../../images/website/repair.PNG'
import programmer from '../../images/website/progrMMER.PNG'
import travel from '../../images/website/ghuraghuri.PNG'
import rideShare from '../../images/website/vehicle services.PNG'
import sports from '../../images/website/Club Checker.PNG'
import Project from './Project';
import Navigation from '../Home/Navigation/Navigation';
import Footer from '../Home/Footer/Footer';
const projects = [
    {
        name:'Khida Lagse (A Restaurent Website)',
        description:['User Can Order Food','User Can see order list','Admin can add food and delete','Rider pick the food','User need to complete payment to place order','User find a google map to see vrider location'],
        Technology:['React JS','Node Js','Express Js','MongoDb','stripe,CSS','Bootstrap','Google Map','Firebase','Heroku'],
        image:khida,
        liveSite:'https://khidha-lagse.web.app/',
        codeLink:'https://github.com/sajid-rgb/restaurant-project'
 },
 {
    name:'Repaire House',
    description:['This is a MERN stack project','User Can Book any Services','User Can see booking lists and status','There 2 dashboard one for admin another for user','Admin can manage all the booking lists','Admin can add,delete and update the services','Admin and user must need authentication to access','User need to complete payment via card payment method'],
    Technology:['React Js','Node Js','Express Js','MongoDb','stripe,CSS','Bootstrap','Firebase','Heroku'],
    image:Repair,
    liveSite:'https://repair-house-70c7c.web.app/',
    codeLink:'https://github.com/sajid-rgb/Repair-house'
},
{
    name:'Programmer Library',
    description:['A responsive MERN stack project','Anyone can order book','Then see their order history','Admin can add books and delete book','Need authentication to access','All the data store in the firebase'],
    Technology:['React','Node Js','Express Js','MongoDb','CSS','Bootstrap','Firebase','Heroku','React Router','axios'],
    image:programmer,
    liveSite:'https://programmer-library.web.app/',
    codeLink:'https://github.com/sajid-rgb/Programmers-library'
},
{
    name:'Ghuraghuri.com',
    description:['If anyone want to travel he must visit this site','User must need authentication for travel','they can fill the form correctly'],
    Technology:['React','CSS','HTML','React bootstrap','Bootstrap','Firebase','netlify'],
    image:travel,
    liveSite:'https://ghuraghuri-7faf0.web.app/',
    codeLink:'https://github.com/sajid-rgb/guraguri.com-with-react-and-firebase'
},
{
    name:'Vehicle Services',
    description:['This is an ride share website','User Can choose any of the vehicle for ride','Complete the checkout form','They see various option and google map after fill up the form'],
    Technology:['React','Google Map','React router','npm','CSS','Bootstrap','Firebase','React bootstrap'],
    image:rideShare,
    liveSite:'https://vehicle-services-1eb87.web.app/',
    codeLink:'https://github.com/sajid-rgb/vehicle-services'
},
{
    name:'Club Checker',
    description:['This is a club checker web site','User can see the english premier league clubs and their details','if user want to see their favoutite teams last 5 home match tresult they can see it '],
    Technology:['React','API','netlify','Firebase','Heroku','bbotstrap','react router','react bootstrap'],
    image:sports,
    liveSite:'https://vigorous-edison-d71324.netlify.app/',
    codeLink:'https://github.com/sajid-rgb/Club-checker'
}
]
const Projects = () => {
   
    return (
        <div>
            <Navigation></Navigation>
            <div className="mx-auto row container" >
                {
                    projects.map(project=><Project project={project}></Project>)
                }
            </div>
            <div className="">
                <Footer></Footer>
            </div>
            
        </div>
    );
};

export default Projects;