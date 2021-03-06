import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules } from './utils';

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  inverse: PropTypes.bool,
  color: PropTypes.string,
  block: PropTypes.bool,
  outline: PropTypes.bool,
  className: PropTypes.string,
  cssModule: PropTypes.object,
};

const defaultProps = {
  tag: 'div'
};

const Card = (props) => {
  const {
    className,
    cssModule,
    color,
    block,
    inverse,
    outline,
    tag: Tag,
    ...attributes
  } = props;
  const classes = mapToCssModules(classNames(
    className,
    'card',
    inverse ? 'card-inverse' : false,
    block ? 'card-block' : false,
    color ? `card${outline ? '-outline' : ''}-${color}` : false
  ), cssModule);

  return (
    React.createElement(Tag, { ...attributes, className: classes })
  );
};

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;

export default Card;
