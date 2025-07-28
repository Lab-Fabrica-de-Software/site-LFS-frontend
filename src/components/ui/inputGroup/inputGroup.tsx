import { User } from "lucide-react";
import React, { Children, ComponentProps } from "react";

interface InputRoot extends ComponentProps<"div"> {}

export function InputRoot(props: InputRoot) {
  return (
    <div
      className="group transition-all bg-background h-12 border rounded-md px-4 flex items-center gap-3"
      {...props}>
        <span> Label</span>
      </div>
    
  );
}

interface InputIcon extends ComponentProps<"span"> {}

export function InputIcon(props: InputIcon) {
  return (
    <span
      {...props}
      className="text-gray-500 transition-all group-focus-within:text-gray-100 group-[&:not(:has(input:placeholder-shown))]:text-gray-200 group-data-[error=true]:text-red-500"
    />
  );
}

interface InputField extends ComponentProps<"input"> {}

export function InputField(props: InputField) {
  return (
    <input
      className="bg-transparent placeholder-gray-500 transition-all outline-0 flex-1 text-gray-300"
      {...props}
    />
  );
}

export default function InputExemple() {
  return (
    <InputRoot>
      <InputIcon>
        {" "}
        <User />
      </InputIcon>
      <InputField placeholder="Seu nome complento" />
    </InputRoot>
  );
}
