import React from "react"

export interface SearchBarProps extends React.InputHTMLAttributes<HTMLInputElement>{
    placeholderText : string;
    iconTop: string;
    iconLeft: string;
}