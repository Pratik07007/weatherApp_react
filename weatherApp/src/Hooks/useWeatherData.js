import { useEffect, useState } from "react";

const useWeatherData = (city) => {
  const [WeatherData, setWeatherData] = useState({});
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f54929d4ba750560197d17505125a8ff&units=metric`
    )
      .then((res) => res.json())
      .then((res) => setWeatherData(res));
  }, [city]);
  return WeatherData;
  
};

export default useWeatherData;