import React, { useEffect, useState } from "react";
// alias
import {
  add,
  multiply,
  dividedFirstNumBySecondNum as divide,
} from "../../Utils/Calulator";
import Watch from "../Watch/Watch";
import App from "../../App";

const Sunglass = () => {
  const [watches, setWatches] = useState([]);

  const first = 40;
  const second = 12;
  const addition = add(first, second);
  const multiplication = multiply(first, second);
  const division = divide(first, second);

  // Create and Load Fake data, chaptGpt json, online api
  // const smartWatches = [
  //   {
  //     id: 1,
  //     model: "Apple Watch Series 9",
  //     price: 399,
  //     brand: "Apple",
  //   },
  //   {
  //     id: 2,
  //     model: "Galaxy Watch 6",
  //     price: 349,
  //     brand: "Samsung",
  //   },
  //   {
  //     id: 3,
  //     model: "Pixel Watch 2",
  //     price: 329,
  //     brand: "Google",
  //   },
  //   {
  //     id: 4,
  //     model: "Venu 3",
  //     price: 449,
  //     brand: "Garmin",
  //   },
  //   {
  //     id: 5,
  //     model: "Sense 2",
  //     price: 299,
  //     brand: "Fitbit",
  //   },
  // ];
  // useEffect(() => setWatches(smartWatches), []);

  
  // use local api inside public folder(bangla system)
  useEffect(() => {
    const fetchWatches = async () => {
      const res = await fetch('Watches.json');
      const data = await res.json();
      setWatches(data);
    }
    fetchWatches();
  },[])
  return (
    <div>
      {
        <div>
          {watches.map((watch, idx) => (
            <Watch watch={watch} key={idx}></Watch>
          ))}
        </div>
      }
    </div>
  );
};

export default Sunglass;
