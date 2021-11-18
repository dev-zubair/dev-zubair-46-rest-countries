import React, { useEffect, useState } from 'react';

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
        </div>
    );
};

export default Countries;