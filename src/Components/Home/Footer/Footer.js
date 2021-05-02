import React from 'react';

const Footer = () => {
    return (
        <div className="bg-dark " style={{height: '200px'}}>
           <div className="mt-5">
           <div className="d-flex align-items-center justify-content-center mt-5">
               <h4 className="text-white text-center mt-5">Adress: Bansree, Rampura, Dhaka</h4>
               </div> 
               <div style={{lineHeight:'15px'}}>
                   <p className="text-white text-center">You can contact me via email msrchk@gmail.com</p>
                    <p className="text-white text-center">Or</p>
                    <p className="text-white text-center">By phone 01767589086</p>
                   </div> 
           </div>
        </div>
    );
};

export default Footer;