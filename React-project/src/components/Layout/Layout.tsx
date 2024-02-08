import { FC } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

const Layout: FC = () => {
    const location = useLocation();

    if (location.pathname === "/home" || location.pathname === "/courseDetail/about" || location.pathname === "/courseDetail/lessons" || location.pathname === "/courseDetail/reviews" ) {
        return (
            <>
                <div className="flex justify-center">
                    <div className="w-96 shadow-md">
                        <Outlet/>
                    </div>
                </div>
            </>
        );
    }

    return (
        <>
            <div className="flex justify-center">
                <div className="w-96 p-6 shadow-md">
                    <Outlet/>
                </div>
            </div>
        </>
    );
}

export default Layout;
