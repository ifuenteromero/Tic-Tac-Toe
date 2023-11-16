const Board = () => {
	const n = 5;
	const row = Array(n).fill(null);
	const matrix = Array(n).fill(row);
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
									>{`${rowIndex} - ${colIndex}`}</td>
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
