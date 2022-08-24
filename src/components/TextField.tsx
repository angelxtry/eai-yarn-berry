import { forwardRef, InputHTMLAttributes, ReactNode } from 'react';
import { Label } from '@/components/Label';

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label?: ReactNode;
  labelClassName?: string;
  helper?: string;
}

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ id, className = '', label, labelClassName = '', helper, ...props }, ref) => (
    <div className='label-col'>
      {label && (
        <Label htmlFor={id} labelClassName={labelClassName}>
          {label}
        </Label>
      )}
      <input
        ref={ref}
        id={id}
        className={`${helper ? 'border-error' : ''} ${className}`}
        {...props}
      />
      {helper && <p className='text-error text-sm'>{helper}</p>}
    </div>
  ),
);

TextField.displayName = 'TextField';
