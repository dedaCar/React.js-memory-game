const shuffle = (array) => {
	for (let i = 0; i < array.length; i += 1) {
		const j = Math.floor(Math.random() * array.length);
		const temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
};

export default shuffle;
