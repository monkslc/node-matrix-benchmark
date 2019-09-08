const { printHeader } = require('../common.js');
const { printMathJSBenchmark } = require('./utils.js');
const {
	mult2DMatrixBenchmark,
	createAndMult2DMatrixBenchmark,
	invert2DMatrixBenchmark,
	createAndInvert2DMatrixBenchmark,
	transpose2DMatrixBenchmark
} = require('./benchmarks.js');

printHeader();
// MULTIPLY
printMathJSBenchmark('mult-2d-matrix(5x5)', 1E6, mult2DMatrixBenchmark(5, 5, 1E6)); 
printMathJSBenchmark('mult-2d-matrix(250x250)', 1E2, mult2DMatrixBenchmark(250, 250, 1E2)); 
printMathJSBenchmark('mult-2d-matrix(1000x1000)', 1, mult2DMatrixBenchmark(1000, 1000, 1));

// CREATE AND MULTIPLY
printMathJSBenchmark('create-mult-2d-matrix(5x5)', 1E6, createAndMult2DMatrixBenchmark(5, 5, 1E6));
printMathJSBenchmark('create-mult-2d-matrix(250x250)', 1E2, createAndMult2DMatrixBenchmark(250, 250, 1E2));
printMathJSBenchmark('create-mult-2d-matrix(1000x1000)', 1, createAndMult2DMatrixBenchmark(1000, 1000, 1));

// INVERT
printMathJSBenchmark('invert-2d-matrix(5x5)', 1E6, invert2DMatrixBenchmark(5, 5, 1E6));
printMathJSBenchmark('invert-2d-matrix(1000x1000)', 1, invert2DMatrixBenchmark(1000, 1000, 1));

// CREATE AND INVERT
printMathJSBenchmark('create-invert-2d-matrix(5x5)', 1E6, createAndInvert2DMatrixBenchmark(5, 5, 1E6));
printMathJSBenchmark('create-invert-2d-matrix(1000x1000)', 1, createAndInvert2DMatrixBenchmark(1000, 1000, 1));

// TRANSPOSE
printMathJSBenchmark('transpose-2d-matrix(5x5)', 1E6, transpose2DMatrixBenchmark(5, 5, 1E6));
printMathJSBenchmark('transpose-2d-matrix(250x250)', 1E2, transpose2DMatrixBenchmark(250, 250, 1E2));
printMathJSBenchmark('transpose-2d-matrix(1000x1000)', 1, transpose2DMatrixBenchmark(1000, 1000, 1));
