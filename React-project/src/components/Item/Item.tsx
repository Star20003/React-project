
import { FC } from 'react';
import { ItemProps } from './Props';
import { Link } from 'react-router-dom';

const Item: FC<ItemProps> = ({ icon, className, ...restProps }) => {
    
    const mergedClassName = className ? `${className} ` : '';

    return (
        <Link to={'#'}>
            <div
                {...restProps}
                className={`rounded-full w-[4.4rem] h-[4.4rem] bg-gray-200 flex justify-center items-center`}
            >
                <img src={icon} className={`${mergedClassName}`} />
            </div>
        </Link>
    );
}

export default Item;
