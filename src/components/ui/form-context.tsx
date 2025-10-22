// form-context.tsx (Context Utilities)
import * as React from "react";

const FormFieldContext = React.createContext<{ name: string } | undefined>(undefined);

type FormItemContextValue = {
  id: string;
};

const FormItemContext = React.createContext<FormItemContextValue>({} as FormItemContextValue);

// Contexts for internal use - exported for use in form.tsx and form-components.tsx
export { FormFieldContext, FormItemContext };