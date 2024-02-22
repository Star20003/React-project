
import { FC } from 'react';
import { ItemProps } from './Props';
import { Link } from 'react-router-dom';

const Item: FC<ItemProps> = ({ icon, className, ...restProps }) => {
    
    const mergedClassName = className ? `${className} ` : '';

    return (
        <Link to={'#'}>
            <div
                {...restProps}
                className={`rounded-full w-[4.4rem] h-[4.4rem] bg-gray-200 flex justify-center items-center hover:shadow-blue-200 hover:shadow-lg transition-all duration-500 hover:scale-105 hover:border-2 hover:border-blue-200`}
            >
                <img src={icon} className={`${mergedClassName}`} />
            </div>
        </Link>
    );
}

export default Item;
