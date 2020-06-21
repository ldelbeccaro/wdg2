import React from "react"
import PropTypes from "prop-types"

const svgDefaultProps = {
  viewBox: `0 0 864 864`,
}

const Svg = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    version="1.1"
    x="0px"
    y="0px"
    viewBox={props.viewBox}
    style={{ enableBackground: `new 0 0 864 864` }}
    xmlSpace="preserve"
    onClick={props.onClick}
    {...props}
  >
    {props.children}
  </svg>
)

Svg.propTypes = {
  viewBox: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.any,
  disabled: PropTypes.bool,
  noChangeOnHover: PropTypes.bool,
}

Svg.defaultProps = svgDefaultProps

export default Svg
