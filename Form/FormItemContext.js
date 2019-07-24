import React, {useContext} from 'react';
import FormContext from '../FormContext';
import FormItem from '../FormItem';

export function withFormContext(Component) {
  return props => {
    const { name } = props;

    const { values, checkMsg, onChange } = useContext(FormContext);

    return (
      <Component
        value={values[name]}
        checkMsg={checkMsg[name]}
        onChange={onChange}
        {...props}
      />
    );
  };
}

const FormItemContext = withFormContext(FormItem);

export default FormItemContext;
