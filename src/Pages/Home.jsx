import React from 'react';
import Banner from './Banner';
import History from './History';
import Chefs from './Chefs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <History></History>
            <Chefs></Chefs>
        </div>
    );
};

export default Home;