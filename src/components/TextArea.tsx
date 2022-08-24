import { forwardRef, TextareaHTMLAttributes } from 'react';
import { Label } from './Label';

export interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  id: string;
  label?: string;
  labelClassName?: string;
  helper?: string;
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ id, className = '', label, labelClassName = '', helper, ...props }, ref) => (
    <div className='label-col'>
      {label && (
        <Label htmlFor={id} labelClassName={labelClassName}>
          {label}
        </Label>
      )}
      <textarea
        ref={ref}
        id={id}
        className={`textarea ${helper ? 'border-error' : ''} ${className}`}
        {...props}
      />
      {helper && <p className='text-error text-sm'>{helper}</p>}
    </div>
  ),
);
