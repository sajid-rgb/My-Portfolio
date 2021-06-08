import React, { useEffect } from 'react';
import my from '../../../images/my.jpg'
import Typical from 'react-typical'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom';
import { faFacebookMessenger, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const HomeMain = () => {
    useEffect(()=>{
        Aos.init({duration:2000})
    })
    return (
        <div className="row mx-auto container mt-5 mb-4 ">
            <div className="col-md-6 mt-5 order-12 order-md-0 " data-aos='fade-right'>
                <h3 className="ml-0 text-muted">Hello, My Name is Sajid</h3>
                 <div className="d-flex">
                 <h2 className="ml-0 text-info d-flex">I'm a
                 <span className="ml-3"><Typical
        steps={['Designer', 1000, 'Developer', 1000, 'Programmer', 1000]}
        loop={Infinity}
        wrapper="p"
      /></span>
                 </h2>
                 </div>
                 <p className="text-dark">I am a professional MERN Stack developer. I am hard Worker,love to work and l always want to learn new things.</p>
                 <Link to='/work' className="">
                 <button className=" btn btn-success rounded mr-3 ml-0">My Work</button>
                 </Link>
                 <a href='https://www.linkedin.com/authwall?trk=gf&trkInfo=AQHXbkc8bg8hJgAAAXkqIfDQ2zZ43PQqpC2LiEOr4k45zhOMWgU0psHjhgUgkJOUqBV5vTste6_wIqFbq-_83nySwo1Xy7Gr1JTrTAYUTw1mWDvTwdeNSRpfSDXGhoS_iSJ6I2U=&originalReferer=https://www.google.com/&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fmd-sajidur-rahman-a10b8895%2F' target='_blank'>
                 <button className=" btn btn-primary ml-0">Hire Me</button>
                 </a>
                 <div className="ml-0 mt-3">
                      <a href="https://github.com/sajid-rgb" target="_blank"><FontAwesomeIcon icon={faGithub} style={{color:'black',marginLeft:'10px',fontSize:'50px'}}></FontAwesomeIcon></a>
                    <a href='https://www.linkedin.com/authwall?trk=gf&trkInfo=AQHXbkc8bg8hJgAAAXkqIfDQ2zZ43PQqpC2LiEOr4k45zhOMWgU0psHjhgUgkJOUqBV5vTste6_wIqFbq-_83nySwo1Xy7Gr1JTrTAYUTw1mWDvTwdeNSRpfSDXGhoS_iSJ6I2U=&originalReferer=https://www.google.com/&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fmd-sajidur-rahman-a10b8895%2F' target="_blank"><FontAwesomeIcon icon={faLinkedin} style={{color:'green',fontSize:'50px',marginLeft:'15px'}}></FontAwesomeIcon></a>
                    <a href='https://www.facebook.com/sajid.chowdhury.180' target="_blank"><FontAwesomeIcon icon={faFacebookMessenger} style={{fontSize:'50px',marginLeft:'15px',color:'blue'}}></FontAwesomeIcon></a>

                      </div>
                
            </div>
            <div className="col-md-6 mt-3 mt-md-0" data-aos='zoom-in-down'>
                <img src={my} className="img-fluid rounded-circle"/>
            </div>
            
        </div>
    );
};

export default HomeMain;