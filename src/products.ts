// Task 4
interface Product {
    name: string;
    price: number;
  }
  
  const products: Product[] = [
    { name: "pen", price: 10 },
    { name: "notebook", price: 20 },
    { name: "eraser", price: 5 },
  ];
  
  function totalPrice(products: Product[]): number {
    return products.reduce((total, product) => total + product.price, 0);
  }
  
  const result = totalPrice(products);
  console.log(result, "result");
  