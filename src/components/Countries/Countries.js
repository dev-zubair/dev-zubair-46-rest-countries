import React, { useEffect, useState } from 'react';
import './Countries.css'
import Country from '../Country/Country.js';

const Countries = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v2/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    return (
        <div>
            <h1>Countries Are : {countries.length}</h1>
            <div className="card">
                {
                    countries.map(country => <Country
                        key={country.name}
                        country={country}
                    ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;