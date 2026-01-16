import background from "../assets/bg-today-large.svg";
import sunny from "../assets/icon-sunny.webp";

function WeatherDetails(props) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4  rounded-2xl">
      <div className="flex flex-col items-start bg-gray-800 bg-opacity-50 rounded-xl p-4 h-24 justify-center">
        <p className="text-gray-400 text-sm mb-1">Feels Like</p>
        <p className="text-white text-3xl font-light">{props.apparent_temperature}</p>
      </div>

      <div className="flex flex-col items-startweatherApp/src/Componentes/WeatherDetails.jsx bg-gray-800 bg-opacity-50 rounded-xl p-4 h-24 justify-center">
        <p className="text-gray-400 text-sm mb-1">Humidity</p>
        <p className="text-white text-3xl font-light">{props.relative_humidity_2m}%</p>
      </div>

      <div className="flex flex-col items-start bg-gray-800 bg-opacity-50 rounded-xl p-4 h-24 justify-center">
        <p className="text-gray-400 text-sm mb-1">Wind</p>
        <p className="text-white text-3xl font-light">{props.wind_speed_10m} km/h</p>
      </div>

      <div className="flex flex-col items-start bg-gray-800 bg-opacity-50 rounded-xl p-4 h-24 justify-center">
        <p className="text-gray-400 text-sm mb-1">Precipitation</p>
        <p className="text-white text-3xl font-light">{props.precipitation} mm</p>
      </div>
    </div>
  );
}

export default WeatherDetails;