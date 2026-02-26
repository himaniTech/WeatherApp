import React, { useEffect, useEffectEvent, useState } from 'react'
import './Weather.css'
function Weather() {

    // const time = new Date();
    // const date = time.toLocaleTimeString();
    // const timee = time.toLocaleDateString();
    const[time,setTime] = useState(new Date());
    
     useEffect(()=>{
       const timer =  setInterval(() => {
            setTime(new Date());
        }, 1000);
        return()=> clearInterval(timer);

     },[])



    const [input, setInput] = useState("")
    const [weather, setWeather] = useState(null)
    const key_data = "0e4872b94a53173dbd60d8796fccb526"

    async function getAllData() {
    
          try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${key_data}&units=metric`
        );

        const jsonData = await response.json();

        if (jsonData.cod !== 200) {
            alert(jsonData.message || "City not found");
            return;
        }

        setWeather(jsonData);
        console.log(jsonData);

    } catch (error) {
        console.log(error);
        alert("Something went wrong");
    }








    }


    return (
        <>
            <div className="container">
                <h1>Your's City Weather </h1>
                <p>{time.toLocaleTimeString()}</p>
                <p>{time.toLocaleDateString()}</p>
                <div className="input_fields">
                    <input type="text" placeholder='Search' value={input} onChange={(e) => setInput(e.target.value)} />
                    <button onClick={getAllData} >Submit</button>
                </div>

                {weather && (
                    <div className='data'>
                        <p className='icon'><img className="icon" src={`https://openweathermap.org/img/w/${weather.weather[0].icon}.png`} /></p>
                        <div className='temp'>
                            <p>Min: {weather.main.temp_min} °C </p>
                            <p> Max:  {weather.main.temp_max}  °C</p></div>
                        <div className='date'>  <p>Today's</p>
                            </div>
                        <div className='speed'>
                            <p> Speed:-  {weather.wind.speed}</p>
                            <p> Humdity:-  {weather.main.humidity}</p>
                        </div>




                    </div>

                )}
            </div>

        </>
    )
}

export default Weather









