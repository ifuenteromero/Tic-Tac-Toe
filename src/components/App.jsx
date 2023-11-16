import "../css/App.css";
import Board from "./Board";

const App = () => {
	return (
		<div className="page">
			<header>
				<h1>Tic Tac Toe</h1>
			</header>
			<main>
				<section className="turn">Turn X</section>
				<section className="game">
					<Board />
					<button className="reset-button">Restar game</button>
				</section>
			</main>
		</div>
	);
};

export default App;
