const Board = ({ updateBoard, currentTurn, matrix }) => {
	const handleClick = (rowIndex, colIndex, currentTurn) => {
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
								return (
									<td
										key={colIndex}
										className="board__cell"
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
