import { countryPeople, famousAreas } from './data1.js';

// console.log(countryPeople);
console.log(countryPeople, famousAreas());

const btn = document.querySelector('.btn-country');
const countries = document.querySelector('.countries');

const request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.eu/rest/v2/name/japan');
request.send();
request.addEventListener('load', function () {
  // console.log(request.response);

  // const text = JSON.parse(request.response);
  // const text2 = JSON.parse(request.response)[0];
  // console.log(text2);

  const [data] = JSON.parse(request.response);

  console.log(data.flag);

  console.log(data);
  //! Make an HTML template
  const html = `
  <article class="country">
  <img src="${
    data.flag
  }" height="300px" alt="country pic" class="country__img" />
  <div class="country__data">
    <h3 class="country__name">${data.name}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span></span>${+data.population} people </p>
    <p class="country__row"><span></span>${data.languages[0].name}</p>
    <p class="country__row"><span></span>${data.currencies[0].name}</p>
  </div>
</article>
  `;
  countries.insertAdjacentHTML('beforeend', html);
});
