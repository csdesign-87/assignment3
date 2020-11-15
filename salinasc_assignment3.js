let number = 1000;
while(number > 0) {
	console.log(number);
	number-=2;
}

for(let i = 0; i<= 10000; i++) {
	if (i === 2500) {
	alert("quarterway");
	} else if (i === 5000) {
	alert("halfway");
	} else if (i === 10000) {
	alert("The loop is done!");
	}
}

const movies = ["super girl", "spartacus", "walking dead", "bumble bee", "olympus has fallen"];

for(let i = 0; i < movies.length; i++) {
	console.log("My " + (i + 1) + " favorite tv show is " + movies[i]);
}

