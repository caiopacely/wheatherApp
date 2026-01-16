import background from "../assets/bg-today-large.svg";
import sunny from "../assets/icon-sunny.webp";

function DailyForecast(props) {
  
  const getWeatherIcon = (code) => {
    const iconMap = {
      0: '☀️',           
      1: '🌤️',          
      2: '⛅',          
      3: '☁️',          
      45: '🌫️',         
      48: '🌫️',         
      51: '🌦️',        
      53: '🌦️',         
      55: '🌧️',        
      56: '🌨️',         
      57: '🌨️',         
      61: '🌧️',         
      63: '🌧️',         
      65: '🌧️',         
      66: '🌨️',         
      67: '🌨️',         
      71: '❄️',          
      73: '🌨️',         
      75: '🌨️',         
      77: '🌨️',         
      80: '🌦️',         
      81: '⛈️',          
      82: '⛈️',          
      85: '🌨️',        
      86: '🌨️',         
      95: '⛈️',          
      96: '⛈️',          
      99: '⛈️'          
    };
  
    return iconMap[code] || '🌤️';
  };

  if (!props) {
    return null
  }

  return (
    <div className="w-full ">
      <h2 className="text-white text-xl font-medium mb-4">Daily forecast</h2>
      
      <div className="flex gap-3 overflow-x-auto grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 xl:grid-cols-7">
        {props.daily.time.map((item, index) => (
          <div 
            key={index}
            className="flex flex-col items-center bg-gray-800 bg-opacity-50 rounded-xl p-4 min-w-[90px]">
            <p className="text-gray-300 text-sm mb-3">{new Date(item).toLocaleDateString('pt-BR', {weekday: 'short'})}</p>
            <div className="text-4xl mb-3">{getWeatherIcon(props.daily.weather_code[index])}</div>
            <p className="text-white text-lg font-medium">{props.daily.temperature_2m_max[index]}</p>
            <p className="text-gray-400 text-sm">{props.daily.temperature_2m_min[index]}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DailyForecast;