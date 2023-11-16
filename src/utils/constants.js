export const TURNS = {
	X: "x",
	O: "o",
};

export const INITIAL_TURN = TURNS.X;

export const toggleTurn = (currentTurn) => {
	return currentTurn === TURNS.X ? TURNS.O : TURNS.X;
};
