import React, { useState } from 'react';
import Contact from '../../Contact/Contact';
import emailjs from 'emailjs-com';
import './ContactMe.css'
import { Link } from 'react-router-dom';
const ContactMe = () => {
    const id = 'service_jq8tc1o'
    const tid ='template_6p5jj2w'
    const [isContact,setIsContact] = useState(false)
    const handleContact = () =>{
        setIsContact(true)
    }
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm(id, tid, e.target, 'user_RApS15E2KzJjHIACJtgcM')
          .then((result) => {
              console.log(result);
              alert('Successfully Send message')
              e.target.value = ''
          }, (error) => {
              console.log(error.text);
          });
      }
    
    return (
        <div className="text-center">
            <div className="text-center d-flex align-items-center justify-content-center mt-5 ">
                {
                    isContact === false ? <div className='mt-3 shadow rounded p-2 contact-pop-up' style={{border:"2px solid grey",textAlign:"center"}}> 
                        <h3 className="btn btn-default">Do you want to contact with me?</h3>
                <button onClick={handleContact} className="btn btn-danger">YES</button>
                <button  className="btn btn-secondary ml-3" as={Link}to="/">NO</button>
                    </div>: <div className="contact-pop-up" style={{border:"2px solid grey",textAlign:"center",backgroundColor:"whiteSmoke"}}>
                     <button className="btn btn-secondary mt-3 mb-3" onClick={()=>setIsContact(false)} >Close</button>

                    </div>
                }
            </div>
               {
                   isContact && <Contact sendEmail={sendEmail}></Contact>
               }

        </div>
    );
};

export default ContactMe;