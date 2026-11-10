const pizzas = ['margherita', 'pepperoni', 'hawaiian', 'veggie'];
const sizes = ['small', 'medium', 'large'];
const veggiePizzas = ['margherita', 'veggie'];
let html = '<div class="menu">';
let item = 0;
for (const pizza of pizzas) {
  let price;
  switch (pizza) {
    case 'margherita':
      price = 150;
      break;
    case 'pepperoni':
      price = 180;
      break;
    case 'hawaiian':
      price = 190;
      break;
    case 'veggie':
      price = 160;
      break;
  }
  for (const size of sizes) {
    let finalPrice;
    switch (size) {
      case 'medium':
        finalPrice = price * 1.3;
        break;
      case 'large':
        finalPrice = price * 1.6;
        break;
      default:
        finalPrice = price;
        break;

    }
    item += 1;
    html += `<div class="item">
     <h3>${pizza} — ${size}</h3>
     <p>Price: ${finalPrice} UAH</p>
     ${veggiePizzas.includes(pizza) ? '<p>🌱 Vegetarian</p>' : ''}
   </div>`;
  }
}
html += `<p>Total items: ${item}</p>`;
html += '</div>';
document.body.innerHTML = html;