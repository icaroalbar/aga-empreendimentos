import { ReactElement } from "react";
import { InputProps } from "../@types";

export function Input({
  placeholder,
  register,
  name,
  ...props
}: InputProps): ReactElement {
  return (
    <div className="relative">
      <input
        required
        {...props}
        {...register(name)}
        className="w-full text-white px-2 py-1 border-2 duration-150 ease-in-out bg-transparent border-slate-400 rounded outline-none focus:border-2 focus:border-secondary-10 selection:bg-zinc-500"
      />
      <label className="absolute left-4 text-sm text-slate-400 pointer-events-none translate-y-2 focus:translate-y-10 duration-500 ease-in-out">
        {placeholder}
      </label>
    </div>
  );
}
