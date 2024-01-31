// Team Members: Mya Reynolds, Avonlea Thalmann
// Name: Madelyn Hershberger
// Dare: 1.22.2024
// Program: Maze
// Bolt ID: 52F9

/*
// Start Maze
async function startProgram() {
await scrollMatrixText('Start', { r: 66, g: 56, b: 255 }, 30, true)
await speak("Start", true);


//Blue: Checkpoint 1
	await roll(0, 50, 3)
	await delay (1)
	setMainLed({ r: 0, g: 0, b: 255 });
	*/
//Checkpoint 2: Sound 1
async function startProgram() {
	await roll (90, 50, 2)
	await delay (1)
	await Sound.Animal.play(true)

//Checkpoint 3: Red
	await roll (180, 50, 1.5)
	await delay (1)
	await roll (220, 65, 1)
	await delay (1)
	setMainLed({ r: 255, g: 0, b: 0 });
