import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './index.css';

function IconTips(props) {
  const {
    className,
    type,
    size,
    ...rest
  } = props;


  const cssClass = classnames(`s-icon-tips icon-tips--${type}`, className, {
    [`icon-tips--${size}`]: size,
  });
  return (
    <i className={cssClass} {...rest} />
  );
}
IconTips.propTypes = {
  className: PropTypes.string,
  /** tips type */
  type: PropTypes.oneOf(['alert', 'info', 'question', 'ok']),
  /** size */
  size: PropTypes.oneOf(['s', 'm', 'l', 'xl', 'xxl']),
};

export default IconTips;
