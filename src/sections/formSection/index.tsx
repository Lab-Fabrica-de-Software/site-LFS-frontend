import { Button } from "@/components/ui/button";
import {
  InputGroup,
  InputField,
  SelectField,
  TextAreaField,
} from "@/components/ui/inputGroup";
import { SelectOptions } from "@/types/selectOptions";
import { Building, Mail, User } from "lucide-react";
import Link from "next/link";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface Inputs {
  name: string;
  email: string;
  instituicao: string;
  area: string;
  sobre: string;
}
interface FormSectionProps {
  areaInteresse: SelectOptions[];
  contatos: any[];
}
export function FormSection({ areaInteresse, contatos }: FormSectionProps) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    /* Espaço para envio dos dados*/
    console.log("Enviado:", data);
  };

  return (
    <div className="bg-card-background flex flex-col lg:flex-row p-10 justify-between container">
      {/*Coluna da direita*/}
      <div className=" flex flex-1 flex-col space-y-5 text-start">
        <div className="text-2xl md:text-3xl font-semibold">
          <h2>Está interessado?</h2>
          <h2>Entre em contato conosco.</h2>
        </div>
        <p className="text-foreground/70 text-md">
          Preencha o formulário, que entraremos em contato o mais rápido
          possível.
        </p>

        <h3 className="text-xl font-semibold">Informações de contato</h3>

        {contatos.map((item, index) => (
          <div>
            <Link
              key={index}
              href={item.href}
              className="hover:text-primary inline-flex text-lg items-center gap-2 py-2"
            >
              {item.icon &&
                React.createElement(item.icon, {
                  size: 20,
                  className: "w-7 h-7",
                })}
              <span className="text-primary"> {item.title}</span>
            </Link>
          </div>
        ))}
      </div>

      {/*Coluna da esquerda*/}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex-1 flex flex-col space-y-2 text-start"
      >
        <div className="flex flex-col md:flex-row gap-5">
          <InputGroup
            inputIcon={<User className="w-4 h-4" />}
            inputLabel="Nome"
            invalid={errors.name}
          >
            <InputField
              placeholder="Seu nome completo"
              type="text"
              {...register("name", { required: "Nome é obrigatório" })}
            />
          </InputGroup>

          <InputGroup
            inputIcon={<Mail className="w-4 h-4" />}
            inputLabel="E-mail"
            invalid={errors.email}
          >
            <InputField
              placeholder="Ex: seu@email.com"
              type="text"
              {...register("email", {
                required: "E-mail obrigatório",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // verifica se o formato de email é valido
                  message: "Formato de e-mail inválido",
                },
              })}
            />
          </InputGroup>
        </div>
        <div className="mt-5">
          <div className="flex flex-col md:flex-row gap-5">
            <InputGroup
              inputIcon={<Building className="w-4 h-4" />}
              inputLabel="Instituição"
              invalid={errors.instituicao}
            >
              <InputField
                placeholder="Ex: Fatec Itu"
                type="text"
                {...register("instituicao", {
                  required: "Instituição é obrigatória",
                })}
              />
            </InputGroup>

            <InputGroup inputLabel="Área de interesse" invalid={errors.area}>
              <SelectField
                className={
                  watch("area") === "" ? "text-gray-500" : "text-gray-300"
                }
                defaultValue=""
                {...register("area", {
                  required: "Área de interesse é obrigatória",
                })}
              >
                <option className="text-gray-500 text-sm" value="">
                  Selecione uma área de interesse
                </option>
                {areaInteresse.map((item) => (
                  <option
                    className="text-gray-300 text-sm"
                    key={item.id}
                    value={item.text}
                  >
                    {item.text}
                  </option>
                ))}
              </SelectField>
            </InputGroup>
          </div>
        </div>

        <div className="mt-5">
          <InputGroup inputLabel="Sobre você" invalid={errors.sobre}>
            <TextAreaField
              placeholder="Uma breve descrição sobre você, além do motivo de querer ingressar."
              {...register("sobre", {
                required: "Sobre é obrigatório",
                maxLength: { value: 255, message: "Máximo 255 caracteres" },
              })}
            />
          </InputGroup>
        </div>

        <Button className="justify-center mt-5" type="submit" variant="primary">
          Enviar
        </Button>
      </form>
    </div>
  );
}
