import React, { useState } from "react"

import "../styles/pw.styl"

const PasswordWrapper = ({ children }) => {
  const [entered, setEntered] = useState(false)
  const [pwInput, setPwInput] = useState("")
  const [error, setError] = useState("")
  const pw = process.env.GATSBY_SITE_PW
  const checkPw = val => {
    pw === val ? setEntered(true) : setError(true)
  }
  return entered ? (
    <>{children}</>
  ) : (
    <div className="pw">
      <h1>Enter password:</h1>
      <div className="input">
        <input
          value={pwInput}
          onChange={e => setPwInput(e.target.value)}
          onKeyDown={e => {
            if (e.keyCode === 13) checkPw(pwInput)
          }}
        />
        <div
          className="button"
          onClick={() => checkPw(pwInput)}
          onKeyDown={e => {
            if (e.keyCode === 13) checkPw(pwInput)
          }}
        >
          Submit
        </div>
      </div>
      <div className={`error${error ? ` show` : ``}`}>Incorrect password</div>
    </div>
  )
}

export default PasswordWrapper
