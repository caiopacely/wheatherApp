import background from "../assets/bg-today-large.svg";
import sunny from "../assets/icon-sunny.webp";

function WeatherCard(props) {
  return (
    <div
      className="flex flex-col md:flex-row justify-between items-center xl:min-w-[900px] bg-cover bg-center bg-no-repeat h-64 rounded-2xl"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="p-6 text-white">
        <h1 className="text-xl font-semibold">{props.city.name}, {props.city.country}</h1>
        <h3 className="text-sm opacity-80">{props.time}</h3>
      </div>

      <div className="p-6 text-white text-right flex items-center" >
        <img src={sunny} alt="Weather icon" className="w-30 ml-auto" />
        <h1 className="text-4xl font-bold text-8xl">{props.temperature}</h1>
      </div>
    </div>
  );
}

export default WeatherCard;
