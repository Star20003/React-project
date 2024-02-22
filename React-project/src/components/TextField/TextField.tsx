import { FC, useId, useState } from "react";
import { TextFieldProps } from "./Props";

const TextField: FC<TextFieldProps> = ({
  label,
  type,
  helperText,
  icon,
  iconTop,
  iconLeft,
  validation,
  ...restProps
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [eyeIcon, setEyeIcon] = useState('/eye-off.svg');
  const id = useId();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
    setEyeIcon(showPassword ? '/eye-off.svg' : '/eye.svg');
  };

  return (
    <div className="mx-2 mb-4 relative">
      {label && (
        <label htmlFor={id} className="text-xs font-medium text-gray-600 ff-Inter">
          {label}
        </label>
      )}

      {icon && type === 'password' && (
        <img
          src={eyeIcon}
          className="absolute w-6 h-6"
          style={{ top: iconTop, left: iconLeft, cursor: "pointer" }}
          onClick={togglePasswordVisibility}
        />
      )}

      <input
        {...restProps}
        type={type === 'password' && showPassword ? 'text' : type}
        className='focus:ring-blue-500 focus:border-blue-500 w-80 h-10 px-4 mt-1 bg-slate-100 border border-slate-100 text-xs rounded-lg flex items-center justify-start placeholder:text-gray-500'
        id={id}
        {...validation}
      />

      {helperText && (
        <p className="mt-1 text-xs font-medium text-red-500">{helperText}</p>
      )}
    </div>
  );
};

export default TextField;
