"use client";

import React from "react";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import { Mail, User } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  InputGroup,
  InputField,
  SelectField,
  TextAreaField,
} from "@/components/ui/inputGroup";
import {
  contactLinks,
  institutionArea,
  interestAreas,
} from "@/constants/formConstant";
import { FaLinkedin } from "react-icons/fa";

export interface ContactFormInputsProps {
  name: string;
  email: string;
  linkedin: string;
  institutionArea: string;
  interestArea: string;
  about: string;
}

interface ContactFormSectionProps {
  onSubmit: SubmitHandler<ContactFormInputsProps>;
}

export function ContactFormSection({ onSubmit }: ContactFormSectionProps) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ContactFormInputsProps>();

  return (
    <section className="bg-card-background container py-12 lg:py-20">
      <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-12 px-2 md:px-8 overflow-hidden">
        {/* Informações de contato */}
        <div className="flex-1 flex flex-col space-y-5">
          <header>
            <h2 className="text-2xl md:text-4xl font-bold leading-snug text-primary">
              Está interessado?
            </h2>
            <h2 className="text-2xl md:text-4xl font-bold leading-snug">
              Entre em contato conosco.
            </h2>
          </header>

          <p className="text-foreground/70 max-w-lg">
            Preencha o formulário que entraremos em contato o mais rápido
            possível.
          </p>

          <h3 className="text-xl md:text-2xl font-semibold">
            Informações de contato
          </h3>

          <div className="space-y-3">
            {contactLinks.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="flex flex-row justify-start items-center gap-2 text-sm hover:text-primary transition-colors"
              >
                {item.icon &&
                  React.createElement(item.icon, {
                    size: 20,
                    className: "w-6 h-6 text-primary",
                  })}
                <span className="break-words whitespace-normal flex-1">
                  {item.title}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Formulário */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex-1 flex flex-col space-y-4 w-full"
        >
          <div className="flex flex-col md:flex-row gap-3">
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
                placeholder="exemplo@email.com"
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

          <div className="flex flex-col md:flex-row gap-3">
            <InputGroup
              inputLabel="Instituição"
              invalid={errors.institutionArea}
            >
              <SelectField
                className={
                  watch("institutionArea") === ""
                    ? "text-muted-foreground"
                    : "text-foreground"
                }
                defaultValue=""
                {...register("institutionArea", {
                  required: "Área de interesse é obrigatória",
                })}
              >
                <option value="" className="text-muted-foreground text-sm">
                  Selecione
                </option>
                {institutionArea.map((item) => (
                  <option key={item.id} value={item.text} className="text-sm">
                    {item.text}
                  </option>
                ))}
              </SelectField>
            </InputGroup>
            <InputGroup
              inputLabel="Área de interesse"
              invalid={errors.interestArea}
            >
              <SelectField
                className={
                  watch("interestArea") === ""
                    ? "text-muted-foreground"
                    : "text-foreground"
                }
                defaultValue=""
                {...register("interestArea", {
                  required: "Área de interesse é obrigatória",
                })}
              >
                <option value="" className="text-muted-foreground text-sm">
                  Selecione
                </option>
                {interestAreas.map((item) => (
                  <option key={item.id} value={item.text} className="text-sm">
                    {item.text}
                  </option>
                ))}
              </SelectField>
            </InputGroup>
          </div>

          <InputGroup
            inputIcon={<FaLinkedin className="w-5 h-5" />}
            inputLabel="LinkedIn"
            invalid={errors.name}
          >
            <InputField
              placeholder="Insira a url do seu LinkedIn"
              type="url"
              {...register("linkedin", { required: "Nome é obrigatório" })}
            />
          </InputGroup>

          <InputGroup inputLabel="Sobre você" invalid={errors.about}>
            <TextAreaField
              placeholder="Fale um pouco sobre você e o motivo de querer ingressar."
              {...register("about", {
                required: "Sobre é obrigatório",
                maxLength: { value: 255, message: "Máximo 255 caracteres" },
              })}
            />
          </InputGroup>

          <Button
            type="submit"
            variant="primary"
            className="w-full justify-center md:w-auto"
          >
            Enviar
          </Button>
        </form>
      </div>
    </section>
  );
}
