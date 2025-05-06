import React, { useEffect, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountry, setVisitedCountry] = useState([]);
  const [countryFlag,setCountryFlag] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      const res = await fetch("https://restcountries.com/v3.1/all");
      const data = await res.json();
      setCountries(data);
    };
    fetchCountries();
  }, []);
  const handleVisitedCountry = (country) => {
   // array push will not effect on dom for react
   const newVisitedCountry = [...visitedCountry,country];
   setVisitedCountry(newVisitedCountry);
  };
  const handleCountryFlag = (flag) => {
     setCountryFlag([...countryFlag,flag]);
  }

  return (
    <div>
      {/* display visited country */}
      <h4 style={{ textAlign: "center" }}>Total Country: {countries.length}</h4>
      <div style={{textAlign:"center",width:"50%",margin:"auto"}}>
        <h4 style={{textAlign:'Center'}}>Visited Country</h4>
        <ul style={{listStyle:"none"}}>
          {
            visitedCountry.map((country,idx) => <li key={idx}>{country?.name?.common}</li>)
          }
        </ul>
      </div>
      {/* display visited country flag */}
      <div className="flags-container">
        <h4>Flags - </h4>
        {
          countryFlag.map((flag,index) => <img src={flag} key={index}></img>)
        }
      </div>
      {/* display all countries */}
      <div className="countries">
        {countries.map((country) => (
          <Country
            country={country}
            key={country?.cca2}
            visitedCountry={handleVisitedCountry}
            countryFlag = {handleCountryFlag}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;

/*
    what React uses to return HTML-like code?
    you need a parent element like a <div> or <>...</> (a fragment)

*/
