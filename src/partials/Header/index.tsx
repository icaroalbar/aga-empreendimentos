import { ReactElement } from "react";
import { Button } from "../../components/Button";
import { data } from "./data";

export function Header(): ReactElement {
  return (
    <section className="bg-header bg-cover bg-right py-36 md:py-0 md:h-screen flex px-10 justify-start items-center">
      {data.map((item, index) => (
        <div
          key={index}
          className="text-white flex flex-col gap-y-2 text-center md:text-start lg:w-2/4"
        >
          <h1 className="text-4xl uppercase tracking-wide leading-[3rem]">
            {item.title}
          </h1>
          <h3 className="text-3xl font-light mb-6">{item.subtitle}</h3>
          <a href="#contact">
            <Button title="saiba mais" size="md" />
          </a>
        </div>
      ))}
    </section>
  );
}
