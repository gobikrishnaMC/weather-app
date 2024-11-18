import { FaWind } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { FaTemperatureHigh } from "react-icons/fa";
import { FaTemperatureArrowUp, FaTemperatureArrowDown } from "react-icons/fa6";
import { TbGauge } from "react-icons/tb";
import { PiCoffeeLight } from "react-icons/pi";
import PlaceHolderCard from "./PlaceHolderCard";

const CurrentWeather = ({ data }) => {
  if (!data)
    return (
      <PlaceHolderCard
        SubHeading={
          "The weather data for the entered city is currently unavailable. Please try again later or check the city name."
        }
        mainHeading={"Sorry ! Weather Data Not Available"}
      />
    );

  // Destructure and calculate values
  const { weather, main, wind } = data;
  const { temp, feels_like, temp_max, temp_min, humidity, pressure } = main;
  const weatherCondition = weather[0].main;
  const iconCode = weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

  // Convert Kelvin to Celsius
  const toCelsius = (kelvin) => (kelvin - 273.15).toFixed(1);

  return (
    <div className="max-w-md  mx-auto mt-6 bg-gray-100 shadow-2xl  border border-gray-300 rounded-lg ">
      <div className="flex flex-col items-center p-4">
        <img src={iconUrl} alt={weatherCondition} className="object-cover" />
        <h2 className="text-lg font-bold text-gray-800 mt-2 capitalize">
          {weatherCondition}
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-4 p-4 justify-items-center">
        <div className="flex items-center gap-2 text-gray-700">
          <FaTemperatureHigh className="text-lime-500" />
          <span>Temp: {toCelsius(temp)}°C</span>
        </div>
        <div className="flex items-center gap-2 text-gray-700">
          <WiHumidity className="text-lime-500" />
          <span>Humidity: {humidity}%</span>
        </div>
        <div className="flex items-center gap-2 text-gray-700">
          <FaWind className="text-lime-500" />
          <span>Wind: {wind.speed} m/s</span>
        </div>
        <div className="flex items-center gap-2 text-gray-700">
          <TbGauge className="text-lime-500" />
          <span>Pressure: {pressure} hPa</span>
        </div>
        <div className="flex items-center gap-2 text-gray-700">
          <PiCoffeeLight className="text-lime-500" />
          <span>Feels Like: {toCelsius(feels_like)}°C</span>
        </div>
        <div className="flex gap-1 text-gray-700">
          <div className="flex items-center ">
            <FaTemperatureArrowUp className="text-lime-500" />
            <span>Max: {toCelsius(temp_max)}°C</span>
          </div>
          <div className="flex items-center  mt-1">
            <FaTemperatureArrowDown className="text-lime-500" />
            <span>Min: {toCelsius(temp_min)}°C</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
