// Recibir datos con React
const Class2 = () => {
  const productList = ["item1", "item2", "item3", "item4", "item5"];

  const productListJSX = productList.map((product, i) => {
    const productMayus = product.toUpperCase();
    return <li key={i}>{productMayus}</li>;
  });

  return <ul>{productListJSX}</ul>;
};

export { Class2 };
