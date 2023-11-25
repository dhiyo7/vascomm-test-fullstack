'use client';

import { RenderIf } from '../RenderIf'

const Input = ({
  id,
  label,
  type = 'text',
  disabled,
  formatPrice,
  register,
  placeholder,
  required,
  errors,
}) => {
  return (
    <div className="w-full flex flex-col gap-2">
      <label
        className={`text-base ${
          errors[id] ? 'text-rose-500' : 'text-zinc-800'
        }`}
      >
        {label}
      </label>
      <div className="w-full relative">
        <RenderIf isTrue={formatPrice}>
          <span className="text-neutral-700 absolute top-[1.1rem] left-4">IDR</span>
        </RenderIf>
        <input
          id={id}
          disabled={disabled}
          {...register(id, { required })}
          placeholder={placeholder}
          type={type}
          className={`w-full p-4 font-light bg-white border-2 outline-none transition disabled:opacity-70 disabled:cursor-not-allowed ${
            formatPrice ? 'pl-12' : 'pl-4'
          } ${
            errors[id]
              ? 'border-rose-500 focus:border-rose-500'
              : 'border-neutral-300 focus:border-black'
          }`}
        />
      </div>
    </div>
  );
};

export default Input;
