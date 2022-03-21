//https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=47784b6e3c187e231a7b8ff3341ae37d

import React, { useEffect, useState } from 'react'
import Weathercard from './weathercard';
import './style.css'

const Temperature = () => {
    const [searchValue, setSearchValue] = useState("delhi");
    const [tempInfo, setTempInfo] = useState({}); //{} empty object rakh diye by default
  // we want first time, only first time by default delhi ka data mile without tapping on search button, after page refresh
  const getWeatherInfo= async()=>{

    try{
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=47784b6e3c187e231a7b8ff3341ae37d`;
      let res = await fetch(url);
      let data = await res.json();

      console.log(data); //let's see the data


      //object destructuring
      const { temp, humidity, pressure } = data.main;
      const { main: weathermood } = data.weather[0];
      const { name } = data;
      const { speed } = data.wind;
      const { country, sunset } = data.sys;

      //passing all data, by creating own object
      const myNewWeatherInfo = {
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset,
      }; //now we'll add all these data to our state vaiable
      setTempInfo(myNewWeatherInfo);//pass kr diye
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWeatherInfo();
  }, []);
  return (
    <>
      <div className="wrap">
        <div className="search">
          <input
            type="search"
            placeholder="search..."
            autoFocus
            id="search"
            className="searchTerm"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
      
               {/* jab ham anything type krenge search box me to woh ham data lenge */}
                  <button
                    className="searchButton"
                    type="button"
                    onClick={getWeatherInfo}>
                    Search
                  </button>
               </div>
        </div>


        {/* Temperature compoennt include and passing props */}
        <Weathercard {...tempInfo} />  {/*... spread operators */}
    </>
  )
}

export default Temperature