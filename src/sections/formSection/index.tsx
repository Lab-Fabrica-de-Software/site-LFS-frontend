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

interface FormSectionProps {
  areaInteresse: SelectOptions[];
  contatos: any[];
}
export function FormSection({ areaInteresse, contatos }: FormSectionProps) {
  return (
    <div className="bg-card-background flex flex-col lg:flex-row p-10 gap-5 lg:gap-15 w-full">
      {/* Left*/}
      <div className="flex-1 flex flex-col space-y-2 text-start">
        <h2 className="text-2xl md:text-3xl font-semibold">
          Está interessado? Entre em contato conosco.
        </h2>
        <p className="text-foreground/70">
          Preencha o formulário e entraremos em contato o mais rápido possível.
        </p>

        <h3 className="text-xl font-semibold">Informações de contato</h3>

        {contatos.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="hover:text-primary flex items-center gap-2 py-1.5"
          >
            {item.icon &&
              React.createElement(item.icon, {
                size: 20,
                className: "w-7 h-7",
              })}
            <span className="text-primary"> {item.title}</span>
          </Link>
        ))}
      </div>

      {/*Right*/}
      <div className="flex-1 flex flex-col space-y-2 text-start">
        <div className="flex flex-col md:flex-row gap-5">
         
          <InputGroup
            inputIcon={<User className="w-4 h-4" />}
            inputLabel="Nome"
          >
            <InputField placeholder="Seu nome completo" type="text" />
          </InputGroup>

          <InputGroup
            inputIcon={<Mail className="w-4 h-4" />}
            inputLabel="E-mail"
          >
            <InputField placeholder="Ex: seu@email.com" type="text" />
          </InputGroup>
        </div>
<div className="mt-5">
        <div className="flex flex-col md:flex-row gap-5">
          <InputGroup
            inputIcon={<Building className="w-4 h-4" />}
            inputLabel="Instituição"
          >
            <InputField placeholder="Ex: Fatec Itu" type="text" />
          </InputGroup>

          <InputGroup inputLabel="Área de interesse">
            <SelectField defaultValue="">
              <option>Selecione uma área de interesse</option>
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
          <InputGroup inputLabel="Sobre você">
            <TextAreaField placeholder="Uma breve descrição sobre você, além do motivo de querer ingressar." />
          </InputGroup>
        </div>
       
          <Button
            className="justify-center mt-5"
            onClick={() => {}}
            variant="primary"
          >
            Enviar
          </Button>
        
      </div>
    </div>
  );
}
