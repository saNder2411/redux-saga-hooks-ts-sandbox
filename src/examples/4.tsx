import React, {
  FC,
  ReactElement,
  MouseEvent,
  FocusEvent,
} from 'react';

export type PropTypes = {
  onClick: (e: MouseEvent) => void;
}

export const Component4: FC<PropTypes> = ({ onClick }: PropTypes): ReactElement => {
  const onFocus = (e: FocusEvent): void => console.log(e.currentTarget);

  return (
    <button
      type="button"
      onClick={onClick}
      onFocus={onFocus}
      onKeyDown={(e): void => console.log(e.keyCode)}
    >
      Click me
    </button>
  );
};
