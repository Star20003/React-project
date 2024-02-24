import React from "react"

export interface CourseProps extends React.HTMLAttributes<HTMLDivElement>{
    image : string;
    type: string;
    typeWidth: string;
    title: string;
    tutor: string;
    state: 'ongoing' | 'completed';
}