import React, { useState, useEffect } from "react";
import axios from 'axios';
import moment from "moment";



function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=2285ac64b3d611746190d73a4e00bdcb`

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  }

  
    const [dateTime, setDateTime] = useState(new Date());

    useEffect(() => {
        const id = setInterval(() => setDateTime(new Date()), 1000);
        return () => {
            clearInterval(id);
        }
    }, []);


  
    
   


  return (
    <>

      <div className="min-h-screen grid grid-cols-1 items-center bg-gray-800 justify-center">

        <div className='max-w-md mx-auto'>
          <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
            <input
              className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
              type="text"
              id="search"
              placeholder="Search City Name.."
              value={location}
              onChange={event => setLocation(event.target.value)}
              onKeyPress={searchLocation} />
          </div>
        </div>



        <div className="max-w-md mx-auto shadow-2xl bg-gradient-to-r from-[#8EC5FC] to-[#FFCC70] hover:from-[#D9AFD9] hover:to-[#97D9E1] rounded p-4 w-full max-w-xs">
          <div className="flex flex-col rounded w-full max-w-xs blur-lg"></div>
          <div className="font-bold text-xl" id="Name">{data.name}</div>
          <div className="text-sm text-gray-500">{`${dateTime.toLocaleTimeString()} ${dateTime.toLocaleDateString()}`}</div> 
           {/* Thursday 10 May 2020 */}
          <div className="mt-6 text-6xl self-center inline-flex items-center justify-center rounded-lg text-indigo-400 h-24 w-24">
            <svg className="w-32 h-32" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path></svg>
          </div>
          <div className="flex flex-row items-center justify-center mt-6">
            <div className="font-medium text-6xl" id="Temperature">{data.main?.temp.toFixed()}°</div>
            <div className="flex flex-col items-center ml-6">
              <div>{data.weather?.[0]?.description}</div>
              <div className="mt-1">
                <span className="text-sm"><i className="far fa-long-arrow-up"></i></span>
                <span className="text-sm font-light text-gray-500" id="Max_Temp">{data.main?.temp_max.toFixed()}°C</span>
              </div>
              <div>
                <span className="text-sm"><i className="far fa-long-arrow-down"></i></span>
                <span className="text-sm font-light text-gray-500" id="Min_Temp">{data.main?.temp_min.toFixed()}°C</span>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between mt-6">
            <div className="flex flex-col items-center">
              <div className="font-medium text-sm">Wind</div>
              <div className="text-sm text-gray-500" id="Wind">{data.wind?.speed}k/h</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="font-medium text-sm">Humidity</div>
              <div className="text-sm text-gray-500" id="Humidity">{data.main?.humidity}%</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="font-medium text-sm">Visibility</div>
              <div className="text-sm text-gray-500" id="Visibility">{data.visibility / 1000}km</div>
            </div>
          </div>
        </div>




      </div>
    </>

  );
}

export default App;


 // <div classNameName="app">
    //   <div classNameName="container">
    //     <div classNameName="top">
    //       <div classNameName="location">
    //         <p>Pune</p>
    //       </div>
    //       <div classNameName="temp">
    //         <h1>30 Degree Celcius</h1>
    //       </div>
    //       <div classNameName="description">
    //         <p>Clouds</p>
    //       </div>
    //     </div>
    //     <div classNameName="bottom">
    //       <div classNameName="feels">
    //         <p>65 degrere</p>
    //       </div>
    //       <div classNameName="humidity">
    //         <p>20%</p>
    //       </div>
    //       <div classNameName="wind">
    //         12 MPH
    //       </div>
    //     </div>
    //   </div>
    // </div>