import style from './Technology.module.css'

import data from './Technology.json'

import launchVL from './image-launch-vehicle-landscape.jpg'
import launchVP from './image-launch-vehicle-portrait.jpg'

import spaceCL from './image-space-capsule-landscape.jpg'
import spaceCP from './image-space-capsule-portrait.jpg'

import spacePL from './image-spaceport-landscape.jpg'
import spacePP from './image-spaceport-portrait.jpg'

import { useState } from 'react'

const Technology = () =>{

    const [actual , setActual] = useState(1)

    const handleClick = (id) =>{
        setActual(id-1)
    }

    const techLandscape = [spaceCL,spacePL,launchVL]
    const techPortrait = [spaceCP,spacePP,launchVP]

    return(
        <div className={style.Technology}>
            <h2>03 Space Launch 101</h2>
            <img src={techLandscape[actual]} alt="" className={style.imgLandscape}/>

            <div className={style.wrapperBtns}>
                {data.map((e)=>(
                    <button key={e.id}
                    onClick={() => handleClick(e.id)}
                    className={`${style.techBtn} ${actual === e.id - 1 ? style.active : ''}`}
                    
                    >{e.id}</button>
                ))}
            </div>

            <div>
                <h3>{data[actual].subtitle}</h3>
                <h1 className={style.title}>{data[actual].title}</h1>
                <p>{data[actual].texto}</p>
            </div>

            

            
            <img src={techPortrait[actual]} alt="" className={style.imgPortrait}/>
        </div>
    )
}

export {Technology}