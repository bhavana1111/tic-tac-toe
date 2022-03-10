
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function Square(props) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
}

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),//
            //mat:TwoDimensional(this.state.squares,3),
            xIsNext: true,
        };
        console.log(this.state.mat);
    }
   

    handleClick(i) {
        const squares = this.state.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext,
        });
    }

    renderSquare(i) {
        return (
            <Square
                value={this.state.squares[i]}
                onClick={() => this.handleClick(i)}
            />
        );
    }

    render() {
        const winner = calculateWinner(this.state.squares);
        let status;
        if (winner) {
            status = 'Winner: ' + winner;
        }
        else if (checkSqaures(this.state.squares)) {
            status = 'Draw No more moves';
        }
        else {
            status = 'Next Player:' + (this.state.xIsNext ? 'X' : 'O');
        }

        //const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        const n=3;
        return (
            
            <div>
                <div className="status">{status}</div>
                {generatesquare(3)}
                </div>
        );
    }
}

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);
function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    // looping through all the possible winnning combination of squares
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}
function checkSqaures(squares) {
    let count = 0;
    for (let index = 0; index < squares.length; index++) {
        if (squares[index] !== null)
            count++;
    }
    if (count === 9)
        return true;
    else
        return false;
}

/*function TwoDimensional(squares, size) 
    {
      var res = []; 
      for(var i=0;i < squares.length;i = i+size)
      res.push(squares.slice(i,i+size));
      return res;
    }*/
    function generatesquare(n)
    {
        for(let row=1;row<=n;row++)
        {
            for(let col=1;col<=n;col++)
            {
                return  <div className="board-row">HEllo</div>
            }
        }
    }