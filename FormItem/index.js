import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import MsgTips from '../MsgTips';

function FormItem(props) {
  const {
    simple, inline, vertical,
    className, eleClass,
    label, name, type, value,
    isRequired, prefix, suffix, des,
    checkMsg, checkMsgHide, checkMsgShowBelow,
    onChange, children, ...rest
  } = props;

  const cssClass = classnames('s-f-item', className, {
    's-f-item--simple': simple,
    's-f-item--inline': inline,
    's-f-item--vertical': vertical,
    's-f-item--error': checkMsg && checkMsg.hasError,
    's-f-item--success': checkMsg && !checkMsg.hasError,
    's-f-item--check-msg-below': checkMsgShowBelow,
  });

  const cssEleClass = classnames('s-f-ele', eleClass, {
    disabled: props.disabled,
    's-f-ele--error': checkMsg && checkMsg.hasError,
  });

  function changeHandler(e) {
    if (onChange) {
      onChange(name, e.target.value, e);
    }
  }

  function renderEle() {
    if (children) {
      return <Fragment>{children}</Fragment>;
    }
    if (type === 'textarea') {
      return (
        <textarea
          name={name}
          className={cssEleClass}
          value={value || ''}
          onChange={changeHandler}
          {...rest}
        />
      );
    }

    return (
      <input
        name={name}
        className={cssEleClass}
        value={value || ''}
        type={type}
        onChange={changeHandler}
        {...rest}
      />
    );
  }

  function renderEleWrap() {
    // 如果有前后缀，包裹一层
    if (prefix || suffix) {
      return (
        <div className="s-f-ele-wrap">
          {prefix && <span className="s-f-prefix">{prefix}</span>}
          {renderEle()}
          {suffix && <span className="s-f-suffix">{suffix}</span>}
        </div>
      );
    }
    return (
      <Fragment>
        {renderEle()}
      </Fragment>
    );
  }

  return (
    <div className={cssClass}>
      {label !== undefined && (
        <label className="s-f-label" htmlFor={name}>
          {label}
          {isRequired && <span className="s-f-required">*</span>}
        </label>
      )}
      {
        // 极简模式，不考虑嵌套及验证信息
        // 复杂模式，考虑提示信息及验证信息
        simple ?
          renderEleWrap()
          :
          <div className="s-f-field">
            {renderEleWrap()}
            {des && <p className="s-f-des">{des}</p>}
            {checkMsg && !checkMsgHide && (
              <MsgTips
                className="s-f-msg"
                type={checkMsg.hasError ? 'alert' : 'ok'}
                text={checkMsg.errorMessage}
              />
            )}
          </div>
      }
    </div>
  );
}

FormItem.propTypes = {
  /** className */
  className: PropTypes.string,
  /** 里面输入框元素自定义 class */
  eleClass: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  name: PropTypes.string.isRequired,
  value: PropTypes.any,
  /** input 文本输入框（text/email/number/search...）及 textarea，其他形式请使用 children */
  type: PropTypes.string,
  children: PropTypes.node,
  /** 必填 */
  isRequired: PropTypes.bool,
  /** 前缀 */
  prefix: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  /** 后缀 */
  suffix: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  /** 描述 */
  des: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  /** 如果不是disabled，onChange 必须 */
  onChange: PropTypes.func,
  /** 检验信息，使用rsuite-schema */
  checkMsg: PropTypes.shape({
    hasError: PropTypes.bool.isRequired,
    errorMessage: PropTypes.string,
  }),
  /** 不显示校验信息，但是输入框还是会有检验状态的反馈，错误状态会追加 class */
  checkMsgHide: PropTypes.bool,
  /** 是否将检验信息换行显示 */
  checkMsgShowBelow: PropTypes.bool,
  /** 极简模式：结构简单，没有嵌套，且不包括验证信息 */
  simple: PropTypes.bool,
  /** 多个 item 一行显示 */
  inline: PropTypes.bool,
  /** label 和表单元素换行显示 */
  vertical: PropTypes.bool,
};

FormItem.defaultProps = {
  type: 'text',
  isRequired: false,
  inline: false,
  vertical: false,
  simple: false,
  checkMsgHide: false,
  checkMsgShowBelow: false,
};

export default FormItem;
