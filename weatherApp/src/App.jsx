import React, { useState } from "react";
import Nav from "./Components/Nav";
import WeatherInfoCard from "./Components/WeatherInfoCard";
import { TbError404 } from "react-icons/tb";
import { CiTempHigh } from "react-icons/ci";
import { MdOutlineAir } from "react-icons/md";
import { WiHumidity } from "react-icons/wi";
import { GiSpeedometer } from "react-icons/gi";
import { FaTemperatureArrowUp } from "react-icons/fa6";
import { FaTemperatureArrowDown } from "react-icons/fa6";
import { FaTemperatureHigh } from "react-icons/fa";
import useWeatherData from "./Hooks/useWeatherData";
const App = () => {
  const [city, setcity] = useState("Kathmandu");
  const [query, setquery] = useState("kathmandu");
  let finalApiResponse = useWeatherData(city);

  const handleSubmit = (e) => {
    e.preventDefault();
    setcity(query);
  };

  return (
    <>
      <Nav />
      <div className=" h-screen w-screen bg-[#EEE4B1] flex flex-col  items-center gap-10 py-28">
        <form onSubmit={handleSubmit}>
          <input
            onChange={(e) => setquery(e.target.value)}
            className="bg-transparent outline-none border-[1px] border-black rounded-2xl w-96 text-2xl py-5"
            type="text"
          />
        </form>
        <h1 className="text-3xl font-bold">{finalApiResponse.name}</h1>
        <div className="w-[70%] border-[1px] border-solid flex space-x-1 flex-wrap justify-between">
          <WeatherInfoCard
            weatherIcon={CiTempHigh}
            info="Temperature"
            value={
              finalApiResponse.main ? finalApiResponse.main.temp : "Loading..."
            } unit="℃"
          />
          <WeatherInfoCard
            weatherIcon={MdOutlineAir}
            info="Pressure"
            value={
              finalApiResponse.main
                ? finalApiResponse.main.pressure
                : "Loading..."
            }
            unit="hPa"
          />
          <WeatherInfoCard
            weatherIcon={WiHumidity}
            info="Humidity"
            value={
              finalApiResponse.main
                ? finalApiResponse.main.humidity
                : "Loading..."
            }
            unit="%"
          />
          <WeatherInfoCard
            weatherIcon={GiSpeedometer}
            info="WindSpeed"
            value={
              finalApiResponse.wind ? finalApiResponse.wind.speed : "Loading..."
            }
            unit="m/s"
          />
          <WeatherInfoCard
            weatherIcon={FaTemperatureHigh}
            info="Feels Like"
            value={
              finalApiResponse.main
                ? finalApiResponse.main.feels_like
                : "Loading..."
            }
            unit="℃"
          />
          <WeatherInfoCard
            weatherIcon={FaTemperatureArrowUp}
            info="Temp High"
            value={
              finalApiResponse.main
                ? finalApiResponse.main.temp_max
                : "Loading..."
            }
            unit="℃"
          />
          <WeatherInfoCard
            weatherIcon={FaTemperatureArrowDown}
            info="Temp Low"
            value={
              finalApiResponse.main
                ? finalApiResponse.main.temp_min
                : "Loading..."
            }
            unit="℃"
          />
          <WeatherInfoCard
            weatherIcon={TbError404}
            info="Desc Logo"
            value={
              finalApiResponse.main ? finalApiResponse.main.temp : "Loading..."
            }
          />
        </div>
      </div>
    </>
  );
};

export default App;
