import { ReactElement } from "react";
import { data } from "./data";
import Image from "next/image";
import Link from "next/link";

export function Nav(): ReactElement {
  return (
    <nav className="flex z-50 fixed w-full justify-end items-center px-20 py-5 bg-primary-10 border-b-4 border-secondary-10 shadow-lg">
      <div className="absolute top-2 left-24">
        <Link href="/">
          <Image
            src="./logoAga.svg"
            alt="Logo Agá Empreendimentos"
            width={90}
            height={90}
          />
        </Link>
      </div>
      <ul className="flex gap-5">
        {data.map((item, index) => (
          <li key={index}>
            <Link
              href={item.href}
              className="text-zinc-200 hover:text-white capitalize font-medium"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
