import * as React from 'react'

interface ISquareProps {
  value: string | null
  onClick: any
  // onClick: (event: React.MouseEvent) => void
}

const Square = (props: ISquareProps) => (
  <button className="square" onClick={props.onClick}>
    {props.value}
  </button>
)

export default Square