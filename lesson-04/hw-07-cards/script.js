const suits = ['clubs', 'diamonds', 'hearts', 'spades'];
const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'T'];
let html = '<div class="wrapper">'
const specialValues = ['J', 'Q', 'K', 'T'];
for (const value of values) {
  for (const suit of suits) {
    if (specialValues.includes(value)) {
      let personImage;
      switch (value) {
        case 'J':
          personImage = 'jack';
          break;
        case 'Q':
          personImage = 'queen';
          break;
        case 'K':
          personImage = 'king';
          break;
        case 'T':
          personImage = suit;
          break;
      }
      html += `
  <div class="card card--person">
    <div class="card__info">${value}<img src="images/${suit}.svg" alt="${suit}"></div>
    <img class="person" src="images/${personImage}.svg" alt="${suit}">
     <div class="card__info">${value}<img src="images/${suit}.svg" alt="${suit}"></div>
   </div>`;
    } else {
      html += `<div class="card">
     <div class="card__info">${value}<img src="images/${suit}.svg" alt="${suit}"></div>
     <div class="card__info">${value}<img src="images/${suit}.svg" alt="${suit}"></div>
  </div>`;
    }

  }
}
html += '</div>';
document.body.innerHTML = html;

