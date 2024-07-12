import style from './Header.module.css';

import { useState } from 'react';

import hamburguerIcon from './icon-hamburger.svg';
import closeIcon from './icon-close.svg';
import logo from './logo.svg';

const Header = () => {
  const [navActive, setNavActive] = useState(false);

  const handleClick = () => {
    setNavActive(!navActive);
  };
  return (
    <div className={style.Header}>
      {/* <div className={style.logoPh}></div> */}
      <img src={logo} alt="" className={style.logo} />
      <hr className={style.hr} />
      <button className={style.hamburguerBtn} onClick={handleClick}>
        <img src={navActive ? closeIcon : hamburguerIcon} alt="" />
      </button>

      <nav className={`${style.nav} ${navActive ? style.active : ''}`}>
        <ul>
          <li>
            <span>00</span> Home
          </li>
          <li>
            <span>01</span> Destination
          </li>
          <li>
            <span>02</span> Crew
          </li>
          <li>
            <span>03</span> Technology
          </li>
        </ul>
      </nav>
    </div>
  );
};

export { Header };
