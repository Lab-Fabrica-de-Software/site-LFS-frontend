import React from "react";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import { Building, Mail, User } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  InputGroup,
  InputField,
  SelectField,
  TextAreaField,
} from "@/components/ui/inputGroup";
import { contactLinks, interestAreas } from "@/constants/formConstant";

export interface InputsProps {
  name: string;
  email: string;
  institution: string;
  interestArea: string;
  about: string;
}

interface FormSectionProps {
  onSubmit: SubmitHandler<InputsProps>;
}

export function FormSection({ onSubmit }: FormSectionProps) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<InputsProps>();

  return (
    <section className="bg-card-background flex flex-col lg:flex-row justify-between lg:items-center lg:gap-10 container py-10 ">
      {/* Informações de contato */}
      <div className="flex flex-2 m-5 flex-col space-y-3">
        <header>
          <h2 className="text-3xl font-semibold">Está interessado?</h2>
          <h2 className="text-3xl font-semibold">Entre em contato conosco.</h2>
        </header>
        <p className="text-foreground/70 ">
          Preencha o formulário, que entraremos em contato o mais rápido
          possível.
        </p>
        <h3 className="text-2xl font-semibold">Informações de contato</h3>
        <div className="grid justify-items-start">
          {contactLinks.map((item, index) => (
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
              <span className="text-primary">{item.title}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Formulário */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex-4 flex flex-col m-5 "
      >
        <div className="flex flex-col md:flex-row gap-5">
          <InputGroup
            inputIcon={<User className="w-5 h-5" />}
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
            inputIcon={<Mail className="w-5 h-5" />}
            inputLabel="E-mail"
            invalid={errors.email}
          >
            <InputField
              placeholder="Ex: seu@email.com"
              type="text"
              {...register("email", {
                required: "E-mail obrigatório",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Formato de e-mail inválido",
                },
              })}
            />
          </InputGroup>
        </div>

        <div className="mt-5 flex flex-col md:flex-row gap-5">
          <InputGroup
            inputIcon={<Building className="w-5 h-5" />}
            inputLabel="Instituição"
            invalid={errors.institution}
          >
            <InputField
              placeholder="Ex: Fatec Itu"
              type="text"
              {...register("institution", {
                required: "Instituição é obrigatória",
              })}
            />
          </InputGroup>

          <InputGroup
            inputLabel="Área de interesse"
            invalid={errors.interestArea}
          >
            <SelectField
              className={
                watch("interestArea") === "" ? "text-gray-500" : "text-gray-300"
              }
              defaultValue=""
              {...register("interestArea", {
                required: "Área de interesse é obrigatória",
              })}
            >
              <option className="text-gray-500 text-sm" value="">
                Selecione uma área de interesse
              </option>
              {interestAreas.map((item) => (
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

        <div className="mt-5">
          <InputGroup inputLabel="Sobre você" invalid={errors.about}>
            <TextAreaField
              placeholder="Uma breve descrição sobre você, além do motivo de querer ingressar."
              {...register("about", {
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
    </section>
  );
}
