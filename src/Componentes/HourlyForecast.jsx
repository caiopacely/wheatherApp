import { useEffect, useState } from "react";
import Select from 'react-select'

function HourlyForecast(props) {
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });
  const [selectedDay, setSelectedDay] = useState({
    value: today,
    label: today
  });

  const options = [
    { value: 'Monday', label: 'Monday' },
    { value: 'Tuesday', label: 'Tuesday' },
    { value: 'Wednesday', label: 'Wednesday' },
    { value: 'Thursday', label: 'Thursday' },
    { value: 'Friday', label: 'Friday' },
    { value: 'Saturday', label: 'Saturday' },
    { value: 'Sunday', label: 'Sunday' }
  ]

  const handleChange = (option)=>{
    setSelectedDay(option)
  }
  

  
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


  return (
    <div className="bg-gray-800 bg-opacity-40 rounded-3xl p-6 l min-w-80 max  mb-32 h-[84vh] ">
      <div className="flex justify-between items-center mb-4 ">
        <h2 className="text-white text-lg font-medium">Hourly forecast</h2>
        <Select onChange={handleChange} className="" options={options} value={selectedDay} styles={{
        control: (base) => ({
          ...base,
          backgroundColor: '#1e29b', 
          borderColor: '#38bdf8',   
          minHeight: '44px',         
          fontSize: '14px',          
          color: '#ffffff',
        }), 
        singleValue: (base) => ({
          ...base,
          color: '#ffffff',           
        }), 
      }} />
      </div>
      
      <div className="space-y-3 h-[68vh] overflow-y-auto ">
        {props.hourly.time.map((item, index) => ({ item, index }))
        .filter(({ item }) => {
        if (!selectedDay){
          return true 
        } 
        else{
          const dayName = new Date(item).toLocaleDateString('en-US', {weekday: 'long',})
          return dayName === selectedDay.value
        }
        
        })
      .map(({ item, index }) => (

          <div 
            key={index}
            className="flex items-center justify-between bg-gray-700 bg-opacity-30 rounded-xl px-4 py-3"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">{getWeatherIcon(props.hourly.weather_code[index])}</span>
              <span className="text-white text-base">{new Date(item).toLocaleTimeString('pt-BR',{hour: '2-digit',minute: '2-digit'})}</span>
            </div>
            <span className="text-white text-lg font-light">{props.hourly.temperature_2m[index]} °</span>
          </div>
        ))}
      </div>
    </div>
  );
}
export default HourlyForecast;