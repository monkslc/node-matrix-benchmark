function nanoToMilliBigInt(n) {
	return n / BigInt(1E6);
}

function benchmarkFunction(iterations, func, args) {
	const startTime = process.hrtime.bigint();

	for (let i=0; i<iterations; i++){
		func(...args);
	}

	const endTime = process.hrtime.bigint();
	return endTime - startTime;
}

function create2DArray(n, m) {
	const mat = [];		
	for (let i=0; i<n; i++) {
		mat[i] = [];
		for (let j=0; j<m; j++) {
			mat[i][j] = Math.random() * 100;
		}
	}
	return mat;
}

function printBenchmark(library, name, iterations, timeMs) {
	console.log(`${name}-${iterations}`, library, timeMs);
}

function printHeader() {
	console.log('name-iterations library time(ms)');
}

module.exports = {nanoToMilliBigInt, benchmarkFunction, create2DArray, printBenchmark, printHeader};
