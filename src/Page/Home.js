import React from 'react';

import Nav from './../Components/Nav';
import Slideshow from './../Components/Slideshow';
import CardList from './../Components/CardList';

const HomePage = () => {
    return (
        <div>
            <Nav /> 
            <Slideshow />
            <CardList />
            <CardList />
        </div>
    );
}

export default HomePage;