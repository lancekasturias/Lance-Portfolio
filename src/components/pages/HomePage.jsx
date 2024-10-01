import React from 'react';
import { Route } from 'react-router-dom';
import css from './HomePage.module.css';
import { useEffect, useState } from 'react';

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
