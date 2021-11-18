import React from 'react';
import './Country.css';

const Country = (props) => {
    const { name, capital, flag, population, region } = props.country;

    console.log(props);
    return (
        <div className="card-style">
            <img src={flag} alt="" />
            <h2>{name}</h2>
            <h4>Population: {population}</h4>
            <h4>Region: {region}</h4>
            <h4>Capital: {capital}</h4>
        </div>
    );
};

export default Country;