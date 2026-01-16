import { useState } from "react";

function HourlyForecast() {
  const [selectedDay, setSelectedDay] = useState("Tuesday");
  
  const hourlyData = [
    { time: "3 PM", icon: "☁️", temp: "20°" },
    { time: "4 PM", icon: "⛅", temp: "20°" },
    { time: "5 PM", icon: "☀️", temp: "20°" },
    { time: "6 PM", icon: "☁️", temp: "19°" },
    { time: "7 PM", icon: "🌧️", temp: "18°" },
    { time: "8 PM", icon: "🌫️", temp: "18°" },
    { time: "9 PM", icon: "🌧️", temp: "17°" },
    { time: "10 PM", icon: "☁️", temp: "17°" }
  ];

  return (
    <div className="bg-gray-800 bg-opacity-40 rounded-3xl p-6 l min-w-80  ">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-white text-lg font-medium">Hourly forecast</h2>
        <button className="bg-gray-700 bg-opacity-60 text-gray-300 px-4 py-2 rounded-lg text-sm flex items-center gap-2">
          {selectedDay}
          <span className="text-xs">▼</span>
        </button>
      </div>

      <div className="space-y-3">
        {hourlyData.map((item, index) => (
          <div 
            key={index}
            className="flex items-center justify-between bg-gray-700 bg-opacity-30 rounded-xl px-4 py-3"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">{item.icon}</span>
              <span className="text-white text-base">{item.time}</span>
            </div>
            <span className="text-white text-lg font-light">{item.temp}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HourlyForecast;