import React from 'react';
import './Country.css'

const Country = (props) => {
    // console.log(props)
    // console.log(props.country)
    const{area, population, region, name, flags} = props.country;
    return (
        <div className='country'>

            <h2>Country Name: {name.common} </h2>
            <img src={flags.png} alt="" />
            <p>Country Population: {population} </p>
            <p><small>Region: {region}</small> </p>
            <p><small>Area: {area}</small> </p>




            {/* <h2>Country Name: {props.country.name.common} </h2>
            <p>Country Population: {props.country.population} </p>
            <p><small>Region: {props.country.region}</small> </p>
            <p><small>Area: {props.country.area}</small> </p> */}
            {/* <h2>Country Name: {props.name} </h2>
            <p>Country Population: {props.population} </p>
            <p><small>Region: {props.region}</small> </p>
            <p><small>Area: {props.area}</small> </p> */}
        </div>
    );
};

export default Country;