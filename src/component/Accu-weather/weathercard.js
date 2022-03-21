import React, { useEffect } from "react";
import './style.css'
//here receiving the props data
        //destructuring from the props
      const Weathercard = ({
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset,
      }) => {
        const [weatherState, setWeatheState] = React.useState("");
      
        //use effect hooks we'll change weathermood if weather mood has changed then only change, if we get the weathermood from api then only change it
        useEffect(() => {
          if (weathermood) {
            switch (weathermood) {
              case "Clouds":
                setWeatheState("wi-day-cloudy");
                break;
              case "Haze":
                setWeatheState("wi-fog");
                break;
              case "Clear":
                setWeatheState("wi-day-sunny");
                break;
              case "Mist":
                setWeatheState("wi-dust");
                break;
      
              default:
                setWeatheState("wi-day-sunny");
                break;
            }
          }
        }, [weathermood]);


  // converting the seconds into time
  let sec = sunset;
  let date = new Date(sec * 1000);
  let timeStr = `${date.getHours()}:${date.getMinutes()}`;
  return (
    <>
      <article className="widget">
        <div className="weatherIcon">
          <i className={`wi ${weatherState}`}></i>
        </div>

        <div className="weatherInfo">
          <div className="temperature">
            <span>{temp}&deg;</span>
          </div>

          <div className="description">
            <div className="weatherCondition">{weathermood}</div>
            <div className="place">
              {name}, {country}
            </div>
          </div>
        </div>

        <div className="date"> {new Date().toLocaleString()} </div>

        {/* our 4column section  */}
        <div className="extra-temp">
          <div className="temp-info-minmax">
            <div className="two-sided-section">
             
              <i className={"wi wi-sunset wallpapr"}></i>
              
                
              
              <p className="extra-info-leftside">
                {timeStr} PM <br />
                Sunset
              </p>
            </div>

            <div className="two-sided-section">

              
                <i className={"wi wi-humidity wallpapr"}></i>
              
              <p className="extra-info-leftside">
                {humidity} <br />
                Humidity
              </p>
            </div>
          </div>

          <div className="weather-extra-info">
            <div className="two-sided-section">

            <i className={"wi wi-rain wallpapr"}></i>

              <p className="extra-info-leftside">
                {pressure} <br />
                Pressure
              </p>
            </div>

            <div className="two-sided-section">

              <i className={"wi wi-strong-wind wallpapr"}></i>

              <p className="extra-info-leftside">
                {speed} <br />
                Speed
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default Weathercard;