import React, { useEffect } from 'react';
import khida from '../../images/website/khida lagse.PNG'
import khida1 from '../../images/website/khida lagse1.PNG'
import khida2 from '../../images/website/khida lagse2.PNG'
import Repair from '../../images/website/repair.PNG'
import Repair1 from '../../images/website/repair admin.PNG'
import Repair2 from '../../images/website/repair admin2.PNG'
import programmer from '../../images/website/progrMMER.PNG'
import programmer1 from '../../images/website/progrMMER USER.PNG'
import programmer2 from '../../images/website/progrMMER Admin.PNG'
import travel from '../../images/website/ghuraghuri.PNG'
import travel1 from '../../images/website/ghuraghuri1.PNG'
import travel2 from '../../images/website/ghuraghuri2.PNG'
import rideShare from '../../images/website/vehicle services.PNG'
import rideShare1 from '../../images/website/vehicle services1.PNG'
import rideShare2 from '../../images/website/vehicle services2.PNG'
import sports from '../../images/website/Club Checker.PNG'
import sports1 from '../../images/website/Club Checker1.PNG'
import sports2 from '../../images/website/Club Checker2.PNG'
import Project from './Project';
import Navigation from '../Home/Navigation/Navigation';
import Footer from '../Home/Footer/Footer';
const projects = [
    {
        name:'Khida Lagse (A Restaurent Website)',
        description:['User Can Order Food','User Can see order list','Admin can add food and delete','Rider pick the food','User need to complete payment to place order','User find a google map to see vrider location'],
        Technology:['React JS','Node Js','Express Js','MongoDb','stripe','CSS','Bootstrap','Google Map','Firebase','Heroku'],
        image:khida,
        image1:khida1,
        image2:khida2,
        liveSite:'https://khidha-lagse.web.app/',
        codeLink:'https://github.com/sajid-rgb/restaurant-project'
 },
 {
    name:'Repaire House',
    description:['This is a MERN stack project','User Can Book any Services','User Can see booking lists and status','There 2 dashboard one for admin another for user','Admin can manage all the booking lists','Admin can add,delete and update the services','Admin and user must need authentication to access','User need to complete payment via card payment method'],
    Technology:['React Js','Node Js','Express Js','MongoDb','stripe','CSS','Bootstrap','Firebase','Heroku'],
    image:Repair,
    image1:Repair1,
    image2:Repair2,
    liveSite:'https://repair-house-70c7c.web.app/',
    codeLink:'https://github.com/sajid-rgb/Repair-house'
},
{
    name:'Programmer Library',
    description:['A responsive MERN stack project','Anyone can order book','Then see their order history','Admin can add books and delete book','Need authentication to access','All the data store in the firebase'],
    Technology:['React','Node Js','Express Js','MongoDb','CSS','Bootstrap','Firebase','Heroku','React Router','axios'],
    image:programmer,
    image1:programmer1,
    image2:programmer2,
    liveSite:'https://programmer-library.web.app/',
    codeLink:'https://github.com/sajid-rgb/Programmers-library'
},
{
    name:'Ghuraghuri.com',
    description:['If anyone want to travel he must visit this site','User must need authentication for travel','they can fill the form correctly'],
    Technology:['React','CSS','HTML','React bootstrap','Bootstrap','Firebase','netlify'],
    image:travel,
    image1:travel,
    image2:travel2,
    liveSite:'https://ghuraghuri-7faf0.web.app/',
    codeLink:'https://github.com/sajid-rgb/guraguri.com-with-react-and-firebase'
},
{
    name:'Vehicle Services',
    description:['This is an ride share website','User Can choose any of the vehicle for ride','Complete the checkout form','They see various option and google map after fill up the form'],
    Technology:['React','Google Map','React router','npm','CSS','Bootstrap','Firebase','React bootstrap'],
    image:rideShare,
    image1:rideShare1,
    image2:rideShare2,
    liveSite:'https://vehicle-services-1eb87.web.app/',
    codeLink:'https://github.com/sajid-rgb/vehicle-services'
},
{
    name:'Club Checker',
    description:['This is a club checker web site','User can see the english premier league clubs and their details','if user want to see their favoutite teams last 5 home match result they can see it '],
    Technology:['React','API','netlify','Firebase','Heroku','bbotstrap','react router','react bootstrap'],
    image:sports,
    image1:sports1,
    image2:sports2,
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