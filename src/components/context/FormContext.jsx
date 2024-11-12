import { createContext, useState } from "react";

export const FormContext = createContext();

export default function FormContextProvider(props) {
  const [FormValues , setFormValues ] = useState(null);
  // console.log(FormValues);
  
  return (
    <FormContext.Provider value={{ setFormValues, FormValues }}>
      {props.children}
    </FormContext.Provider>
  );
}
