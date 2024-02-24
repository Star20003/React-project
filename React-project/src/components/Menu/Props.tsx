import React from "react"

export interface MenuProps extends React.HTMLAttributes<HTMLDivElement>{
    Home : string;
    MyCourse: string;
    Bookmark: string;
    Chat: string;
    Profile: string;
    homeClass : string;
    myCourseClass: string;
    bookmarkClass: string;
    chatClass: string;
    profileClass: string;
    IconBottom: string;
    IconLeft: string;
}