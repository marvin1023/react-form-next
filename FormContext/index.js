import React from "react";

const FormContext = React.createContext({
  values: {},
  checkMsg: {},
  onChange: () => {}
});

export default FormContext;
