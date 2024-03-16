import React from "react";
import { TbError404Off } from "react-icons/tb";

const WeatherInfoCard = ({
  weatherIcon: WeatherIcon = TbError404Off,
  value,
  info,
  unit,
}) => {
  return (
    <div className="border-[1px] w-[20%] border-solid border-black flex flex-col gap-5 items-center rounded-3xl mb-7">
      <WeatherIcon className="text-5xl" />
      <h1>
        {value} {unit}
      </h1>
      <h1>{info}</h1>
    </div>
  );
};

export default WeatherInfoCard;
