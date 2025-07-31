import { ChevronDown } from "lucide-react";
import React, { ComponentProps } from "react";

interface InputGroupProps extends ComponentProps<"div"> {
  inputLabel?: string;
  inputIcon?: React.ReactNode;
}

export function InputGroup({ inputLabel, inputIcon, children, ...props }: InputGroupProps) {
  return (
    <div className="flex flex-col gap-1">
      {inputLabel && (
        <label className="text-gray-300">
          {inputLabel}
        </label>
      )}

      <div
        className="group transition-all bg-background border focus-within:border-primary rounded-md p-3 flex flex-row items-center gap-3"
        {...props}
      >
        {inputIcon &&
          <span
            className="text-gray-900 transition-all group-focus-within:text-gray-500"
          >
            {inputIcon}
          </span>
        }

        {children}
      </div>
    </div>
  );
}

const FieldStyles = "bg-transparent placeholder-gray-500 transition-all outline-0 flex-1 text-gray-300";

export function InputField(props: ComponentProps<"input">) {
  return (
    <input className={FieldStyles} {...props} />
  );
}

export function TextAreaField(props: ComponentProps<"textarea">) {
  return (
    <textarea className={`${FieldStyles} resize-none`} {...props} />
  )
}

export function SelectField({ children, ...props }: ComponentProps<"select">) {
  return (
    <div className="relative flex-1">
      <select className="appearance-none w-full outline-0 mr-8 cursor-pointer" {...props}>
        {children}
      </select>

      <ChevronDown className="pointer-events-none absolute inset-y-0 right-0"/>
    </div>
  );
}