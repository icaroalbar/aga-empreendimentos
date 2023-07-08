import { ReactElement, useState } from "react";
import { data } from "./data";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { Button } from "../../components/Button";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

export function Contact(): ReactElement {
  const [buttonDisables, setButtonDisabled] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const handleSend: SubmitHandler<any> = (data: any) => {
    setButtonDisabled(true);
    axios.post("/api/hello", data);
    reset();
    toast.success("Cliente cadastrado com sucesso!", {
      position: toast.POSITION.TOP_RIGHT,
    });
    setButtonDisabled(false);
  };

  return (
    <section>
      <ToastContainer />
      <div className="grid grid-cols-2 border-b-2 border-secondary-10">
        <div className="col-span-1 bg-contact bg-cover h-[90vh]" />
        <div className="col-span-1 bg-primary-10 p-10">
          {data.map((item, index) => (
            <div
              key={index}
              className="text-white text-center flex flex-col gap-2"
            >
              <h1 className="text-2xl">{item.title}</h1>
              <p className="font-light">{item.subtitle}</p>
            </div>
          ))}
          <form
            onSubmit={handleSubmit(handleSend)}
            className="flex flex-col gap-3 mt-10"
          >
            <Input name="name" placeholder="Nome*" register={register} />
            <Input
              type="email"
              name="email"
              placeholder="E-mail*"
              register={register}
            />
            <Input
              type="number"
              name="phone"
              placeholder="Telefone*"
              register={register}
            />
            <Textarea
              name="message"
              placeholder="Digite sua mensagem*"
              register={register}
            />
            <Button
              type="submit"
              title="enviar"
              size="full"
              disabled={buttonDisables}
            />
          </form>
        </div>
      </div>
    </section>
  );
}
