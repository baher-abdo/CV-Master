import { createContext, useState } from "react";

export const FormContext = createContext();

export default function FormContextProvider(props) {
  const [FormValues, setFormValues] = useState(null);
  const [selectedTemplate, setSelectedTemplate] = useState(null)
  // console.log(selectedTemplate);
  
  return (
    <FormContext.Provider value={{ setFormValues, FormValues,selectedTemplate, setSelectedTemplate }}>
      {props.children}
    </FormContext.Provider>
  );
}
