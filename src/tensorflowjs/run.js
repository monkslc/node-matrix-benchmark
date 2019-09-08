const tf = require('@tensorflow/tfjs-node');
const { printHeader } = require('../common.js');
const { printTensorflowJSBenchmark } = require('./utils.js');
const {
	mult2DMatrixBenchmark,
	createAndMult2DMatrixBenchmark,
	transpose2DMatrixBenchmark
} = require('./benchmarks.js');

tf.enableProdMode();

printHeader();
// MULTIPLY
printTensorflowJSBenchmark('mult-2d-matrix(5x5)', 1E6, mult2DMatrixBenchmark(5, 5, 1E6)); 
printTensorflowJSBenchmark('mult-2d-matrix(250x250)', 1E2, mult2DMatrixBenchmark(250, 250, 1E2)); 
printTensorflowJSBenchmark('mult-2d-matrix(1000x1000)', 1, mult2DMatrixBenchmark(1000, 1000, 1));

// CREATE AND MULTIPLY
printTensorflowJSBenchmark('create-mult-2d-matrix(5x5)', 1E6, createAndMult2DMatrixBenchmark(5, 5, 1E6));
printTensorflowJSBenchmark('create-mult-2d-matrix(250x250)', 1E2, createAndMult2DMatrixBenchmark(250, 250, 1E2));
printTensorflowJSBenchmark('create-mult-2d-matrix(1000x1000)', 1, createAndMult2DMatrixBenchmark(1000, 1000, 1));

// TRANSPOSE
printTensorflowJSBenchmark('transpose-2d-matrix(5x5)', 1E6, transpose2DMatrixBenchmark(5, 5, 1E6));
printTensorflowJSBenchmark('transpose-2d-matrix(250x250)', 1E2, transpose2DMatrixBenchmark(250, 250, 1E2));
printTensorflowJSBenchmark('transpose-2d-matrix(1000x1000)', 1, transpose2DMatrixBenchmark(1000, 1000, 1));

