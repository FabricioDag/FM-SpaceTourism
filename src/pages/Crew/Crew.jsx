import style from './Crew.module.css'
import { useState } from 'react'
import data from './Crew.json'

const Crew = () =>{
    const [actual , setActual] = useState(0)

    const handleClick = (id) =>{
        setActual(id-1)
    }

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

            {/* <nav className={style.Nav}>
                <div className={style.dot}></div>
                <div className={style.dot}></div>
                <div className={style.dot}></div>
                <div className={style.dot}></div>
            </nav> */}

            <span>{data[actual].subtitle}</span>
            <h1>{data[actual].title}</h1>
            <p>{data[actual].texto}
            </p>

            <div>
                {data.map((e)=>(
                    <button onClick={()=>handleClick(e.id)}>{e.id}</button>
                ))}
            </div>
        </div>
    )

}

export {Crew}