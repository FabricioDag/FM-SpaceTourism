import style from './Crew.module.css'

const Crew = () =>{
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

            <nav className={style.Nav}>
                <div className={style.dot}></div>
                <div className={style.dot}></div>
                <div className={style.dot}></div>
                <div className={style.dot}></div>
            </nav>

            <span>Commander</span>
            <h1>Douglas Hurley</h1>
            <p>Douglas Gerald Hurley is an American engineer,
                former Marine Corps pilot and former NASA
                astronaut. He launched into space for the third
                time as commander of Crew Dragon Demo-2
            </p>
        </div>
    )

}

export {Crew}