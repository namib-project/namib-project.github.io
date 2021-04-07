import { classes } from "../utils/misc";

export enum ButtonSize {
    XS = "XS",
    SM = "SM",
    MD = "MD",
    LG = "LG",
    XL = "XL"
};

interface IButtonParams {
    children?: any;
    type?: "button" | "submit" | "reset";
    size?: ButtonSize;
    className?: string;
    onClick?: any;
    disabled?: boolean;
    full?: boolean;
}

const Button = ({ children, type = "button", size = ButtonSize.MD, className = "", onClick = () => {}, disabled, full }: IButtonParams) => {
    return (
        <button type={ type } onClick={ onClick } disabled={ disabled }
                className={ classes("inline-flex items-center border border-transparent shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 transition duration-300",
                    "text-white-soft hover:text-black-18 bg-black-18 hover:bg-gray-200 focus:ring-black-18",
                    size === ButtonSize.XS && "px-7 py-3 text-base font-medium",
                    size === ButtonSize.SM && "px-10 py-4 text-base font-medium",
                    size === ButtonSize.MD && "px-12 py-5 text-lg font-medium",
                    size === ButtonSize.LG && "px-14 py-6 text-xl font-medium",
                    size === ButtonSize.XL && "px-16 py-7 text-xl font-medium",
                    full && "w-full flex justify-center",
                    disabled && "disabled",
                    className
                ) }>
            { children }
        </button>
    )
}

export default Button;
