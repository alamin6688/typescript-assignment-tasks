{
  // Problem 01
  function formatString(input: string, toUpper?: boolean): string {
    if (toUpper === false) {
      return input.toLowerCase();
    } else {
      return input.toUpperCase();
    }
  }
  //   const result = formatString("Bd", true);
  //   console.log(result);
}
