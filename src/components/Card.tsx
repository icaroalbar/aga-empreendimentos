import { ReactElement } from "react";
import { AboutProps } from "./@types";

export function Card({ title, icon, content, key }: AboutProps): ReactElement {
  return (
    <div
      key={key}
      className="col-span-1 flex flex-col items-center text-primary-10 my-10"
    >
      <div className="bg-primary-20 w-40 h-40 flex justify-center items-center text-white text-8xl rounded-full shadow-xl">
        {icon}
      </div>
      <h2 className="text-center my-10 uppercase text-2xl font-semibold">
        {title}
      </h2>
      <p className="text-justify text-lg px-5 leading-8">{content}</p>
    </div>
  );
}
