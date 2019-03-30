import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import IconTips from '../IconTips';

function MsgTips(props) {
  const {
    className, type, size,
    text, subText,
  } = props;

  const cssClass = classnames('s-msg-tips', className, {
    's-msg-tips--s': size === 's',
    's-msg-tips--m': size === 'm',
    's-msg-tips--l': size === 'l',
  });

  function renderText() {
    if (text && !subText) {
      return (
        <div className="msg-tips-txt text--only">{text}</div>
      );
    }
    return (
      <div className="msg-tips-bd">
        <div className="msg-tips-txt">{text}</div>
        { subText && <div className="msg-tips-sub-txt">{text}</div> }
      </div>
    );
  }

  return (
    <div className={cssClass}>
      <IconTips type={type} size={size} />
      { renderText() }
    </div>
  );
}

MsgTips.propTypes = {
  /** className */
  className: PropTypes.string,
  type: PropTypes.oneOf(['alert', 'info', 'question', 'ok']),
  size: PropTypes.oneOf(['s', 'm', 'l']),
  text: PropTypes.node,
  subText: PropTypes.node,
};

MsgTips.defaultProps = {
  type: 'info',
  size: 'm',
};

export default MsgTips;
