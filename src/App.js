import { useState } from "react";
function Square(props) {
  //console.log(props);
  // const [value, setvalue] = useState(null);
//   function handleClick() {
//     //console.log('clicked');
//     setvalue('X');
//  }

  return (
    <button
        className="square"
      onClick ={props.onsquareClick}
    >{props.value}
  </button>
  )
}




const Board = () => {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));



  function handleClick(i)
  {
    if (calculateWinner(squares)||squares[i]) return;
    const nextSquares = squares.slice();
    if (xIsNext) nextSquares[i] = 'X'
    else
      nextSquares[i] = "O";
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "winner: " + winner;
  }
  else {
    status = "Next Player: " + (xIsNext ? "X" : "O");
  }
  return (
    <div>
      <div className="status">{status}</div>
    <div className = "board-row">
        <Square value={squares[0]} onsquareClick = {()=>handleClick(0)} />
        <Square value={squares[1]} onsquareClick={()=> handleClick(1)} />
        <Square value={squares[2]} onsquareClick={()=> handleClick(2)} />
      </div>
      <div className = "board-row">
        <Square value={squares[3]}  onsquareClick = {()=>handleClick(3)}/>
        <Square value={squares[4]} onsquareClick={()=> handleClick(4)}/>
        <Square value={squares[5]} onsquareClick={()=> handleClick(5)} />
      </div>
      <div className = "board-row">
        <Square value={squares[6]} onsquareClick={()=>handleClick(6)} />
        <Square value={squares[7]} onsquareClick={()=>handleClick(7)} />
        <Square value={squares[8]} onsquareClick={()=>handleClick(8)} />
    </div>
  </div >
)
}


function calculateWinner(squares)
{
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]

  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default Board;