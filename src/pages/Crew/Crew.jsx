import style from './Crew.module.css'
import { useState } from 'react'
import data from './Crew.json'

import anousheh from './image-anousheh.png'
import douglas from './image-douglas.png'
import mark from './image-mark.png'
import victor from './image-victor.png'

const Crew = () =>{
    const [actual , setActual] = useState(0)

    const handleClick = (id) =>{
        setActual(id-1)
    }

    const crewIntegrants = [douglas,victor,mark,anousheh]

    return(

        <div className={style.Crew}>
            <h2>
                <span>
                    02
                </span>
                Meet your Crew
            </h2>

            <div className={style.imageWrapper}>
                <div className={style.imagePh}></div>
            </div>
            <hr className={style.Ph} />


            <span>{data[actual].subtitle}</span>
            <h1>{data[actual].title}</h1>
            <p>{data[actual].texto}
            </p>

            <div>
                {data.map((e)=>(
                    <button onClick={()=>handleClick(e.id)}
                    className={`${style.dot} ${actual === e.id-1? style.active : ""}`}
                    ></button>
                ))}
            </div>

            <img src={crewIntegrants[actual]} alt="" />
        </div>
    )

}

export {Crew}