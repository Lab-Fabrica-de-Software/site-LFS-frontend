import { ChevronDown } from "lucide-react";
import React, { ComponentProps } from "react";
import { FieldError } from "react-hook-form";
import { twMerge } from "tailwind-merge";

interface InputGroupProps extends ComponentProps<"div"> {
  inputLabel?: string;
  inputIcon?: React.ReactNode;
  invalid: FieldError | undefined;
}

export function InputGroup({
  invalid,
  inputLabel,
  inputIcon,
  children,
  ...props
}: InputGroupProps) {
  const baseClasses =
    "group transition-all bg-background border  rounded-md p-3 flex flex-row items-center gap-3";

  const classes = twMerge(
    baseClasses,
    invalid
      ? "border-red-500 focus-within:border-red-800"
      : "focus-within:border-primary"
  );
  return (
    <div className="flex flex-col gap-1 w-full">
      {inputLabel && <label className="text-gray-300">{inputLabel}</label>}

      <div className={classes} {...props}>
        {inputIcon && (
          <span className="text-gray-500 transition-all group-focus-within:text-gray-100">
            {inputIcon}
          </span>
        )}

        {children}
      </div>
      {invalid && <span className="text-red-500">{invalid?.message}</span>}
    </div>
  );
}

const FieldStyles = "bg-transparent placeholder-gray-500 transition-all outline-0 flex-1 text-gray-300";

export function InputField(props: ComponentProps<"input">) {
  return <input className={FieldStyles} {...props} />;
}

export function TextAreaField(props: ComponentProps<"textarea">) {
  return (
    <textarea
      className={`${FieldStyles} resize-none min-h-[120px]`}
      {...props}
    />
  );
}

export function SelectField({ children, ...props }: ComponentProps<"select">) {
  return (
    <div className="relative flex-1">
      <select
        className="appearance-none w-full outline-0 mr-8 cursor-pointer text-gray-300 text-xs"
        {...props}
      >
        {children}
      </select>

      <ChevronDown className="pointer-events-none absolute inset-y-0 right-0" />
    </div>
  );
}
