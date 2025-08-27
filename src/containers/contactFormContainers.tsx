import {
  ContactFormSection,
  ContactFormInputsProps,
} from "@/sections/formSection";
import React from "react";
import { SubmitHandler } from "react-hook-form";

export default function ContactFormContainer() {
  const onSubmit: SubmitHandler<ContactFormInputsProps> = (data) => {
    
  };

  return <ContactFormSection onSubmit={onSubmit} />;
}
