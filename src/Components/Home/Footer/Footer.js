import { faFacebookMessenger, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Footer = () => {
    return (
        <div className="bg-dark " style={{height: '290px'}}>
           <div className="mt-5 ">
           <div className="d-flex align-items-center justify-content-center mt-5">
               <h6 className="text-white text-center mt-5">Address: Banasree, Rampura, Dhaka</h6>
               </div> 
               <div style={{lineHeight:'15px'}}>
                   <p className="text-white text-center">contact me via email msrchk@gmail.com</p>
                    <p className="text-white text-center">Or</p>
                    <p className="text-white text-center">phone 01767589086</p>

                      <div className="d-flex align-content-center justify-content-center">
                      <a href="https://github.com/sajid-rgb" target="_blank"><FontAwesomeIcon icon={faGithub} style={{color:'white',marginLeft:'10px',fontSize:'30px'}}></FontAwesomeIcon></a>
                    <a href='https://www.linkedin.com/authwall?trk=gf&trkInfo=AQHXbkc8bg8hJgAAAXkqIfDQ2zZ43PQqpC2LiEOr4k45zhOMWgU0psHjhgUgkJOUqBV5vTste6_wIqFbq-_83nySwo1Xy7Gr1JTrTAYUTw1mWDvTwdeNSRpfSDXGhoS_iSJ6I2U=&originalReferer=https://www.google.com/&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fmd-sajidur-rahman-a10b8895%2F' target="_blank"><FontAwesomeIcon icon={faLinkedin} style={{color:'green',fontSize:'30px',marginLeft:'10px'}}></FontAwesomeIcon></a>
                    <a href='https://www.facebook.com/sajid.chowdhury.180' target="_blank"><FontAwesomeIcon icon={faFacebookMessenger} style={{fontSize:'30px',marginLeft:'10px',color:'blue'}}></FontAwesomeIcon></a>

                      </div>
                      <hr style={{backgroundColor:'grey'}}/>
                      <div className="align-items-center justify-content-center">
                         <p className="text-white text-center"> copryright@2021 sajid chowdhury</p>
                      </div>

                                           </div> 
           </div>
        </div>
    );
};

export default Footer;