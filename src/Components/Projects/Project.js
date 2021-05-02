import React, { useEffect } from 'react';
import Aos from 'aos'
import 'aos/dist/aos.css'
const Project = ({project}) => {
    const {name, description,image,Technology,liveSite}= project
    useEffect(()=>{
        Aos.init({duration:2000})
    })
    return (
        <div className=' text-center mt-5 mb-5' >
            
            <div className='row  rounded shadow' style={{backgroundColor:'whitesmoke'}} data-aos='flip-left'>
            <div className='col-md-5 d-flex align-items-center justify-content-center' >
            <img src={image} className="img-fluid mt-5"/>
            </div>
            <div className='col-md-7 mt-4 mb-4'>
            <h5 className='mt-4'>{name}</h5>
            <h3 className="text-info">Features</h3>
             <div className='text-justify d-flex align-items-center justify-content-center flex-column mt-3 ml-5 ml-md-0'>
                 <div>
                 {
                     description.map(des=><li>{des}</li>)
                 }
                 </div>
             </div>
             <div >
             <h4 className='mt-3 mb-1' >Techology Used</h4>
             <div className="row">
             {
                 Technology.map(tech=><div className='col-md-4 col-6'>
                   <div className='ml-5'>
                   <button className="btn btn-secondary mt-3 w-100">{tech}</button> </div>

                     </div>)
             }
             </div>
             </div>
            <div className="mt-2" >
            <a href={liveSite} target="_blank" className="mt-5">Live Site</a>
            </div>
            </div>
            </div>
        </div>
    );
};

export default Project;