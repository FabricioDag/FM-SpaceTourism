import style from './Home.module.css';

const Home = () => {
  return (
    <div className={style.Home}>
      <div className={style.textWrapper}>
        <h2>SO, YOU WANT TO TRAVEL TO</h2>
        <h1>SPACE</h1>
        <p>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>

      <button className={style.exploreBtn}>Explore</button>
    </div>
  );
};

export { Home };
