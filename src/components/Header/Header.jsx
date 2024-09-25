import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Header.module.css';

export const Header = () => {
  return (
    <div>
      <NavLink>Home</NavLink>
      <NavLink>Movie</NavLink>
    </div>
  );
};
