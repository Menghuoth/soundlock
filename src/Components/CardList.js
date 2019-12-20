import React from 'react';

import CardPlay from './Cards';

const CardList = () => {
    return (
        <div className="List d-flex flex-column flex-md-row">
            <CardPlay />
            <CardPlay />
            <CardPlay />
            <CardPlay />
        </div>
    );
};

export default CardList;