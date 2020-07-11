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

export const CloseSvg = () => (
  <Svg
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="1"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="15" y1="9" x2="9" y2="15"></line>
    <line x1="9" y1="9" x2="15" y2="15"></line>
  </Svg>
)
