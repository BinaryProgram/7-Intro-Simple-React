import React from 'react';

const Watch = (props) => {
    const {watch} = props;
    return (
        <div>
           <h3>Model: {watch.model}</h3>
           <h4>Price: {watch.price}</h4>
        </div>
    );
};

export default Watch;