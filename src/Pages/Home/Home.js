import React from 'react';
import Footer from '../Shared/Footer';
import AllProducts from './AllProducts';
import AllReviews from './AllReviews';
import Banner from './Banner';

import Summery from './Summery';

const Home = () => {
    return (
        <div>
         
            <Banner></Banner>
            <AllProducts></AllProducts>
            <Summery></Summery>
            {/* <Reviews></Reviews> */}
            <AllReviews></AllReviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;