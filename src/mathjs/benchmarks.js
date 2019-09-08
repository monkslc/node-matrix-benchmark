const {inv, multiply, transpose } = require('mathjs');

const { benchmarkFunction, nanoToMilliBigInt } = require('../common.js');
const {
	create2DMatrix,
	createAndTranspose2DMatrix,
	createAndMultiply2DMatrix,
	createAndInvert2DMatrix,
} = require('./utils.js');

function mult2DMatrixBenchmark(n, m,  iterations) {
	const matrixA = create2DMatrix(n,m);
	const matrixB = create2DMatrix(n,m);
	const nanoSeconds = benchmarkFunction(iterations, multiply, [matrixA, matrixB]);
	return nanoToMilliBigInt(nanoSeconds);
}

function createAndMult2DMatrixBenchmark(n, m, iterations) {
	const nanoSeconds = benchmarkFunction(iterations, createAndMultiply2DMatrix, [n, m]);
	return nanoToMilliBigInt(nanoSeconds);
}

function invert2DMatrixBenchmark(n, m, iterations) {
	const nanoSeconds = benchmarkFunction(iterations, inv, [create2DMatrix(n, m)]);	
	return nanoToMilliBigInt(nanoSeconds);
}

function createAndInvert2DMatrixBenchmark(n, m, iterations) {
	const nanoSeconds = benchmarkFunction(iterations, createAndInvert2DMatrix, [n, m]);	
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
	createAndInvert2DMatrixBenchmark,
	createAndTranspose2DMatrixBenchmark,
	invert2DMatrixBenchmark
};
