import React, { useContext, useMemo } from 'react';
import FormContext from '../FormContext';
import FormItem from '../FormItem';

function withFormContext(Component) {
  return function(props) {
    const { name, className, text, onClick, ...rest } = props;
    const { changeAutoCheck, ...formItemRest } = props;
    const { values, checkMsg, onChange, formModel, dispatch } = useContext(FormContext);

    // console.log(values, 'values');

    const changeHandler = (itemName, value, obj) => {
      // console.log(values, 'changeHandler');
      let returnValue;
      if (onChange) {
        returnValue = onChange(name, value, obj);
      }

      // console.log(returnValue, 'returnValue');
      // 如果没有返回值则更新数据
      if (returnValue === undefined) {
        dispatch({ type: 'values', name, value });
      } else if (returnValue !== 'noDispatch') {
        // 如果返回数据，且返回值不为noDispatch，则更新为返回值
        value = returnValue;
        dispatch({ type: 'values', name, value });
      }

      // 立即校验
      if (changeAutoCheck) {
        dispatch({ type: 'checkMsg', name, value: formModel.checkForField(name, value) });
      }
    };

    // 如果是提交按钮则先检验
    if (!Component) {
      // 提交之前先自动校验
      const submitHandler = () => {
        // console.log(values, 'submitHandler');
        const data = formModel.check(values);
        dispatch({ type: 'checkMsg', data });

        const hasError = Object.keys(data).find(item => {
          return data[item].hasError;
        });

        if (hasError === undefined && onClick) {
          onClick(values);
        }
      };

      const cssClass = className ? `s-btn ${className}` : 's-btn';

      return (
        <span className={cssClass} onClick={submitHandler} {...rest}>
          {text}
        </span>
      );
    }
    return useMemo(() => {
      return <Component value={values[name]} checkMsg={checkMsg[name]} onChange={changeHandler} {...formItemRest} />;
    }, [values[name], checkMsg[name]]);
  };
}

export const FormReducerItemContext = withFormContext(FormItem);
export const FormReducerSubmitContext = withFormContext();
