// components/ui/Form.tsx
import { VariantProps, cva } from 'class-variance-authority';
import React, { forwardRef } from 'react';

// Base input styles
const inputBaseStyles = cva(
  'w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder-gray-400 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500',
  {
    variants: {
      state: {
        default: 'border-gray-300',
        error: 'border-red-500 focus:border-red-500 focus:ring-red-500',
        success: 'border-green-500 focus:border-green-500 focus:ring-green-500',
      },
    },
    defaultVariants: {
      state: 'default',
    },
  }
);

// Input
interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputBaseStyles> {
  label?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = 'text', label, error, state, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="mb-1 block text-sm font-medium text-gray-700">
            {label}
          </label>
        )}
        <input
          type={type}
          className={inputBaseStyles({ state, className })}
          ref={ref}
          {...props}
        />
        {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
      </div>
    );
  }
);

Input.displayName = 'Input';

// Textarea
interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof inputBaseStyles> {
  label?: string;
  error?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, state, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="mb-1 block text-sm font-medium text-gray-700">
            {label}
          </label>
        )}
        <textarea
          className={inputBaseStyles({ state, className })}
          ref={ref}
          {...props}
        />
        {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';

// Select
interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement>,
    VariantProps<typeof inputBaseStyles> {
  label?: string;
  error?: string;
  options: { value: string; label: string }[];
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, error, state, options, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="mb-1 block text-sm font-medium text-gray-700">
            {label}
          </label>
        )}
        <select
          className={inputBaseStyles({ state, className })}
          ref={ref}
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
      </div>
    );
  }
);

Select.displayName = 'Select';

// Checkbox
interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, ...props }, ref) => {
    return (
      <label className="flex items-center">
        <input
          type="checkbox"
          className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
          ref={ref}
          {...props}
        />
        <span className="ml-2 text-sm text-gray-700">{label}</span>
      </label>
    );
  }
);

Checkbox.displayName = 'Checkbox';

// Radio
interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ className, label, ...props }, ref) => {
    return (
      <label className="flex items-center">
        <input
          type="radio"
          className="h-4 w-4 border-gray-300 text-primary-600 focus:ring-primary-500"
          ref={ref}
          {...props}
        />
        <span className="ml-2 text-sm text-gray-700">{label}</span>
      </label>
    );
  }
);

Radio.displayName = 'Radio';

// Switch
interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  ({ className, label, ...props }, ref) => {
    return (
      <label className="flex items-center">
        <input type="checkbox" className="sr-only" ref={ref} {...props} />
        <div
          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 ${
            props.checked ? 'bg-primary-600' : 'bg-gray-200'
          }`}
        >
          <span
            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
              props.checked ? 'translate-x-6' : 'translate-x-1'
            }`}
          />
        </div>
        <span className="ml-3 text-sm font-medium text-gray-900">{label}</span>
      </label>
    );
  }
);

Switch.displayName = 'Switch';

// Slider
interface SliderProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Slider = forwardRef<HTMLInputElement, SliderProps>(
  ({ className, label, ...props }, ref) => {
    return (
      <div className="w-full">
        <label className="mb-1 block text-sm font-medium text-gray-700">
          {label}
        </label>
        <input type="range" className="w-full" ref={ref} {...props} />
      </div>
    );
  }
);

Slider.displayName = 'Slider';

// DatePicker
export const DatePicker = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, state, ...props }, ref) => {
    return (
      <Input
        type="date"
        label={label}
        error={error}
        state={state}
        className={className}
        ref={ref}
        {...props}
      />
    );
  }
);

DatePicker.displayName = 'DatePicker';

// TimePicker
export const TimePicker = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, state, ...props }, ref) => {
    return (
      <Input
        type="time"
        label={label}
        error={error}
        state={state}
        className={className}
        ref={ref}
        {...props}
      />
    );
  }
);

TimePicker.displayName = 'TimePicker';

// FileUpload
interface FileUploadProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const FileUpload = forwardRef<HTMLInputElement, FileUploadProps>(
  ({ className, label, error, ...props }, ref) => {
    return (
      <div className="w-full">
        <label className="mb-1 block text-sm font-medium text-gray-700">
          {label}
        </label>
        <input
          type="file"
          className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-700 file:mr-4 file:rounded-md file:border-0 file:bg-primary-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-primary-700 hover:file:bg-primary-100"
          ref={ref}
          {...props}
        />
        {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
      </div>
    );
  }
);

FileUpload.displayName = 'FileUpload';
