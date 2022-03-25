import React  from "react";
class Board extends React.Component {
    constructor(props) {
        super(props);
        let cells=3;
        this.state = {
            text:"",
            squares: Array(cells*cells).fill(null),
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
     generateRow(cells,n) {
        let li = [];
        for (let row = 0; row < cells; row++) {
    
            li.push(<div>{this.renderSquare(row + (cells * n))}</div>);
           // console.log(row + (3 * n));
            //console.log(n);
            //
        }
        return li;
    }
     generate(cells) {
        let li = [];
        for (let row = 0; row < cells; row++) {
            li.push(<div className="board-row">{this.generateRow(cells,row)}</div>);
            //console.log(row);
        }
        return li;
    }

    render() {
        //createList(3);
       let cells=3;
        const winner = calculateWinner(this.state.squares,cells);
        let status;
        if (winner) {
            status = 'Winner: ' + winner;
        }
        else if (checkSqaures(this.state.squares,cells*cells)) {
            status = 'Draw No more moves';
        }
        else {
            status = 'Next Player:' + (this.state.xIsNext ? 'X' : 'O');
        }
        

        //const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        return (

            <div>
                <div className="status">{status}</div>
                <div>{this.generate(3,3)}</div>
            </div>
        );
    }
}
function calculateWinner(squares,number) {
    const lines = createList(number);
    console.log(lines);
    // looping through all the possible winnning combination of squares
    for (let i = 0; i < lines.length; i++) {
      let arr=new Array(number);
      let count=0;
      arr=lines[i];//
        for(let check=0;check<arr.length;check++)
        {
            if(squares[arr[0]]===squares[arr[check]])
            count++;
            else 
            break;
        }
       
        if (count===number) {
            return squares[arr[0]];
        }
       /* if(squares[a]&&squares[a]===squares[b]&&squares[a]===squares[c])
        return squares[a];*/
    }
    return null;
}
function checkSqaures(squares,number) {
    let count = 0;
    for (let index = 0; index < squares.length; index++) {
        if (squares[index] !== null)
            count++;
    }
    if (count === number)
        return true;
    else
        return false;
}

function createMatrix(numberofElements) {
    let i = 0;
    const matrix = new Array(numberofElements).fill(0).map(() => new Array(numberofElements).fill(0));
    for (let row = 0; row < numberofElements; row++) {
        for (let col = 0; col < numberofElements; col++) {
            matrix[row][col] = i;
            i++;
        }
    }
    return matrix;
}
function createList(numberofElements) {
    const mat = createMatrix(numberofElements);
    const outerList = [];
    //adding rows in the list
    for (let row = 0; row < numberofElements; row++) {
        let innerList = [];
        for (let col = 0; col < numberofElements; col++) {
            innerList.push(mat[row][col]);
        }
        outerList.push(innerList);
    }

    //adding rows in the outerlist
    for (let row = 0; row < numberofElements; row++) {
        let innerList = [];
        for (let col = 0; col < numberofElements; col++) {
            innerList.push(mat[col][row]);
        }
        outerList.push(innerList);
    }
    //adding diagonals right
    let innerList = [];
    for (let row = 0; row < numberofElements; row++) {
        for (let col = 0; col < numberofElements; col++) {
            if (row === col) { innerList.push(mat[row][col]); }
        }
    }
    outerList.push(innerList);
    innerList = [];
    for (let row = 0; row < numberofElements; row++) {
        for (let col = 0; col < numberofElements; col++) {
            if (row + col === numberofElements - 1)
                innerList.push(mat[row][col]);
        }
    }
    return outerList;
}


function Square(props) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
}

export default Board;