import Link from "next/link";
import { data } from "./data";
// import { BsFacebook, BsInstagram, BsLinkedin } from 'react-icons/bs';

export function Footer(): JSX.Element {
  return (
    <footer className="bg-gradient-to-r from-primary-10 to-primary-20 text-zinc-400 px-12 lg:px-36 pt-5">
      <div className="grid grid-cols-4 gap-x-10 gap-y-5">
        <div className="flex flex-col gap-2 col-span-4 md:col-span-2 xl:col-span-1">
          <h3 className="text-md font-semibold text-white pb-2 border-b border-zinc-500">
            Onde estamos
          </h3>
          <a
            href="#"
            target="_blank"
            className="transition-colors text-sm hover:text-white"
          >
            Av. Pref. Silvio Picanço, 463 <br />
            Sala 708/711 <br />
            Charitas - Niterói/RJ <br />
            CEP: 24360-030
          </a>
        </div>
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-2 col-span-4 md:col-span-2 xl:col-span-1"
          >
            <h3 className="text-md font-semibold text-white pb-2 border-b border-zinc-500">
              {item.title}
            </h3>
            <ul className="flex flex-col gap-y-1">
              {item.links.map((subItem, subIndex) => (
                <li key={subIndex}>
                  <Link
                    href={subItem.href}
                    className="transition-colors hover:text-white text-sm"
                  >
                    {subItem.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="text-xs text-center pb-5 pt-10">
        <span>
          &copy; AGÁ Empreendimentos {new Date().getFullYear()} - Todos os
          direitos reservados
        </span>
      </div>
    </footer>
  );
}
