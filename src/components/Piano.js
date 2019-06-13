import React, { useState, useRef } from "react"
import styled from "styled-components"

const Piano = () => {
  const initialState = [
    "black-key",
    "black-key",
    "key",
    "black-key",
    "black-key",
    "black-key",
    "key",
  ]

  const [keys] = useState(initialState)

  const handleClick = e => {
    console.log(e.target)
    e.target.classList.toggle("active")
  }

  return (
    <PianoWrapper>
      {keys.map((key, i) => {
        return (
          <li key={i} className="key" onClick={handleClick}>
            {key === "black-key" && <div className="black-key" />}
          </li>
        )
      })}
    </PianoWrapper>
  )
}

export default Piano

const PianoWrapper = styled.ul`
  list-style: none;
  display: flex;

  li {
    position: relative;
    width: 60px;
    height: 180px;
    border: 1px solid black;
    border-right: none;
    background: #fffff0;
    border-radius: 5px;
    box-shadow: 0px 3px 5px #666;
    cursor: pointer;

    &:last-child {
      border-right: 1px solid black;
    }
  }

  .black-key {
    position: absolute;
    top: -1px;
    left: 37.5px;
    width: 45px;
    height: 120px;
    background: black;
    border-radius: 5px;
    box-shadow: 0px 3px 5px #666;
    z-index: 999;
  }

  .active {
    box-shadow: 0px 1px 3px #666;
  }
`
