import { ReactElement } from "react";
import { Button } from "../../components/Button";
import { data } from "./data";

export function Company(): ReactElement {
  return (
    <section className="grid grid-cols-5 h-[85vh]">
      <div className="col-span-2 bg-primary-10" />
      {data.map((item, index) => (
        <div
          key={index}
          className="col-span-3 flex flex-col gap-y-4 px-10 pt-44"
        >
          <h1 className="font-medium capitalize text-3xl">{item.title}</h1>
          <p className="text-primary-10 font-light text-xl text-justify">
            {item.content}
          </p>
          <h4 className="font-semibold text-xl">{item.subtitle}</h4>
          <Button />
        </div>
      ))}
    </section>
  );
}
