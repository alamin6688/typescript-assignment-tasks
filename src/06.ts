{
  interface Product {
    name: string;
    price: number;
  }

  function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products.length === 0) {
      return null;
    } else {
      return products.reduce((max, product) =>
        product.price > max.price ? product : max
      );
    }
  }

//   const products = [
//     { name: "Pen", price: 100 },
//     { name: "Notebook", price: 250 },
//     { name: "Bag", price: 50 },
//     { name: "Macbook", price: 200000 },
//   ];

//   const result = getMostExpensiveProduct(products);
//   console.log(result);
}
