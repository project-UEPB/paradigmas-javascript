/* eslint-disable react/button-has-type */
import React from 'react';

export const Botao = ({ text, onClick, active = '' }) => (
  <button
    className={active}
    onClick={onClick}
  >
    {text}
  </button>
);
