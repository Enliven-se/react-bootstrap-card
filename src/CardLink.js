import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules } from './utils';

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  getRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object,
};

const defaultProps = {
  tag: 'a'
};

const CardLink = (props) => {
  const {
    className,
    cssModule,
    tag: Tag,
    getRef,
    ...attributes
  } = props;
  const classes = mapToCssModules(classNames(
    className,
    'card-link'
  ), cssModule);

  return (
    React.createElement(Tag, { ...attributes, ref: getRef, className: classes })
  );
};

CardLink.propTypes = propTypes;
CardLink.defaultProps = defaultProps;

export default CardLink;
