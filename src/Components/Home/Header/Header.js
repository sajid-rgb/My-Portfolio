import React from 'react';
import HomeMain from '../HomeMain/HomeMain';
import Aos from 'aos'
import 'aos/dist/aos.css'
import Navigation from '../Navigation/Navigation';
const Header = () => {
    
    return (
        <div>
            <Navigation></Navigation>
            <HomeMain></HomeMain>
            
        </div>
    );
};

export default Header;