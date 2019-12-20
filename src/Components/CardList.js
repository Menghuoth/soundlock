import React from 'react';

import CardPlay from './Cards';


const CardList = (props) => {
    const datas = props.datas;
    
    return (
        <div className="List d-flex flex-column flex-md-row">
            <CardPlay key={datas[0].id} data={datas[0]}/>
            <CardPlay key={datas[1].id} data={datas[1]} />
            <CardPlay key={datas[2].id} data={datas[2]} />
            <CardPlay key={datas[3].id} data={datas[3]} />
        </div>
    );
};

export default CardList;