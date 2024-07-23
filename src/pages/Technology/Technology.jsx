import style from './Technology.module.css'

import data from './Technology.json'

import { useState } from 'react'

const Technology = () =>{

    const [actual , setActual] = useState(1)

    const handleClick = (id) =>{
        setActual(id-1)
    }

    return(
        <div>
            <h2>03 Space Launch 101</h2>
            <div>
                <h3>{data[actual].subtitle}</h3>
                <h1 className={style.title}>{data[actual].title}</h1>
                <p>{data[actual].texto}</p>
            </div>

            <div>
                {data.map((e)=>(
                    <button key={e.id} onClick={() => handleClick(e.id)}>{e.id}</button>
                ))}
            </div>
        </div>
    )
}

export {Technology}