import style from './Destination.module.css';

const Destination = () => {
  return <div className={style.Destination}>
    <h2>
      <span>01</span>
      pick your Destination
    </h2>

    <div className={style.imageWrapper}>
      <div className={style.imagePh}></div>
    </div>

    <nav className={style.Nav}>
      <ul>
        <li>Moon</li>
        <li>Mars</li>
        <li>Europa</li>
        <li>Titan</li>
      </ul>
    </nav>

    <h1>Moon</h1>
    <p>See our planet as you've never seen it before. A
      perfect relaxing trip away to help ragain
      perspective and come back refresed. While
      you're there, take some history by visiting the
      Luna 2 and Apollo 11 landing sites.
    </p>

    <hr className={style.Hr} />

    <div className={style.avgDistance}>
      <p>Avg.Distance</p>
      <p>384,400KM</p>
    </div>

    <div className={style.estTravelTime}>
      <p>Est. Travel Time</p>
      <p>3 Days</p>
    </div>
  </div>;
};

export { Destination };
