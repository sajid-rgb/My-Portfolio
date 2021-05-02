import React, { useEffect } from 'react';
import About from './About/About';
import Header from './Header/Header';
import MyBlogs from './MyBlogs/MyBlogs';
import MySkills from './MySkills/MySkills';
import MyWork from './MyWork/MyWork';
import Aos from 'aos'
import 'aos/dist/aos.css'
import Footer from './Footer/Footer';
import ContactMe from './ContactMe/ContactMe';

const Home = () => {
    useEffect(()=>{
        Aos.init({duration:2000})
    })
    return (
        <div>
        <Header/>
        <div data-aos='fade-up'>
        <About/>
        </div>
        <div data-aos='slide-right'>
        <MySkills/>
        </div>
        <div data-aos='fade-left'>
        <MyWork />
            </div>
        <div data-aos='zoom-in-up'>
        <MyBlogs />
        </div>
        <div data-aos='fade-up'><ContactMe/></div>
          <Footer></Footer> 
        </div>
    );
};

export default Home;