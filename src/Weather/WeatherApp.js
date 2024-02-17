import axios from 'axios'
import React, { useState } from 'react'
import "./Weather.css"

const WeatherApp = () => {
    const[weatherData,setWeatherData]=useState(null)
    const[cityName,setCityName]=useState(null)

    const handle=(e)=>{
        e.preventDefault()
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=4aac91076517ec24150f153a52935787`).then((res) => {
                setWeatherData(res.data)
                // console.log(res.data)
            }).catch((err)=>{
                console.log(err)
            })
        }
    
  return (
    <div className='main-div'>
      <form className='form_div' action="" onSubmit={handle}>
        <input className='form-input' placeholder='County or City name'  type="text" onChange={ (e)=>{
            setCityName(e.target.value)
        }}/>
        <button type='submit'>Check Weather</button>
      </form>
      {
        weatherData ===null ? null :
        <div>
        <h2>{cityName} Temprature is {weatherData.main.temp}°C</h2>
        </div>
      }
    </div>
  )
}

export default WeatherApp




// (`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=4aac91076517ec24150f153a52935787`)