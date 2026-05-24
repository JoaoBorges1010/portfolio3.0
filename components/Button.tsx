import { twMerge } from "tailwind-merge";
import { forwardRef } from "react";

type ButtonVariant = "default" | "primary" | "action";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

const variantClasses: Record<ButtonVariant, string> = {
  default: `
      w-full
      rounded-full
      bg-green-500
      border
      border-transparent
      px-3
      py-3
      disabled:cursor-not-allowed
      disabled:opacity-50
      text-black
      font-bold
      hover:opacity-75
      transition
    `,
  primary: `
      w-full
      rounded-none
      px-10
      py-3
      shadow-custom
      text-basic-white
      uppercase
      font-semibold
      border
      border-transparent
      disabled:cursor-not-allowed
      disabled:opacity-50
      hover:opacity-75
      transition
    `,
  action: `
      flex
      justify-between
      sm:text-[16px]
      text-[14px]
      text-basic-white
      font-bold
      items-center
      py-5
      pl-2
      pr-3
      whitespace-nowrap
      gap-1
      sm:w-[138px]
      sm:h-[50px]
      w-[125px]
      h-[46px]
      rounded-[10px]
      sm:mt-[22px]
      mt-[16px]
      hover:opacity-70
      hover:uppercase
      hover:scale-110
      transition
      duration-300
      ease-in
      shadow-custom
      border
      border-transparent
      disabled:cursor-not-allowed
      disabled:opacity-50
    `,
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, disabled, type = "button", variant = "default", ...props }, ref) => {
    return (
      <button
        type={type}
        className={twMerge(variantClasses[variant], className)}
        disabled={disabled}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
