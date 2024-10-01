import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Header.module.css';
import { Outlet } from 'react-router-dom';

export const Header = () => {
  return (
    <>
      <div className={css.nav}>
        <div className={css.logoname}>
          <NavLink>
            <h2 className={css.logo}>Lance Portfolio</h2>
          </NavLink>
        </div>
        <div className={css.btn}>
          <NavLink to="/" className={`${css.navlink} ${css.active}`}>
            Home
          </NavLink>
          <NavLink to="about" className={css.navlink}>
            About
          </NavLink>
        </div>
      </div>
      <Outlet />
    </>
  );
};
