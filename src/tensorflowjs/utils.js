const { tensor, transpose, matMul } = require('@tensorflow/tfjs-node');

const { create2DArray, printBenchmark } = require('../common');

function create2DMatrix(n, m) {
	return tensor(create2DArray(n, m));
}

function createAndMultiply2DMatrix(n, m) {
	const matrixA = create2DMatrix(n, m);
	const matrixB = create2DMatrix(n, m);
	return matMul(matrixA, matrixB);
}

function createAndTranspose2DMatrix(n, m) {
	return transpose(create2DMatrix(n, m));
}

function printTensorflowJSBenchmark(name, iterations, timeMs) {
	printBenchmark('tensorflowjs', name, iterations, timeMs);
}

module.exports = {
	createAndMultiply2DMatrix,
	createAndTranspose2DMatrix,
	create2DMatrix,
	printTensorflowJSBenchmark
};
