import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import FormContext from '../FormContext';
import { initialState, formState } from './reducer';

function FormReducer(props) {
  const { className, children, onChange, formModel, defaultValues, ...rest } = props;

  const cssClass = classNames('s-form', className);

  // 当该表单项的值未定义时才使用默认值
  if (defaultValues) {
    Object.keys(defaultValues).forEach(item => {
      if (initialState.values[item] === undefined) {
        initialState.values[item] = defaultValues[item];
      }
    });
  }

  const [state, dispatch] = useReducer(formState, initialState);
  const { values, checkMsg } = state;

  const contextValue = {
    values,
    checkMsg,
    formModel,
    dispatch,
    onChange,
  };

  return (
    <FormContext.Provider value={contextValue}>
      <form className={cssClass} {...rest}>
        {children}
      </form>
    </FormContext.Provider>
  );
}

FormReducer.propTypes = {
  /** className */
  className: PropTypes.string,
  /** change 事件，通过 context 传到 FormItem 上 */
  onChange: PropTypes.func,
  /** 检验 schema */
  formModel: PropTypes.object,
  /** 默认值 */
  defaultValues: PropTypes.object,
};

export default FormReducer;
