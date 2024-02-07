import { ReactNode } from "react";


export interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: ReactNode;
    type: string
    helperText?: ReactNode;
    icon?: ReactNode;
    iconTop?: string;
    iconLeft?: string;
  }