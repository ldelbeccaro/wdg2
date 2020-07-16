import React from "react"

import "../styles/select.styl"

import { Check, CircleSvg, CheckedCircleSvg } from "./svg"

const Select = ({ selected, onSelect, onDeselect, label, image }) => (
  <div
    className={`select${image ? ` image` : ``}`}
    onClick={() => (selected ? onDeselect() : onSelect())}
    role="option"
    onKeyDown={e => {
      if (e.keyCode === 13) selected ? onDeselect() : onSelect()
    }}
    tabIndex={0}
    aria-selected={selected}
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
