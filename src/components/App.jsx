import { useState } from "react";
import "../css/App.css";
import Board from "./Board";
import { INITIAL_TURN, toggleTurn } from "../utils/constants";

const App = () => {
	const [turn, setTurn] = useState(INITIAL_TURN);

	const updateBoard = () => {
		const newTurn = toggleTurn(turn);
		setTurn(newTurn);
	};

	return (
		<div className="page">
			<header>
				<h1>Tic Tac Toe</h1>
			</header>
			<main>
				<section className="turn">{turn} Turn</section>
				<section className="game">
					<Board updateBoard={updateBoard} />
					<button className="reset-button">Restar game</button>
				</section>
			</main>
		</div>
	);
};

export default App;
