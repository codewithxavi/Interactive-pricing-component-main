let input = document.querySelector('#medidor').value;
let precios = ['$8', '$12', '$16', '$24', '$36']
let pageviews = ['10K pageviews', '50K pageviews', '100K pageviews', '500K pageviews', '1M pageviews']

mostrarPrecio()

document.querySelector('#medidor').onchange = mostrarPrecio

function mostrarPrecio() {
  let input = document.querySelector('#medidor').value;
  for (let i = 0; i <= 4; i++) {
    if (input == i) {
      document.querySelector('.card__heading').innerHTML = pageviews[i]
      document.querySelector('#precios').innerHTML = precios[i]
      console.log(input)
    }
  }
}