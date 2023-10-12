import React from 'react';
import Slider from './Slider';
import Services from './Services';
import Footer from '../../footer/Footer';
import Testimonials from './Testimonials';
import Gallery from './Gallery';
import Stepper from './Stepper';
import Staff from './Staff';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Services></Services>
            <Testimonials></Testimonials>
            <Stepper></Stepper>
            <Gallery></Gallery>
            <Staff></Staff>
        </div>
    );
};

export default Home;