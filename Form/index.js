import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import FormContext from '../FormContext';

function Form(props) {
  const {
    className, children,
    values, checkMsg, onChange, ...rest
  } = props;

  const cssClass = classNames('s-form', className);

  const value = {
    values,
    checkMsg,
    onChange,
  };

  return (
    <FormContext.Provider value={value} >
      <form className={cssClass} {...rest} >
        {children}
      </form>
    </FormContext.Provider>
  );
}

Form.propTypes = {
  /** className */
  className: PropTypes.string,
  /** 表单数据，通过 context 传到 FormItem 上 */
  values: PropTypes.object,
  /** change 事件，通过 context 传到 FormItem 上 */
  onChange: PropTypes.func,
  /** 检验信息，通过 context 传到 FormItem 上 */
  checkMsg: PropTypes.object,
};

export default Form;
