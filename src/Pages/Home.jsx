import React from 'react';
import Banner from './Banner';
import History from './History';
import Chefs from './Chefs';
import SummerPromo from './SummerPromo';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <History></History>
            <Chefs></Chefs>
            <SummerPromo></SummerPromo>
        </div>
    );
};

export default Home;