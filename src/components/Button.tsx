import { clsx } from "clsx";
import { ReactElement } from "react";
import { iconProcessing } from "../utils/icons";
import { ButtonProps } from "../@types";

export const Button = ({
  title = "saiba mais",
  size = "md",
  disableTitle = "Aguarde...",
  disabled = false,
  ...props
}: ButtonProps): ReactElement => {
  const disableModel = (
    <div className={`flex gap-x-2 items-center justify-center`}>
      {iconProcessing}
      {disableTitle}
    </div>
  );

  return (
    <div className={`${disabled && "cursor-not-allowed"}`}>
      <button
        {...props}
        disabled={disabled}
        className={clsx(
          `uppercase font-medium text-white select-none rounded transition-colors shadow-md outline-none bg-primary-10 hover:bg-primary-20 ${
            disabled && "bg-slate-500 pointer-events-none"
          } ${title && ""}`,
          {
            "px-6 py-2 text-sm": size == "sm",
            "px-20 py-2 text-base": size == "md",
            "px-16 py-4 text-lg": size == "lg",
            "block w-full py-2 text-lg border-2 border-slate-400":
              size == "full",
          }
        )}
      >
        {disabled ? disableModel : title}
      </button>
    </div>
  );
};
