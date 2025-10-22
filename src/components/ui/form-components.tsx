// form-components.tsx (Styled and Animated Form Components)
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { FormFieldContext, FormItemContext } from "./form-context";
import { useFormField } from "./use-form-field";

interface FormFieldProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> {
  name: TName;
  children: React.ReactNode;
}

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({ name, children }: FormFieldProps<TFieldValues, TName>) => {
  return (
    <FormFieldContext.Provider value={{ name }}>
      {children}
    </FormFieldContext.Provider>
  );
};

const FormItem = ({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  const id = React.useId();

  return (
    <FormItemContext.Provider value={{ id }}>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={cn("space-y-2", className)}
        {...props}
      >
        {children}
      </motion.div>
    </FormItemContext.Provider>
  );
};

const FormLabel = ({ className, ...props }: React.HTMLAttributes<HTMLLabelElement>) => {
  const { formItemId } = useFormField();

  return (
    <motion.label
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      htmlFor={formItemId}
      className={cn("block text-sm font-medium text-blue-300", className)}
      {...props}
    />
  );
};

const FormControl = ({ className, ...props }: React.ComponentProps<typeof Slot>) => {
  const { error, formDescriptionId, formMessageId } = useFormField();

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut", delay: 0.1 }}
      whileFocus={{ scale: 1.02 }}
    >
      <Slot
        className={cn(
          "w-full bg-blue-900/20 border border-blue-900 text-blue-200 placeholder-blue-200/50 focus:border-blue-600 focus:ring-blue-600 focus:ring-2 transition-all duration-300 rounded-md",
          error && "border-red-500 focus:border-red-500 focus:ring-red-500",
          className
        )}
        aria-describedby={error ? formMessageId : formDescriptionId}
        aria-invalid={!!error}
        {...props}
      />
    </motion.div>
  );
};

const FormDescription = ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => {
  const { formDescriptionId } = useFormField();

  return (
    <motion.p
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut", delay: 0.2 }}
      id={formDescriptionId}
      className={cn("text-sm text-blue-200/80", className)}
      {...props}
    />
  );
};

const FormMessage = ({ className, children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => {
  const { error, formMessageId } = useFormField();
  const body = error ? String(error.message) : children;

  if (!body) return null;

  return (
    <motion.p
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut", delay: 0.3 }}
      id={formMessageId}
      className={cn("text-sm font-medium text-red-500", className)}
      {...props}
    >
      {body}
    </motion.p>
  );
};

export { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage };