let number = 0;
while(number < 1000) {
	console.log(number);
	number++;
}

for(let i = 10000; i >= 0; i-=2) {
	if (i === 2500) {
	alert("quarterway");
	} else if (i === 5000) {
	alert("halfway");
	} else if (i === 1000) {
	alert("The loop is done!");
	}
}

const movies = ["super girl", "spartacus", "walking dead", "bumble bee", "olympus has fallen"];

for(let i = 0; i <= 5; i++) {
	if (i <= 1) {
	console.log("My #1 favorite tv show is " + movies[0]);
	} else if (i <= 2) {
	console.log("My #2 favorite tv show is " + movies[1]);
	} else if (i <= 3) {
	console.log("My #3 favorite tv show is " + movies[2]);
	} else if (i <= 4) {
	console.log("My #4 favorite tv show is " + movies[3]);
	} else if (i <= 5) {
	console.log("My #5 favorite tv show is " + movies[4]);
	}
}

