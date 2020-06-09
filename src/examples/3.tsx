import React, {
  FC,
  ReactElement,
  ReactNode,
  HTMLAttributes,
} from 'react';

export type PropTypes = {
  title?: string;
  children: ReactNode;
  extends: HTMLAttributes<HTMLDivElement>;
}

export const Component3: FC<PropTypes> = ({ children, title, ...other }: PropTypes): ReactElement => (
  <div {...other}>
    {title}
    :
    {children}
  </div>
);

const el = (
  <Component3 extends={{ className: 'sad', color: 'red', tabIndex: 0 }}>
    1
  </Component3>
);
