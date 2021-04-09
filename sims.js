const NUM_BOXES = 10;

let boxes = Array.from({length: NUM_BOXES}, (v, i) => i).sort((a,b)=>Math.random()>0.5);

function randomizeBoxes(){
	boxes = Array.from({length: NUM_BOXES}, (v, i) => i).sort((a,b)=>Math.random()>0.5);
}

function chooseBoxes(place) {

	const MAX_TRIES = Math.floor(NUM_BOXES/2);

	let tries = 1;
	let boxToCheck = place;
	const goal = place;

	while(tries <= MAX_TRIES){
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
	const prisoners = Array.from({length: NUM_BOXES}, (v, i) => i);

	let foundBox = [];

	for(let p in prisoners){
		const result = chooseBoxes(p);
		foundBox.push(result);
	}

	//console.log(JSON.stringify(foundBox, null, 2));
	return foundBox;
}

function multipleTrials(num_tries) {

	let success = 0;
	let fail = 0;

	let tries = 0;

	while(tries < num_tries) {
		let test = runPrisoners();
		if(test.indexOf(false) == -1) {
			success += 1;
		} else {
			fail += 1;
		}

		tries += 1;
	}

	console.log(`Out of ${num_tries} runs, there were ${success} successes, at ${success/num_tries*100}%`);

	//return numTries;
	
}


