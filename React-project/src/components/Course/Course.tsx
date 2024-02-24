import { FC } from "react";
import { CourseProps } from "./Props";

const Course: FC<CourseProps> = ({
    image,
    type,
    typeWidth,
    title,
    tutor,
    state,
    ...restProps
}) => {
    return (
        <div className="flex justify-center items-center">
            <div className= {` ${restProps.className} w-[21.5rem] h-32 border-2 rounded-2xl flex justify-start p-2 items-center gap-4 m-0 `}>
                <img src={image} className="w-28 h-28 rounded-lg" alt="Course Image" />
                <div className="">
                    <div className="bg-orange-100 flex justify-center mt-1 items-center h-[1.35rem] rounded-3xl" style={{ width:typeWidth}}><h3 className="text-orange-500 text-xs ff-Inter">{type}</h3></div>
                    <div className="text-sm font-semibold ff-Inter mt-[0.55rem]">{title}</div>
                    <div className="flex justify-start items-center gap-2 mt-[0.4rem]">
                        <img src="/user.jpg" className="w-[1.15rem] h-[1.15rem]" alt="Tutor" />
                        <h1 className="text-gray-500 text-xs ff-Inter">{tutor}</h1>
                    </div>
                    {state === 'ongoing' &&
                        <div className="flex items-center justify-center gap-2">
                            <div className="w-32 h-[0.4rem] mt-3 rounded-2xl bg-gray-200 relative"></div>
                            <div className="w-[5.88rem] h-[0.4rem] mt-3 rounded-2xl bg-blue-500 absolute" style={{ left: "47.6%"}}></div>
                            <h1 className="text-gray-500 text-xs mt-2 ff-Inter">20/25</h1>
                        </div>
                    }
                    {state === 'completed' &&
                        <div className="flex items-center justify-center gap-2">
                            <div className="w-32 h-[0.4rem] mt-3 rounded-2xl bg-gray-200 relative"></div>
                            <div className="w-32 h-[0.4rem] mt-3 rounded-2xl bg-blue-500 absolute left-[47.5%]"></div>
                            <h1 className="text-gray-500 text-xs mt-2 ff-Inter">25/25</h1>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}

export default Course;
