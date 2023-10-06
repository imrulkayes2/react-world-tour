import { useState } from 'react';
import './country.css';
const Country = ({ country }) => {
    console.log(country)

    const { name, flags, population, area, region, currencies, cca3
    } = country;
    const [Visited, setVisited] = useState(false);
    const handleVisited = () => {
        setVisited(!Visited);
    }
    return (
        <div className="country">
            <h3>Name:{name?.common
            }</h3>
            <img src={flags.png} alt="" />
            <p>Population:{population}</p>
            <p>Area: {area}</p>
            <h3>{region
            }</h3>
            <p>Currencies:{currencies?.[Object?.keys(currencies)]?.name}</p>
            <p><small>Code:{cca3}</small> </p>
            <button onClick={handleVisited}>{Visited ? 'visited' : 'On going'}</button>
            {Visited ? 'i have visited this country' : 'NO, I want to visit this country'}
        </div>
    );
};

export default Country;