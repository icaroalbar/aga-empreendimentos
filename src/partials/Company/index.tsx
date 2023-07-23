import { ReactElement } from "react";
import { Button } from "../../components/Button";
import { data } from "./data";

export function Company(): ReactElement {
  return (
    <section className="grid grid-cols-5 h-[85vh]">
      <div className="col-span-2 hidden lg:flex bg-about bg-cover" />
      {data.map((item, index) => (
        <div
          key={index}
          className="col-span-5 lg:col-span-3 text-center lg:text-start flex flex-col justify-center gap-y-4 px-10"
        >
          <h1 className="font-medium capitalize text-3xl">{item.title}</h1>
          <p className="text-primary-10 font-light text-xl text-justify">
            {item.content}
          </p>
          <h4 className="font-semibold text-xl">{item.subtitle}</h4>
          <a href="#contact">
            <Button title="saiba mais" size="md" />
          </a>
        </div>
      ))}
    </section>
  );
}
