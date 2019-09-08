const { matMul, transpose } = require('@tensorflow/tfjs-node');

const { benchmarkFunction, nanoToMilliBigInt } = require('../common.js');
const {
	create2DMatrix,
	createAndTranspose2DMatrix,
	createAndMultiply2DMatrix,
} = require('./utils.js');

function mult2DMatrixBenchmark(n, m, iterations) {
	const matrixA =	create2DMatrix(n, m); 
	const matrixB =	create2DMatrix(n, m); 

	const nanoSeconds = benchmarkFunction(iterations, matMul, [matrixA, matrixB]);
	return nanoToMilliBigInt(nanoSeconds);
}

function createAndMult2DMatrixBenchmark(n, m, iterations) {
	const nanoSeconds = benchmarkFunction(iterations, createAndMultiply2DMatrix, [n, m]);
	return nanoToMilliBigInt(nanoSeconds);
}

function transpose2DMatrixBenchmark(n, m, iterations) {
	const nanoSeconds = benchmarkFunction(iterations, transpose, [create2DMatrix(n, m)]);
	return nanoToMilliBigInt(nanoSeconds);
}

function createAndTranspose2DMatrixBenchmark(n, m, iterations) {
	const nanoSeconds = benchmarkFunction(iterations, createAndTranspose2DMatrix, [n, m]);
	return nanoToMilliBigInt(nanoSeconds);
}

module.exports = {
	mult2DMatrixBenchmark,
	createAndMult2DMatrixBenchmark,
	transpose2DMatrixBenchmark,
	createAndTranspose2DMatrixBenchmark,
};
