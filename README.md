# node-matrix-benchmark

### Viewing benchmark results
Benchmark results are stored in the `results` dir as text files

### Running the benchmarks
** Every benchmark **
`npm run all-bench`

** Mathjs benchmarks **
`npm run mathjs-bench`

** Tensorflowjs benchmarks **
`npm run tensorflowjs-bench`

The results of the benchmark get stored in the `results` dir

### Comparing benchmark results
`npm run cmp-bench`

The results from this command are stored in `results/cmp-mathjs-tensorflowjs.txt`
