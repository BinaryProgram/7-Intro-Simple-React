import React, { useState } from "react";
import "./Country.css";
import CountryDetails from "../CountryDetails/CountryDetails";

const Country = (props) => {
  const { country, visitedCountry,countryFlag } = props;
  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    setVisited(!visited);
  };

  // console.log(visitedCountry);
  return (
    // Conditional CSS and conditional style
    <div className={`country ${visited ? "visitedBg1" : "notVisitedBg"}`}>
      <h3>
        Country:{" "}
        <span style={{ color: visited ? "black" : "white" }}>
          {country?.name?.common}
        </span>
      </h3>
      <img src={country?.flags?.png} alt="flags" />
      <h5>Population: {country?.population}</h5>
      <h5>Area: {country?.area}</h5>
      <h5>
        <small>Code: {country?.cca3}</small>
      </h5>
      <div style={{ marginBottom: "10px" }}>
        {/* arrow function is mainly use here to avoid automatic call when passing parameter to a function */}
        <button onClick={() => visitedCountry(country)}>Mark Visited</button>
      </div>
      <button style={{display:"block"}} onClick={() => countryFlag(country?.flags?.png)}>Add Flag</button>
      {/*  Toggle state based on click and conditional rendering */}
      <button onClick={handleVisited} style={{ marginRight: "10px",marginTop:"10px" }}>
        {visited ? "Visited" : "Going"}
      </button>
      {visited ? "I have visited this place." : "I want to visit!"}
      <hr />
      {/* props drilling level 1 */}
      <CountryDetails {...props}></CountryDetails>
    </div>
  );
};

export default Country;

/*
    Country.jsx parent component is countries ➡️
    - If we  want to see these county in
    three column. Then I will apply style
    to the countries.jsx component not here.
*/
/*
  function Country(props, { handleVisitedCountry }) {
  // ❌ handleVisitedCountry will be undefined
}
Because React only passes one argument to function components: props. You're trying to destructure a second argument that doesn't exist, so it just gets ignored or ends up undefined.
*/
