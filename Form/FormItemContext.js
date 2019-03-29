import React from 'react';
import FormContext from './FormContext';
import FormItem from '../FormItem';

export function withFormContext(Component) {
  return (props) => {
    const { name } = props;

    return (
      <FormContext.Consumer>
        {({ values, checkMsg, onChange }) => {
          return (
            <Component value={values[name]} checkMsg={checkMsg[name]} onChange={onChange} {...props} />
          );
        }}
      </FormContext.Consumer>
    );
  };
}

const FormItemContext = withFormContext(FormItem);

export default FormItemContext;
