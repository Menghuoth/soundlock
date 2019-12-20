import React from 'react';

import Nav from './../Components/Nav';
import Slideshow from './../Components/Slideshow';
import CardList from './../Components/CardList';

const datas1 = [
    {
        id: "a",
        title: "t1"
    },
    {
        id: "b",
        title: "t2"
    },
    {
        id: "c",
        title: "t3"
    },
    {
        id: "d",
        title: "t4"
    }
];

const datas2 = [
    {
        id: "a",
        title: "t5"
    },
    {
        id: "b",
        title: "t6"
    },
    {
        id: "c",
        title: "t7"
    },
    {
        id: "d",
        title: "t8"
    }
];

const HomePage = () => {
    return (
        <div>
            <Nav /> 
            <Slideshow />
            <CardList datas={datas1} />
            <CardList datas={datas2} />
        </div>
    );
}

export default HomePage;