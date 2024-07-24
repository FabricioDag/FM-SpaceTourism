import style from './Destination.module.css';
import { useState } from 'react'
import data from './Destination.json'

import moon from './image-moon.png'
import mars from './image-mars.png'
import europa from './image-europa.png'
import titan from './image-titan.png'

const Destination = () => {

  const [actual , setActual] = useState(0)

  const handleClick = (value) =>{
    setActual(value)
} 

  const destinations = [ moon, mars,europa, titan]

  return <div className={style.Destination}>
    <h2>
      <span>01</span>
      pick your Destination
    </h2>

    <div className={style.imageWrapper}>
      <img className={style.imagePh} src={destinations[actual]} alt="" draggable="false" />
    </div>

    <nav className={style.Nav}>
      <ul>
        <li onClick={() => handleClick(0)}>Moon</li>
        <li onClick={() => handleClick(1)}>Mars</li>
        <li onClick={() => handleClick(2)}>Europa</li>
        <li onClick={() => handleClick(3)}>Titan</li>
      </ul>
    </nav>

    <h1>{data[actual].title}</h1>
    <p>{data[actual].texto}
    </p>

    <hr className={style.Hr} />

    <div className={style.avgDistance}>
      <p>Avg.Distance</p>
      <p>{data[actual].avgDistance}</p>
    </div>

    <div className={style.estTravelTime}>
      <p>Est. Travel Time</p>
      <p>{data[actual].estTime}</p>
    </div>
  </div>;
};

export { Destination };
