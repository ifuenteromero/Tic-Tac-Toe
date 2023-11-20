import { useState } from "react";
import "../css/App.css";
import Board from "./Board";
import { INITIAL_TURN, toggleTurn } from "../utils/constants";

const App = () => {
	const [turn, setTurn] = useState(INITIAL_TURN);

	const n = 5;
	const row = Array(n).fill(null);
	const INITIAL_MATRIX = Array(n).fill(row);
	const [matrix, setMatrix] = useState(INITIAL_MATRIX);

	const updateBoard = (rowIndex, colIndex, currentTurn) => {
		const newTurn = toggleTurn(currentTurn);
		const newMatrix = [...matrix];
		const row = newMatrix[rowIndex];
		const newRow = [...row];
		newRow[colIndex] = currentTurn;
		newMatrix[rowIndex] = newRow;
		setTurn(newTurn);
		setMatrix(newMatrix);
	};

	return (
		<div className="page">
			<header>
				<h1>Tic Tac Toe</h1>
			</header>
			<main>
				<section className="turn">{turn} Turn</section>
				<section className="game">
					<Board
						updateBoard={updateBoard}
						currentTurn={turn}
						matrix={matrix}
					/>
					<button
						className="reset-button"
						style={{ width: `${n * 10}rem` }}
					>
						Restar game
					</button>
				</section>
			</main>
		</div>
	);
};

export default App;
