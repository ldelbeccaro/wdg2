import React from "react"

import "../styles/select.styl"

import { Check, CircleSvg, CheckedCircleSvg } from "./svg"

const Select = ({ selected, onSelect, onDeselect, label, image }) => (
  <div
    className={`select${image ? ` image` : ``}`}
    onClick={() => (selected ? onDeselect() : onSelect())}
  >
    {!image && <>{selected ? <CheckedCircleSvg /> : <CircleSvg />}</>}
    {image && (
      <>
        {selected ? (
          <div className="select-image selected">
            <Check />
          </div>
        ) : (
          <div className="select-image">{image}</div>
        )}
      </>
    )}
    <div className="label">{label}</div>
  </div>
)

export default Select
