{
  // Problem 08

  async function squareAsync(n: number): Promise<number> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (n < 0) {
          reject(new Error("Negetive"));
        } else {
          resolve(n * n);
        }
      }, 1000);
    });
  }
  
  //   const result = squareAsync(10).then(console.log);
  //   console.log(result);
}
