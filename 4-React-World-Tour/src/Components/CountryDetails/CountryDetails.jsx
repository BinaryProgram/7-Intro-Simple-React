import React from 'react';
import Country from '../Country/Country';
import CountryData from '../CountryData/CountryData';

const CountryDetails = (props) => {
    // destructuring props
    const {country} = props;
    
    return (
        <div>
            <h2>Display More Country Info</h2>
            <h3>Official Name - {country?.name?.official}</h3>
            <hr />
            {/* props drilling level 2 */}
            <CountryData {...props}></CountryData>
        </div>
    );
};

export default CountryDetails;