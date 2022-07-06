import * as React from 'react';

export interface IButtonProps {
  backgroundColor?: string;
  color?: string;
  style?: React.CSSProperties;
  label?: string;
}

export const Button: React.FunctionComponent<IButtonProps> = (props) => {
  const { children, backgroundColor, color, style, label } = props;
  let _style: React.CSSProperties = style || { borderRadius: '8px', padding: '10px 20px', border: 'none'};
  if (backgroundColor) _style.backgroundColor = backgroundColor;
  if (color) _style.color = color;
  return (
    <button style={_style} {...props}>
      {label || children}
    </button>
  );
};
