import { ReactElement } from "react";

interface ButtonProps {
    variant: "primary" | "secondary";
    text: string;
    startIcon?:ReactElement;
    onClick?: () => void;
    fullWidth?: boolean;
    loading?: boolean;
}

const sizeStyle = {
    "sm":"py-1 px-2",
    "md":"py-2 px-4",
    "lg":"py-3 px-6"
}
const defaultstyle ="rounded-md flex px-2 mx-2 py-1 justify-center items-center"

const variantStyles = {
    "primary":"bg-purple-500 text-white",
    "secondary":"bg-purple-200 text-purple-300"
}


export function Button({variant, text, startIcon, onClick, fullWidth, loading}: ButtonProps) {
    return <button onClick={onClick} className={variantStyles[variant] + " " + defaultstyle + `${fullWidth ? " w-full flex justify-center items-center" : ""} ${loading ? "opacity-45	" : ""}`} disabled={loading}>
        <div className="pr-1">
            {startIcon}
        </div>
        {text}
    </button>
}