import React from 'react';
import About from '../Home/About/About';
import ContactMe from '../Home/ContactMe/ContactMe';
import Footer from '../Home/Footer/Footer';
import MySkills from '../Home/MySkills/MySkills';
import Navigation from '../Home/Navigation/Navigation';
import Education from './Education';

const AboutMe = () => {
    return (
        <div>
            <Navigation></Navigation>
            <About></About>
            <MySkills></MySkills>
            <Education></Education>
            <ContactMe></ContactMe>
            <Footer></Footer>
        </div>
    );
};

export default AboutMe;