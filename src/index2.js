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
            squares: Array(16).fill(null),//
            xIsNext: true,
        };
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

        return (
            <div>
                <button onClick={'index1.js'}>button1</button>
                <button>button2</button>
                <button>button3</button>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                    {this.renderSquare(3)}
                </div>
                <div className="board-row">
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                </div>
                <div className="board-row">
                    {this.renderSquare(8)}
                    {this.renderSquare(9)}
                    {this.renderSquare(10)}
                    {this.renderSquare(11)}
                </div>
                <div className="board-row">
                    {this.renderSquare(12)}
                    {this.renderSquare(13)}
                    {this.renderSquare(14)}
                    {this.renderSquare(15)}
                </div>
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
    document.getElementById('root1')
);
function calculateWinner(squares) {
    const lines = [
        [0, 1, 2,3],
        [4, 5,6,7],
        [8, 9, 10,11],
        [12, 13,14,15],
        [0, 4, 8,12],
        [1, 5, 9,13],
        [2,6,10,14],
        [3,7,11,15],
        [0,5,10,15],
        [12,9,6,3]
    ];
    // looping through all the possible winnning combination of squares
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c,d] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]&&squares[a]===squares[d]) {
            return squares[a];
        }
    }
    return null;
}
function checkSqaures(squares) {
    let c = 0;
    for (let i = 0; i < squares.length; i++) {
        if (squares[i] !== null)
            c++;
    }
    if (c === 16)
        return true;
    else
        return false;
}