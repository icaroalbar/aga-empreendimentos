import { AboutProps } from "@/@types";
import { iconMission, iconView, iconValue } from "@/utils/icons";

export const data: AboutProps[] = [
  {
    title: "missão",
    icon: iconMission,
    content:
      "Entregar produtos de excelência, respeitando todas as normas de Segurança, Qualidade e Meio ambiente, que superem as expectativas de nossos clientes e parceiros.",
  },
  {
    title: "visão",
    icon: iconView,
    content:
      "Ser referência no mercado de Construção Civil em comprometimento, ética profissional e qualidade, se consolidando como uma marca forte e única.",
  },
  {
    title: "valores",
    icon: iconValue,
    content:
      "Ética, Transparência e Integridade, buscando sempre as melhores soluções de mercado e construindo relacionamento de longo prazo com nossos clientes, parceiros e colaboradores.",
  },
];
