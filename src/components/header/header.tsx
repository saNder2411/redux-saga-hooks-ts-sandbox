// Core
import React, { FC, useState } from 'react';

type PropTypes = {
  title?: string;
  children?: never;
};

export const Header: FC<PropTypes> = ({ title }: PropTypes) => {
  const [counter, setCounter] = useState<number>(0);
  const content = typeof title === 'string' ? title.toLocaleUpperCase() : null;

  const increase = (): void => {
    setCounter((prevState) => prevState + 1);
  };

  const decrease = (): void => {
    setCounter((prevState) => prevState - 1);
  };


  return (
    <>
      <h1>{content}</h1>
      <h3>{counter}</h3>
      <button onClick={increase} type="button">+</button>
      <button onClick={decrease} type="button">-</button>
    </>
  );
};

Header.defaultProps = {
  title: 'Welcome',
};
