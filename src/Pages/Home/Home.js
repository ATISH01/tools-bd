import React from 'react';
import Footer from '../Shared/Footer';
import AllProducts from './AllProducts';
import Banner from './Banner';

import Summery from './Summery';

const Home = () => {
    return (
        <div>
         
            <Banner></Banner>
            <AllProducts></AllProducts>
            <Summery></Summery>
            {/* <Reviews></Reviews> */}
            <Footer></Footer>
        </div>
    );
};

export default Home;