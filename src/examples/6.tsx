import React, { FC, ReactElement } from 'react';

const styles = {
  primary: {
    color: 'blue',
  },
  danger: {
    color: 'red',
  },
};

type StylesType = typeof styles;

type ButtonType = keyof StylesType;

type PropTypes = {
  type: ButtonType;
}

export const Button: FC<PropTypes> = ({ type }: PropTypes): ReactElement => (
  <button style={styles[type]} type="button">
    Click me
  </button>
);

const b = <Button type="primary" />;
