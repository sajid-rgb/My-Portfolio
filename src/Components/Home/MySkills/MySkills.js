import React from 'react';
const skills = [
    {
        name: 'React js'
    },
    {
        name: 'Node js'
    },
    {
        name: 'Express js'
    },
    {
        name: 'Mongodb'
    },
    {
        name: 'Bootstrap'
    },
    {
        name: 'CSS'
    },
    {
        name: 'HTML'
    },
    {
        name: 'Javascript'
    },
    {
        name: 'SASS'
    },
    {
        name: 'Redux'
    },
    {
        name: 'python'
    },
    {
        name: 'Material UI'
    },
    {
        name: 'Heroku'
    },
    {
        name: 'Firebase'
    },
    {
        name: 'Stripe'
    },
    {
        name: 'Google Map'
    },
    {
        name: 'React Native'
    },
    {
        name: 'React Router'
    },
    {
        name: 'React Bootstrap'
    },
    {
        name: 'C'
    },
]
const MySkills = () => {
    return (
       <div className="container mt-2">
            <h2 className="text-center text-dark mt-md-5 mt-2">MY SKILLS</h2>
            <hr style={{backgroundColor:'green'}}/>
            <div className="container row mx-auto mt-md-2 mt-0">
            {
                skills.map((skill,index) =><div className='col-md-3 col-6 text-center text-md-left'>
                     {
                         index%2==0 ? <button className="btn btn-info mt-3 w-100">{skill.name}</button>:<button className="btn btn-secondary w-100 mt-3">{skill.name}</button>
                    
                    
                     }
                    </div>)
            }
            
        </div>
       </div>
    );
};

export default MySkills;