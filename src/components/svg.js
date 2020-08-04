import React from "react"
import PropTypes from "prop-types"

const svgDefaultProps = {
  viewBox: `0 0 864 864`,
}

const Svg = ({ withstroke, ...props }) => (
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
    className={withstroke && "stroke"}
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

export const CloseSvg = props => (
  <Svg
    {...props}
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

export const CircleSvg = props => (
  <Svg
    {...props}
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="1"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
  </Svg>
)

export const CheckedCircleSvg = props => (
  <Svg
    {...props}
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="1"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </Svg>
)

export const Check = props => (
  <Svg
    {...props}
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="1"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12"></polyline>
  </Svg>
)
