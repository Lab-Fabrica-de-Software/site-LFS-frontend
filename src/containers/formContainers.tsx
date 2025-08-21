import { areaInteresse, contatosLink } from "@/constants/formConstant";
import { FormSection } from "@/sections/formSection";
import React from "react";

export default function FormContainer() {

  return (
    <FormSection
      contatos={contatosLink}
      areaInteresse={areaInteresse}
    />
  );
}
