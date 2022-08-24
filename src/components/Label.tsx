import { LabelHTMLAttributes, PropsWithChildren } from 'react';

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  labelClassName: string;
}

export const Label = ({
  children,
  labelClassName = '',
  ...props
}: PropsWithChildren<LabelProps>) => (
  <label className={`label ${labelClassName}`} {...props}>
    {children}
  </label>
);
