{
  // Problem 05
  function processValue(value: string | number): number {
    if (typeof value === "string") {
      return value.length;
    } else {
      return value * 2;
    }
  }

  //   const result = processValue(10);
  //   const result2 = processValue('developer');
  //   console.log(result2);
}
