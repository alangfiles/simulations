const NUM_BOXES = 10;



let boxes = Array.from({length: NUM_BOXES}, (v, i) => i+1).sort((a,b)=>Math.random()>0.5);

function randomizeBoxes(){
	boxes = Array.from({length: NUM_BOXES}, (v, i) => i+1).sort((a,b)=>Math.random()>0.5);
}

function chooseBoxes(place) {
	
	let tries = 1;
	let boxToCheck = place;
	const goal = place;

	while(tries <= Math.floor(NUM_BOXES/2){
		if(boxes[boxToCheck] == goal) {
			return tries;
		}
		boxToCheck = boxes[boxToCheck];
		tries += 1;
	}
	return false;
}

function runPrisoners() {
	randomizeBoxes();
	const prisoners = Array.from({length: NUM_BOXES}, (v, i) => i+1);

	let foundBox = [];

	for(let p in prisoners){
		const result = chooseBoxes(p);
		foundBox.push(result);
	}

	//console.log(JSON.stringify(foundBox, null, 2));
	return foundBox;
}

function tryTilSuccess() {
	let numTries = 0;
	let result = false;
	while(!result && numTries < 10000) {
		let test = runPrisoners();
		if(test.indexOf(false) == -1) {
			result = true;
		}

		numTries += 1;
	}

	return numTries;
	
}


