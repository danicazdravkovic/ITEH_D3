export default function check(fields) {
	//polja koja predstavljaju pobedu za nekog igraca
	const lines = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];
	for (let i = 0; i < lines.length; i++) {
		const [a, b, c] = lines[i];

		if (fields[a].value && fields[a].value === fields[b].value && fields[a].value === fields[c].value) {
			return fields[a].value;
		}
	}
	return null;
}