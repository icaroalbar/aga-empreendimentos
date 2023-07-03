import { ReactElement } from "react";
import { TextareaProps } from "./@types";

export function Textarea({
  placeholder,
  register,
  name,
  cols = 30,
  rows = 10,
  ...props
}: TextareaProps): ReactElement {
  return (
    <div className="relative">
      <textarea
        {...props}
        cols={cols}
        rows={rows}
        {...register(name)}
        required
        className="w-full text-white resize-none px-2 py-1 border-2 duration-150 ease-in-out bg-transparent border-slate-400 rounded outline-none focus:border-2 focus:border-secondary-10"
      />
      <label className="absolute left-4 text-sm text-slate-400 pointer-events-none translate-y-2 focus:translate-y-10 duration-500 ease-in-out selection:bg-zinc-500">
        {placeholder}
      </label>
    </div>
  );
}
