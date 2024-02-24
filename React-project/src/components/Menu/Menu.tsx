import { FC } from "react";
import { Link } from "react-router-dom";
import { MenuProps } from "./Props";

const Menu: FC<MenuProps> = ({
    Home,
    MyCourse,
    Bookmark,
    Chat,
    Profile,
    IconBottom,
    IconLeft,
    homeClass,
    myCourseClass,
    bookmarkClass,
    chatClass,
    profileClass
}) => {
    return (
        <div className="mt-6 rounded-tl-2xl rounded-tr-2xl w-full h-28 border-t-2 flex flex-col" style={{ boxShadow: "0px -5px 15px rgba(0, 0, 0, 0.1)" }}>
            <div className="flex justify-between px-6 pt-4 items-center relative">
                <Link to={"/home"}>
                    <div className="flex flex-col justify-center items-center gap-1">
                        <div className="bg-blue-500 rounded-br-full rounded-bl-full w-6 h-3 absolute" style={{ bottom: IconBottom, left: IconLeft }}></div>
                        <img src={Home} className="w-[1.45rem] h-[1.45rem]"></img>
                        <h1 className={`text-xs ${homeClass}`}>Home</h1>
                    </div>
                </Link>
                <Link to={"/course/ongoing"}>
                    <div className="flex flex-col justify-center items-center gap-1">
                        <img src={MyCourse} className="w-6 h-6"></img>
                        <h1 className={`text-xs ${myCourseClass}`}>My Course</h1>
                    </div>
                </Link>
                <Link to={"#"}>
                    <div className="flex flex-col justify-center items-center gap-1">
                        <img src={Bookmark} className="w-[1.42rem] h-[1.42rem]"></img>
                        <h1 className={`text-xs ${bookmarkClass}`}>Bookmark</h1>
                    </div>
                </Link>
                <Link to={"#"}>
                    <div className="flex flex-col justify-center items-center gap-1">
                        <img src={Chat} className="w-[1.35rem] h-[1.35rem]"></img>
                        <h1 className={`text-xs ${chatClass}`}>Chat</h1>
                    </div>
                </Link>
                <Link to={"#"}>
                    <div className="flex flex-col justify-center items-center gap-1">
                        <img src={Profile} className="w-[1.75rem] h-[1.75rem]"></img>
                        <h1 className={`text-xs ${profileClass} mb-[0.4rem]`}>Profile</h1>
                    </div>
                </Link>
            </div>
            <div className="mt-2 flex items-center">
                <svg width="375" height="34" viewBox="0 0 375 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="121" y="21" width="134" height="5" rx="2.5" fill="#242424" />
                </svg>
            </div>
        </div>
    );
}

export default Menu;
