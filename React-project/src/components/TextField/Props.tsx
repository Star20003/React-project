/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from "react";


export interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: ReactNode;
    type: string
    helperText?: ReactNode | string;
    icon?: string;
    iconTop?: string;
    iconLeft?: string;
    validation?: any;
  }