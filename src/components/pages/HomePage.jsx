import React from 'react';

import css from './HomePage.module.css';

export const HomePage = () => {
  return (
    <>
      <div className={css.divcontainer}>
        <div className={css.typewriter}>
          <h1>
            Hello im lance asturias currently looking for a job as a front end
            developer.
          </h1>
        </div>
      </div>
    </>
  );
};
