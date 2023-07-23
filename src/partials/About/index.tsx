import { ReactElement } from "react";
import { data } from "./data";
import { Card } from "../../components/Card";

export function About(): ReactElement {
  return (
    <section id="about" className="bg-white p-20 gap-x-5">
      <div className="text-center">
        <h1 className="text-4xl capitalize">quem somos</h1>
        <p className="font-light text-lg my-5">
          Somos uma das maiores contrutoras da cidade de Niterói no Rio de
          Janeiro, que atende grandes serviços de empreendimentos imobiliários.
        </p>
      </div>
      <div className="grid grid-cols-3">
        {data.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            content={item.content}
            icon={item.icon}
          />
        ))}
      </div>
    </section>
  );
}
