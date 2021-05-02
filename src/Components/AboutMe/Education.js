import React from 'react';

const Education = () => {
    return (
        <div className='container mt-5'>
            <h3 className="text-center mt-2 ">Educational Backgraound</h3>
            <hr style={{backgroundColor:'green'}}/>
          <div className='row'>
              <div className='col-md-4 mt-3'>
              <div className='shadow rounded' style={{backgroundColor:'whiteSmoke',padding:'5px'}}>
              <h5 className='mt-4'>Bachelor Degree</h5>
       <h6>Subject: Electrical And Electronic Engineering</h6>
       <h6>University of Chittagong</h6>
        <h6>2015-2019</h6>
              </div>
              </div>

              <div className='col-md-4 mt-3'>
              <div className='shadow rounded' style={{backgroundColor:'whiteSmoke',padding:'5px'}}>
              <h5 className='mt-4'>Higher Secondary</h5>
       <h6>Collage: Tamirul Millat Kamil Madrasah</h6>
       <h6>GPA: 5.00</h6>
       <h6>2013-2015</h6>
              </div>
              </div>

              <div className='col-md-4 mt-3'>
              <div className='shadow rounded' style={{backgroundColor:'whiteSmoke',padding:'5px'}}>
              <h5 className='mt-4'>High School</h5>
       <h6>School: Uttar Badda Islamia Kamil Madrasah</h6>
       <h6>GPA: 5.00</h6>
       <h6>2011-2013</h6>
              </div>
              </div>
          </div>
        </div>
        
    );
};

export default Education;