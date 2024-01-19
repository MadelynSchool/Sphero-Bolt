//Programmer: Maddie
//Date: 1.10.2024
//Program: Sphero Bolt Testing
//Bolt ID: 52F9
/*
async function //Programmer: Avonlea Thalmann
startProgram() {
await speak("Hello World", true);
setMainLed({ r: 0, g: 0, b: 255});
setSpeed(60);
await delay (2);
setSpeed(0);
}
*/
 
//Square w/ different colors for each line & commit
async function startProgram() {
setMainLed ({ r:100, g: 0, b: 100});
await roll(0, 50, 2)
setMainLed ({ r:44, g: 49, b: 0});
await delay (1)
await roll (90, 50, 2)
setMainLed ({ r:0, g: 0, b: 255});
await delay (1)
await roll (180, 50, 2)
setHeading(180)
setMainLed ({ r:0, g: 255, b: 0});
await delay (1)
await roll (270, 50.9, 2)
setMainLed ({ r:255, g: 0, b: 0});
await delay (1)
stopRoll
}
//Square w/ different colors & sounds for each line & commit
 
 
//Figure 8 & commit