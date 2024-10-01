import React from 'react';
import me from '../../Images/me.jpg';

import css from './HomePage.module.css';

export const HomePage = () => {
  return (
    <>
      <div className={css.divcontainer}>
        <div className={css.typewriter}>
          <h1>Hello I'm Lance</h1>
        </div>
        <img src={me} alt="Profile" className={css.me}></img>
      </div>
    </>
  );
};
