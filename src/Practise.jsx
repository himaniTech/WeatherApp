import React, { useState } from 'react'

function Practise() {
    const [input, setInput] = useState("")
    const [weather, setWeather] = useState(null)

    const key_data = "0e4872b94a53173dbd60d8796fccb526"

    async function abc() {
        let response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${key_data}&units=metric`
        )

        let datajson = await response.json()
        setWeather(datajson)
        console.log(datajson)
    }

    return (
        <>
            <div className="input_fields">
                <input
                    type="text"
                    placeholder="Type Your city name :-"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button onClick={abc} style={{
    padding: "10px 20px",
    backgroundColor:"white",
  }}>Submit</button>
  {weather && weather.main && (
  <div>
    <h3>City: {weather.name}</h3>
    <p>Temperature: {weather.main.temp} °C</p>
    <p>Min Temp: {weather.main.temp_min} °C</p>
    <p>Max Temp: {weather.main.temp_max} °C</p>
    <p>Humidity: {weather.main.humidity}%</p>
  </div>
)}
            </div>

          
        </>
    )
}

export default Practise