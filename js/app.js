const urlBreedList = 'https://dog.ceo/api/breeds/list/all';
let selectedBreed;
const breed = document.querySelector('#breed');

function addDog() {
  fetch(urlBreedList)
  .then(response => response.json())
  .then(data => {
    const list = Object.keys(data.message);
    list.forEach( nameOfBreed => {
      const option = document.createElement('OPTION')
      option.innerText = nameOfBreed;
      breed.appendChild(option);
    });
  })
}

addDog();