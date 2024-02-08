import { FC, useId } from "react";
import { TextFieldProps } from "./Props";

const TextField: FC<TextFieldProps> = ({
  label,
  type,
  helperText,
  icon,
  iconTop,
  iconLeft,
  ...restProps
}) => {
  const id = useId();
  
  return (

    <div className="mx-2 mb-4">

        {label && (
            <label htmlFor={id} className="text-xs font-medium text-gray-600 ff-Inter">{label}</label>
        )}

        {icon && (
          <div className="absolute" style={{ top: iconTop, left: iconLeft }}>{icon}</div>
          )}

        <input
           {...restProps}
           type={type}
           className= 'focus:ring-blue-500 focus:border-blue-500 w-80 h-10 px-4 mt-1 bg-slate-100 border border-slate-100 text-xs rounded-lg flex items-center justify-start placeholder:text-gray-500'
           id={id}></input>
    
       {helperText && (
          <p className=" mb-1 ml-2 text-xs font-medium text-gray-400">{helperText}</p>
        )}

    </div>
  );
};

export default TextField;