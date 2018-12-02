import * as React from 'react'

import Square from './Square'

interface IBoardProps {
  squares: Array<string | null>
  onClick: (i: number) => void
}

class Board extends React.Component<IBoardProps> {
  public render() {
    return (
      <React.Fragment>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </React.Fragment>
    )
  }
  private onClick = (i :number) => this.props.onClick(i)

  private renderSquare(i: number) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={this.onClick(i)}
      />
    )
  }
}

export default Board