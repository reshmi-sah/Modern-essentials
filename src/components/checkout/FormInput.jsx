
import React from 'react';

const FormInput = ({ 
register,
  name,
  placeholder,
  error,
  type = "text",
  rows,
  validation = {},
  onInput,
  maxLength,
  inputMode,
  isEditing=true,
  disabled = false,
  required = false
 }) => {
  const baseClassName = `resize-none w-full border border-gray-100 p-2 sm:p-3 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-violet-300 focus:border-violet-700 focus:shadow-lg ${
    error ? 'border-gray-400' : 'border-gray-300'
  }`;
  
  const disabledClassName = disabled ? 'bg-gray-100 cursor-not-allowed' : 'bg-white';

  return (
   <div>
      {type === "textarea" ? (
        <textarea
          placeholder={placeholder}
          rows={rows || 4}
          className={`${baseClassName} ${disabledClassName}`}
          {...register(name, { required: required ? `${placeholder} is required` : false })}
          disabled={disabled}
        />
      ) : (
          <input
          type={type}
          placeholder={placeholder}
          onInput={onInput}
           className={`${baseClassName} ${disabledClassName}`}
          {...register(name, { required: required ? `${placeholder} is required` : false })}
          disabled={disabled}
        />
      )}
      {error && <p className="text-red-800 text-sm mt-1">{error.message}</p>}
    </div>
  );
};

export default FormInput;