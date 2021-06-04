fetch("https://5d8cdb5a443e3400143b4bea.mockapi.io/corebizchile/products")
  .then((response) => {
    return response.json();
  })
  .then((products) => {
    console.log(products);
  });
