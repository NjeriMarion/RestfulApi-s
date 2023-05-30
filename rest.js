let text = document.createElement('h1')
text.innerHTML = "Deal of the day"
document.getElementById('Products').appendChild(text) 

function getProduct(Items) {
    const products = document.getElementById("Products");
    Items.forEach((product) => {
      const item = document.createElement("div");
      item.classList.add("product-card");
      item.innerHTML = `
              <img src="${product.thumbnail}" alt="${product.name}" />
              <h2>${product.title}</h2>
              <div class='productPrice'>
              <p>${product.price}</p>
              <button>ADD TO CART</button>
              </div>
          `;
      products.appendChild(item);
    });
  }
  function fetchProducts() {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((array) => {
        const output = array.products.slice(0,11);
        getProduct(output);
      });
  }
  fetchProducts()
  