import React, { FC, ReactNode, ReactElement } from 'react';

type PropTypes<T> = {
  children: (item: T) => ReactNode;
  items: Array<T>;
}

export const Component5: FC<PropTypes<string>> = ({ items, children }: PropTypes<string>): ReactElement => (
  <div>
    {
        items.map((item) => (
          children(item)
        ))
      }
  </div>
);

const el = (
  <Component5 items={['str1', 'str2']}>
    {(item): ReactNode => <p>{ item }</p>}
  </Component5>
);
