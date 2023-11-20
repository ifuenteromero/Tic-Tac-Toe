const Board = ({ updateBoard, currentTurn, matrix }) => {
	const isAlreadyFilled = (matrix, rowIndex, colIndex) =>
		matrix[rowIndex][colIndex] !== null;

	const handleClick = (rowIndex, colIndex, currentTurn) => {
		if (isAlreadyFilled(matrix, rowIndex, colIndex)) return;
		updateBoard(rowIndex, colIndex, currentTurn);
	};

	return (
		<table className="board">
			<tbody>
				{matrix.map((row, rowArrayIndex) => {
					const rowIndex = rowArrayIndex + 1;
					return (
						<tr key={rowIndex} className="board__row">
							{row.map((col, colArrayIndex) => {
								const colIndex = colArrayIndex + 1;
								const isFilled = isAlreadyFilled(
									matrix,
									rowArrayIndex,
									colArrayIndex
								);
								return (
									<td
										key={colIndex}
										className="board__cell"
										data-filled={isFilled}
										onClick={() =>
											handleClick(
												rowArrayIndex,
												colArrayIndex,
												currentTurn
											)
										}
									>
										{col}
									</td>
								);
							})}
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};

export default Board;
