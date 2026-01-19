let cart = [];
let grid = document.getElementById("productGrid");

products.forEach(p => {
  grid.innerHTML += `
    <div class="product-card">
      <img src="${p.img}">
      <h3>${p.name}</h3>
      <p>₹${p.price}</p>
      <button onclick="addToCart(${p.id})">Add to Cart</button>
    </div>
  `;
});

function addToCart(id){
  let p = products.find(x => x.id === id);
  cart.push(p);
  alert(p.name + " added to cart");
}

function checkout(){
  let msg = "Order from Powder Root:%0A";
  let total = 0;
  cart.forEach(p=>{
    msg += `• ${p.name} - ₹${p.price}%0A`;
    total += p.price;
  });
  msg += `%0ATotal = ₹${total}`;

  window.open("https://wa.me/919096999662?text=" + msg);
}
