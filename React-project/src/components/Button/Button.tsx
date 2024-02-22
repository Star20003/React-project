import { FC } from "react";
import { ButtonProps } from "./Props";

const Button : FC<ButtonProps> = ({Text, ...restProps}) => {
    return ( 
        <button
        {...restProps}
        className= {`${restProps.className} flex justify-center items-center transition-all bg-blue-600 bg-blue btn duration-300`}
        style={{borderRadius: '78px'}}>
        <span className="flex justify-center items-center p-3 text-base font-medium text-white">{Text}</span>
        </button>
     );
}
 
export default Button;