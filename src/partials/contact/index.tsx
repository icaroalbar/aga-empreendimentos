import { ReactElement, useState } from "react";
import { data } from "./data";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { Button } from "../../components/Button";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

export function Contact(): ReactElement {
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    reset,
    // formState: { errors },
  } = useForm();

  const handleSend: SubmitHandler<any> = (data: any) => {
    try {
      setButtonDisabled(true);
      axios.post("/api/hello", data);
      reset();
      toast.success("Mensagem enviada com sucesso!", {
        position: toast.POSITION.TOP_RIGHT,
      });
      setButtonDisabled(false);
    } catch (error) {
      console.error(error);
      toast.error("Ocorreu um erro. Tente novamente mais tarde.", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  return (
    <section id="contact">
      <ToastContainer />
      <div className="grid grid-cols-2 border-b-2 border-secondary-10">
        <div className="hidden lg:flex col-span-1 bg-contact bg-cover h-[90vh]" />
        <div className="col-span-2 lg:col-span-1 bg-primary-10 p-10">
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
              disabled={buttonDisabled}
            />
          </form>
        </div>
      </div>
    </section>
  );
}
