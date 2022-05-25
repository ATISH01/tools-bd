import React from 'react';
import Footer from '../Shared/Footer';
import AllProducts from './AllProducts';
import AllReviews from './AllReviews';
import Banner from './Banner';
import Counter from './Counter';
import Hotdeal from './Hotdeal';
import MenberShip from './MenberShip';

import Summery from './Summery';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AllProducts></AllProducts>
            
            {/* <Reviews></Reviews> */}
            <Hotdeal></Hotdeal>
            <AllReviews></AllReviews>
            <MenberShip></MenberShip>
            <Summery></Summery>
            <Footer></Footer>
        </div>
    );
};

export default Home;