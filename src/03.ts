{
  function concatenateArrays<T>(...arrays: T[][]): T[] {
    return arrays.flat();
  }
//   const result = concatenateArrays([1, 2], [3, 4], [5, 6]);
//   console.log(result);
}
