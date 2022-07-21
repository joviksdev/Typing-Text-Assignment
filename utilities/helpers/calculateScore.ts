const calculateScore = ({
	paragraph,
	input,
}: {
	paragraph: string;
	input: string;
}) => {
	const paragraph_array = paragraph.split(' ');
	const input_array = input.split(' ');
	let result_array: string[] = [];
	input_array.forEach((word, index) => {
		if (
			paragraph_array.includes(word) &&
			index === paragraph_array.indexOf(word)
		) {
			result_array = [...result_array, word];
		}
	});

	return result_array.length;
};

export default calculateScore;
