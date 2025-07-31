import { User } from "lucide-react";
import React, { ComponentProps } from "react";

export function InputRoot(props: ComponentProps<"div">) {
  return (
    <div
      className="group transition-all bg-background h-12 border rounded-md px-4 flex items-center gap-3"
      {...props}
    >
      {props.children}
    </div>
  );
}

export function InputLabel(props: ComponentProps<"span">) {
  return <span className="text-md" {...props} />;
}

export function InputIcon(props: ComponentProps<"span">) {
  return (
    <span
      {...props}
      className="text-gray-500 transition-all group-focus-within:text-gray-100 group-[&:not(:has(input:placeholder-shown))]:text-gray-200 group-data-[error=true]:text-red-500"
    />
  );
}

export function InputField(props: ComponentProps<"input">) {
  return (
    <input
      className="bg-transparent placeholder-gray-500 transition-all outline-0 flex-1 text-gray-300"
      {...props}
    />
  );
}

export function TextAreaField(props: ComponentProps<"textarea">) {
  return <textarea className="bg-background h-auto border p-2 rounded-md placeholder-gray-500 transition-all focus:outline-0  text-gray-300 resize-none" {...props}></textarea>;
}

export function FormGroup(props: ComponentProps<"div">) {
  return <div className="grid gap-2" {...props} />;
}

export default function InputExemple() {
  return (
    <FormGroup>    
      <InputLabel>aaa</InputLabel> 
      <InputRoot>       
        <InputIcon>
            <User />
        </InputIcon>
        <InputField placeholder="Seu nome complento" />
      </InputRoot>

     <TextAreaField rows={3} />

    </FormGroup>
  );
}
