import {
  FormSection,
  InputsProps,
} from "@/sections/formSection";
import React from "react";
import { SubmitHandler } from "react-hook-form";

export default function FormContainer() {
  const onSubmit: SubmitHandler<InputsProps> = (data) => {
    
  };

  return <FormSection onSubmit={onSubmit} />;
}
