const urlBreedList = 'https://dog.ceo/api/breeds/list/all';
let selectedBreed = 'labrador';
let urlDoggo = `https://dog.ceo/api/breed/${selectedBreed}/images/random`;
let breedList = document.querySelector('#breed');
let dogImg = document.querySelector('.img');

function addDogList() {
  fetch(urlBreedList)
    .then(response => response.json())
    .then(data => {
      const list = Object.keys(data.message);
      list.forEach(nameOfBreed => {
        const option = document.createElement('OPTION')
        option.innerText = nameOfBreed;
        option.value = nameOfBreed;
        breedList.appendChild(option);
      });
    })
}

const getImg = function getImg(urlDoggo) {
  fetch(urlDoggo)
    .then(response => response.json())
    .then(data => {
      dogImg.src = data.message;
      dogImg.alt = `${selectedBreed} dog picture`;
    })
}

function showImg() {
  breedList.addEventListener('change', (e) => {
    selectedBreed = (e.target.value);
    urlDoggo = `https://dog.ceo/api/breed/${selectedBreed}/images/random`;
    getImg(urlDoggo);
  });
}

addDogList();
getImg(urlDoggo);
showImg();