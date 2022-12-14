import './ClimateStats.css';
import { useClimate } from '../../context/ClimateContext';
import { useEffect, useState } from 'react';

function ClimateStats() {
  const {temperature, setTemperature, humidity, setHumidity} = useClimate();
  const [desiredTemp, setDesiredTemperature ] = useState(65);
  const [desiredHygro, setDesiredHygro ] = useState(50);

  useEffect(()=>{
    const tempTimeout = setTimeout(()=>{
      if (temperature < desiredTemp) {
        setTemperature(prevTemp => prevTemp + 1)
      }

    }, 1000)

    const humidityTimeout = setTimeout(()=>{
      if(humidity < desiredHygro){
        setHumidity(prevTemp => prevTemp + 2)
      }
    },1000)

    if (humidity >= desiredHygro) {
      clearTimeout(humidityTimeout)
    }


    if (temperature >= desiredTemp) {
      clearTimeout(tempTimeout)
    }

    return ()=>{
      clearTimeout(tempTimeout)
      clearTimeout(humidityTimeout)
    }

  },[temperature, humidity])

  return (
    <div className="climate-stats">
      <div className="temperature">
        Temperature {temperature}°F
      </div>
      <div className="humidity">
        Humidity {humidity}%
      </div>
    </div>
  )
}

export default ClimateStats;
