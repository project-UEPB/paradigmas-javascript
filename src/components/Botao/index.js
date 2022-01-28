/* eslint-disable react/button-has-type */
import React from 'react';

export const Botao = ({
  text, onClick, active = '', title = '',
}) => (
  <button
    className={active}
    onClick={onClick}
    title={title}
  >
    {text}
  </button>
);
