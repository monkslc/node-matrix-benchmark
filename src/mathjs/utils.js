const {inv, multiply, transpose, matrix} = require('mathjs');

const { create2DArray, printBenchmark } = require('../common');

function create2DMatrix(n, m) {
	return matrix(create2DArray(n, m));
}

function createAndMultiply2DMatrix(n, m) {
	const matrixA =	create2DMatrix(n, m); 
	const matrixB =	create2DMatrix(n, m); 
	return multiply(matrixA, matrixB);
}

function createAndInvert2DMatrix(n, m) {
	return inv(create2DMatrix(n, m));
}

function createAndTranspose2DMatrix(n, m) {
	return transpose(create2DMatrix(n, m));
}

function printMathJSBenchmark(name, iterations, timeMs) {
	printBenchmark('mathjs', name, iterations, timeMs);
}

module.exports = {
	createAndMultiply2DMatrix,
	createAndInvert2DMatrix,
	createAndTranspose2DMatrix,
	create2DMatrix,
	printMathJSBenchmark
};
