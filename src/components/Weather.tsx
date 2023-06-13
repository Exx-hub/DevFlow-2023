import { useEffect, useState } from "react";
import { IWeather } from "../types/interfaces";
import {
  FaCloud,
  FaCloudShowersHeavy,
  FaCloudSun,
  FaCloudMoonRain,
  FaCloudMoon,
} from "react-icons/fa";
import useGetTime from "../hooks/useGetTime";

function Weather() {
  const [data, setData] = useState<IWeather | null>(null);

  const { showMoon } = useGetTime();

  console.log(showMoon);

  useEffect(() => {
    const getWeather = async () => {
      const response = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=manila,ph&appid=8a7ece7c8d9c1de8f1439a34f030c2ad"
      );

      const data = await response.json();

      //   console.log(data);

      setData(data);
    };

    getWeather();
  }, []);

  const getIcon = (weather: string | undefined) => {
    switch (weather) {
      case "Clouds":
        return <FaCloud />;
      case "Rain":
        return showMoon ? <FaCloudMoonRain /> : <FaCloudShowersHeavy />;
      case "Clear":
        return showMoon ? <FaCloudMoon /> : <FaCloudSun />;
      default:
        return;
    }
  };

  //   console.log(showMoon);
  //   console.log(getIcon(data?.weather[0].main));

  return (
    <div className="w-[160px] flex flex-col items-end justify-center text-gray-400">
      <div className="text-lg">{getIcon(data?.weather[0].main)}</div>
      {data ? <h3 className="text-xs">{Math.round(data.main.temp - 273)}°</h3> : "--"}
    </div>
  );
}

export default Weather;
