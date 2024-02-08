import { FC } from "react";
import { SearchBarProps } from "./Props";

const SearchBar :FC<SearchBarProps> = ({placeholderText, iconTop, iconLeft, ...restProps}) => {
    return ( 
        <>
            <input {...restProps} className= {`${restProps.className} flex justify-start items-center relative ff-Inter`} placeholder={placeholderText}/>
                <img src="/search.png" className="w-6 h-6 absolute" style={{ top: iconTop, left: iconLeft }}></img>
        </>
     );
}
 
export default SearchBar;