import { forwardRef, ReactNode, SelectHTMLAttributes } from 'react';

import { Label } from './Label';

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  id: string;
  label?: ReactNode;
  labelClassName?: string;
  helper?: string;
}

/**
 * @example
 * <Select label="Select" onChange={(e) => console.log(e.target.value)}>
 *   <option disabled selected hidden>placeholder</option>
 *   <option value="1">option 1</option>
 *   <option value="2">option 2</option>
 *   <option value="3">option 3</option>
 * </Select>
 */
export const SelectField = forwardRef<HTMLSelectElement, SelectProps>(
  (
    { id, labelClassName = '', children, className = '', label, helper, ...props },
    ref,
  ) => (
    <div className='label-col'>
      {label && (
        <Label htmlFor={id} labelClassName={labelClassName}>
          {label}
        </Label>
      )}
      <select
        ref={ref}
        id={id}
        className={`${helper ? 'border-error' : ''} ${className}`}
        {...props}
      >
        {children}
      </select>
      {helper && <p className='text-error text-sm'>{helper}</p>}
    </div>
  ),
);
