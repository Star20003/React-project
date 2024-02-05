import { FC } from "react";
import { ButtonProps } from "./Props";

const Button : FC<ButtonProps> = ({Text, ...restProps}) => {
    return ( 
        <button
        {...restProps}
        className= {`${restProps.className} flex justify-center items-center`}
        style={{ backgroundColor: '#0961F5' , borderRadius: '78px' }}>
        <span className="flex justify-center items-center p-3 text-base font-medium text-white">{Text}</span>
        </button>
     );
}
 
export default Button;