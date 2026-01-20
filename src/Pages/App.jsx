import { useEffect, useState } from 'react'
import Header from '../Componentes/Header'
import Search from '../Componentes/Search'
import WeatherCard from '../Componentes/WeatherCard'
import WeatherDetails from '../Componentes/WeatherDetails'
import DailyForecast from '../Componentes/DailyForecast'
import HourlyForecast from '../Componentes/HourlyForecast'


function App() {

  const [city, setCity] = useState(null)
  const [cityName, setCityName] = useState("Miami")
  const [weather, setWeather] = useState(null)

  

  // 1️⃣ Busca coordenadas
  useEffect(() => {
  if (!cityName) return

  fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${cityName}&count=1&language=pt&format=json`
  )
    .then(res => res.json())
    .then(data => {
      if (!data.results?.length) return

      setCity({
        latitude: data.results[0].latitude,
        longitude: data.results[0].longitude,
        name: data.results[0].name,
        country: data.results[0].country
      })
    })
}, [cityName])

useEffect(() => {
  if (!city) return

  const params = new URLSearchParams({
    latitude: city.latitude,
    longitude: city.longitude,
    daily: 'weather_code,temperature_2m_max,temperature_2m_min',
    current: 'weather_code,temperature_2m,wind_speed_10m,apparent_temperature,precipitation,relative_humidity_2m',
    hourly: 'weather_code,temperature_2m,relative_humidity_2m,wind_speed_10m',
    timezone: 'auto'
  })

  fetch(`https://api.open-meteo.com/v1/forecast?${params}`)
    .then(res => res.json())
    .then(setWeather)
}, [city])

  if (!weather) {
    return <div className='bg-[hsl(243,96%,9%)] flex items-center justify-center w-[100vw] h-[100vh]' >
      <p className='text-white text-2xl'>CARREGANDO...</p>
    </div>
  }
  console.log(weather.daily)
  return (
    <>
    <div className='bg-[hsl(243,96%,9%)]  flex flex-col items-center justify-center'>
      <div>
        <Header></Header>
        <Search onSearch={setCityName}></Search>
        <h1></h1>
      </div>
      <div className='flex flex-col lg:flex-row justify-center gap-8'>
        <div className=' md:w-min[45vw]  flex flex-col gap-6'>
          <WeatherCard temperature={weather.current.temperature_2m} time={weather.current.time} city={city}></WeatherCard>
          <WeatherDetails apparent_temperature={weather.current.apparent_temperature} relative_humidity_2m={weather.current.relative_humidity_2m} wind_speed_10m={weather.current.wind_speed_10m} precipitation={weather.current.precipitation}></WeatherDetails>
         <DailyForecast daily={weather.daily}></DailyForecast>
        </div>
        <div> 
          <HourlyForecast hourly={weather.hourly}></HourlyForecast>
        </div>
      </div>             
    </div>
    </>
  )
}

export default App
