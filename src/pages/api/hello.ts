// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Telegraf } from "telegraf";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const bot = new Telegraf(`${process.env.NEXT_PUBLIC_BOT_TOKEN}`);
  const { name, email, phone, message } = req.body;

  bot.telegram
    .sendMessage(
      `${process.env.NEXT_PUBLIC_BOT_USER}`,
      `  
            Menssagem do site AGÁ Empreendimentos:
            
            Nome:  ${name}
        
            E-mail:  ${email}  
        
            Telefone:  ${phone}
            
            Mensagem:
            ${message}
        `
    )
    .then((message) => {
      console.log(message);
      res.status(200).json({ message: "Mensagem enviada com sucesso!" });
    })
    .catch((err) => console.log(err));
}
