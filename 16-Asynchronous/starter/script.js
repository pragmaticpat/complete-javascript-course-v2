'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

function renderCountry(data, className = '') {
  const html = `<article class="country ${className}">
  <img class="country__img" src="${data.flag}" />
  <div class="country__data">
    <h3 class="country__name">${data.name}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${(
      +data.population / 1000000
    ).toFixed(1)} million</p>
    <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
    <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
  </div>
</article>`;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
}
///////////////////////////////////////

// function getCountryData(country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
//   request.send();
//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     const html = `<article class="country">
//   <img class="country__img" src="${data.flag}" />
//   <div class="country__data">
//     <h3 class="country__name">${data.name}</h3>
//     <h4 class="country__region">${data.region}</h4>
//     <p class="country__row"><span>👫</span>${(
//       +data.population / 1000000
//     ).toFixed(1)} million</p>
//     <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//     <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//   </div>
// </article>`;

//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   });
// }

// getCountryData('ireland');
// getCountryData('usa');
// getCountryData('poland');

// ajax call country 1
// function getCountryAndNeighbor(country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
//   request.send();
//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     renderCountry(data);

//     const [neighbour] = data.borders;

//     const request2 = new XMLHttpRequest();
//     request2.open(`GET`, `https://restcountries.eu/rest/v2/alpha/${neighbour}`);
//     request2.send();

//     request2.addEventListener('load', function () {
//       const data2 = JSON.parse(this.responseText);
//       console.log(data2);

//       renderCountry(data2, 'neighbour');
//     });
//   });
// }

// getCountryAndNeighbor('germany');

// setTimeout(() => {
//   console.log('1 second passed');
//   setTimeout(() => {
//     console.log('2 seconds passed');
//     setTimeout(() => {
//       console.log('3 seconds passed');
//     }, 1000);
//   }, 1000);
// }, 1000);

// const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
//   request.send();

// const request = fetch(`https://restcountries.eu/rest/v2/name/portugal`);
// console.log(request);

// const getCountryData = function (country) {
//   fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//     });
// // };

// const getCountryData = function (country) {
//   fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//     .then(response => {
//       console.log(response);

//       if (!response.ok)
//         throw new Error(`Country "${country}" not found! (${response.status})`);

//       return response.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);

//       // const neighbour = 'asdfas';
//       const neighbour = data[0].borders[0];

//       if (!neighbour) return;
//       return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`);
//     })
//     .then(nResponse => {
//       if (nResponse) {
//         console.log(nResponse);
//         return nResponse.json();
//       }
//     })
//     .then(data => {
//       if (data) renderCountry(data, 'neighbour');
//     })
//     .catch(err => {
//       console.error(`${err} 🔥🔥🔥`);
//       renderError(`Something went wrong! 🔥🔥 ${err}. Try again.`);
//     })
//     .finally(() => {
//       // good for spinners
//       countriesContainer.style.opacity = 1;
//     });
// };

const getJSON = function (url, errorMessage = `Something went wrong`) {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMessage} (${response.status})`);

    return response.json();
  });
};

// const getCountryData = function (country) {
//   // country 1
//   getJSON(
//     `https://restcountries.eu/rest/v2/name/${country}`,
//     `Country not found`
//   )
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders[0];

//       if (!neighbour) throw new Error(`No neighbor found!`);

//       // country 2
//       return getJSON(
//         `https://restcountries.eu/rest/v2/alpha/${neighbour}`,
//         `Neighboring country not found!`
//       );
//     })
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//       console.error(`${err} 🔥🔥🔥`);
//       renderError(`Something went wrong! 🔥🔥 ${err}. Try again.`);
//     })
//     .finally(() => {
//       // good for spinners
//       countriesContainer.style.opacity = 1;
//     });
// };

// btn.addEventListener('click', function () {
//   getCountryData('australia');
// });

///////////////////////////////////////
// Coding Challenge #1

/* 
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

Here are your tasks:

PART 1
✅ 1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
✅ 2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api.
The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
✅ 3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
✅ 4. Chain a .catch method to the end of the promise chain and log errors to the console
✅ 5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

PART 2
✅ 6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
✅ 7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474

GOOD LUCK 😀
*/

// const whereAmI = function (lat, lng) {
//   fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//     .then(response => {
//       if (response.status === 403)
//         throw new Error(`💨 Exceeded API throttle ${response.status}`);
//       return response.json();
//     })
//     .then(json => {
//       console.log(`You are in ${json.city}, ${json.country}`);
//       getCountryData(json.country);
//     })
//     .catch(err => console.error(`😭 Unable to get country data! (${err})`));
// };

// btn.addEventListener('click', function () {
//   whereAmI(52.508, 13.381);
//   whereAmI(19.037, 72.873);
//   whereAmI(-33.933, 18.474);
// });

// console.log('Test start'); //1
// setTimeout(() => {
//   console.log('zero second timer'); //5
// }, 0);

// Promise.resolve('Resolved promise 1').then(res => console.log(res)); //3
// Promise.resolve('Resolved promise 2').then(res => {
//   for (let i = 0; i < 1000000000; i++) {}
//   console.log(res);
// }); //4

// console.log('test end'); //2

// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.info(`Lottery draw is happening! 🔮`);

//   setTimeout(() => {
//     if (Math.random() > 0.5) resolve(`You win! 🎊 💰`);
//     else reject(new Error(`You lost your money 😭`));
//   }, 2000);
// });

// lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// // promisifying setTieout
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

// wait(2)
//   .then(() => {
//     console.log(`I waited 2 seconds`);
//     return wait(1);
//   })
//   .then(() => {
//     console.log(`I waited 3 seconds`);
//     return wait(1);
//   })
//   .then(() => {
//     console.log(`I waited 4 seconds`);
//     return wait(1);
//   });

// Promise.resolve('abc').then(x => console.log(x));
// Promise.reject(new Error('Problem! 🔥')).catch(x => console.error(x));
// console.log('x');

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     // navigator.geolocation.getCurrentPosition(
//     //   position => resolve(position),
//     //   err => reject(new Error(`${err}`))
//     // );
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// const whereAmI = function () {
//   getPosition()
//     .then(pos => {
//       const { latitude: lat, longitude: lng } = pos.coords;

//       return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//     })
//     .then(response => {
//       if (response.status === 403)
//         throw new Error(`💨 Exceeded API throttle ${response.status}`);
//       return response.json();
//     })
//     .then(json => {
//       console.log(`You are in ${json.city}, ${json.country}`);
//       getCountryData(json.country);
//     })
//     .catch(err => console.error(`😭 Unable to get country data! (${err})`));
// };

// btn.addEventListener('click', whereAmI);

///////////////////////////////////////
// Coding Challenge #2

/* 
Build the image loading functionality that I just showed you on the screen.

Tasks are not super-descriptive this time, so that you can figure out some stuff on your own. Pretend you're working on your own 😉

PART 1
✅ 1. Create a function 'createImage' which receives imgPath as an input. This function returns a promise which creates a new image (use document.createElement('img')) and sets the .src attribute to the provided image path. When the image is done loading, append it to the DOM element with the 'images' class, and resolve the promise. The fulfilled value should be the image element itself. In case there is an error loading the image ('error' event), reject the promise.

If this part is too tricky for you, just watch the first part of the solution.

PART 2
✅ 2. Comsume the promise using .then and also add an error handler;
✅ 3. After the image has loaded, pause execution for 2 seconds using the wait function we created earlier;
✅ 4. After the 2 seconds have passed, hide the current image (set display to 'none'), and load a second image (HINT: Use the image element returned by the createImage promise to hide the current image. You will need a global variable for that 😉);
✅ 5. After the second image has loaded, pause execution for 2 seconds again;
✅ 6. After the 2 seconds have passed, hide the current image.

TEST DATA: Images in the img folder. Test the error handler by passing a wrong image path. Set the network speed to 'Fast 3G' in the dev tools Network tab, otherwise images load too fast.

GOOD LUCK 😀
*/

// const images = document.querySelector('.images');
// let currentImage;

// const createImage = function (imgPath) {
//   return new Promise(function (resolve, reject) {
//     currentImage = document.createElement('img');
//     currentImage.src = imgPath;
//     currentImage.addEventListener('load', function () {
//       images.insertAdjacentElement('beforeend', this);
//       resolve(this);
//     });
//     currentImage.addEventListener('error', err =>
//       reject(new Error(`Unable to load image at path ${imgPath}, (${err})`))
//     );
//   });
// };

// createImage(`img/img-1.jpg`)
//   .then(() => console.log(`Image loaded!`))
//   .then(() => wait(2))
//   .then(() => {
//     currentImage.style.display = `none`;
//     return createImage(`img/img-2.jpg`);
//   })
//   .then(() => wait(2))
//   .then(() => {
//     currentImage.style.display = `none`;
//     return createImage(`img/img-3.jpg`);
//   })
//   .catch(err => {
//     console.error(`Something went wrong! ${err}`);
//   });

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// const whereAmI = async function () {
//   try {
//     // Gelocation
//     const pos = await getPosition();
//     const { latitude: lat, longitude: lng } = pos.coords;

//     // Reverse geocoding
//     const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);

//     if (!resGeo.ok) throw new Error('Problem getting location data');
//     const dataGeo = await resGeo.json();

//     // Country data
//     // fetch(`https://restcountries.eu/rest/v2/name/${country}`).then(res => console.log(res))
//     const res = await fetch(
//       `https://restcountries.eu/rest/v2/name/${dataGeo.countryasdf}`
//     ); // async await is just syntactic sugar over the .then approach (just above as reference)
//     if (!res.ok) throw new Error('Problem getting country');

//     const data = await res.json();
//     renderCountry(data[0]);

//     return `You are in ${dataGeo.city}, ${dataGeo.country}`;
//   } catch (err) {
//     console.error(`${err} 💩`);
//     renderError(`🔥 ${err.message}`);

//     // reject promise returned from async function
//     throw err;
//   }
// };

// console.log('1: Will get location');

// // const city = whereAmI();
// // console.log(city);
// // whereAmI()
// //   .then(city => console.log(`2: ${city}`))
// //   .catch(err => console.error(`2: ${err.message} 💥`))
// //   .finally(() => console.log('3: Finished'));
// // console.log('3: Finished getting location');

// (async function () {
//   try {
//     const city = await whereAmI();
//     console.log(`2: ${city}`);
//   } catch (err) {
//     console.error(`2: 💩 an error occurred! - ${err.message} 💩`);
//   } finally {
//     console.log('3: Finished getting location');
//   }
// })();

// const get3Countries = async function (c1, c2, c3) {
//   try {
//     // const [data1] = await getJSON(
//     //   `https://restcountries.eu/rest/v2/name/${c1}`
//     // );
//     // const [data2] = await getJSON(
//     //   `https://restcountries.eu/rest/v2/name/${c2}`
//     // );
//     // const [data3] = await getJSON(
//     //   `https://restcountries.eu/rest/v2/name/${c3}`
//     // );

//     const data = await Promise.all([
//       getJSON(`https://restcountries.eu/rest/v2/name/${c1}`),
//       getJSON(`https://restcountries.eu/rest/v2/name/${c2}`),
//       getJSON(`https://restcountries.eu/rest/v2/name/${c3}`),
//     ]);

//     console.log(data.map(d => d[0].capital));
//   } catch (err) {
//     console.log(`💩 Error occurred: ${err.message}`);
//   }
// };

// get3Countries('ireland', 'poland', 'hungary');

// promise race
// (async function () {
//   const res = await Promise.race([
//     getJSON(`https://restcountries.eu/rest/v2/name/italy`),
//     getJSON(`https://restcountries.eu/rest/v2/name/ireland`),
//     getJSON(`https://restcountries.eu/rest/v2/name/uruguay`),
//   ]);

//   console.log(res);
// })();

// const timeout = function (s) {
//   return new Promise(function (_, reject) {
//     setTimeout(() => {
//       reject(new Error('Request took too long!'));
//     }, s * 1000);
//   });
// };

// Promise.race([
//   getJSON(`https://restcountries.eu/rest/v2/name/italy`),
//   timeout(0.11),
// ])
//   .then(res => console.log(res[0]))
//   .catch(err => console.error(err));

// // Promise.allSettled
// Promise.allSettled([
//   Promise.resolve('success'),
//   Promise.reject('💩'),
//   Promise.resolve('success'),
//   Promise.resolve('another success'),
// ]).then(res => console.log(res));
// // .catch(err => console.log(`An error occurred!`));

// // promise.all
// Promise.all([
//   Promise.resolve('success'),
//   Promise.reject('💩'),
//   Promise.resolve('success'),
//   Promise.resolve('another success'),
// ])
//   .then(res => console.log(res))
//   .catch(err => console.log(`An error occurred: ${err}`));

// // Promise.any
// Promise.any([
//   Promise.resolve('promise.any success'),
//   Promise.reject('💩'),
//   Promise.resolve('promise.any success'),
//   Promise.resolve('another promise.any success'),
// ])
//   .then(res => console.log(res))
//   .catch(err => console.log(`An error occurred!`));

///////////////////////////////////////
// Coding Challenge #3

/* 
PART 1
Write an async function 'loadNPause' that recreates Coding Challenge #2, this time using async/await (only the part where the promise is consumed). Compare the two versions, think about the big differences, and see which one you like more.
Don't forget to test the error handler, and to set the network speed to 'Fast 3G' in the dev tools Network tab.

PART 2
1. Create an async function 'loadAll' that receives an array of image paths 'imgArr';
2. Use .map to loop over the array, to load all the images with the 'createImage' function (call the resulting array 'imgs')
3. Check out the 'imgs' array in the console! Is it like you expected?
4. Use a promise combinator function to actually get the images from the array 😉
5. Add the 'paralell' class to all the images (it has some CSS styles).

TEST DATA: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']. To test, turn off the 'loadNPause' function.

GOOD LUCK 😀
*/

const images = document.querySelector('.images');
let currentImage;

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    currentImage = document.createElement('img');
    currentImage.src = imgPath;
    currentImage.addEventListener('load', function () {
      images.insertAdjacentElement('beforeend', this);
      resolve(this);
    });
    currentImage.addEventListener('error', err =>
      reject(new Error(`Unable to load image at path ${imgPath}, (${err})`))
    );
  });
};

const loadAll = async function (imgArr) {
  // My solution
  // const imgs = Promise.all(
  //   imgArr.map(async image => await createImage(image))
  // ).then(res => res.map(image => image.classList.add('parallel')));

  //Jonas's solution
  try {
    const imgs = imgArr.map(async image => await createImage(image));

    const imgsEl = await Promise.all(imgs);
    console.log(imgsEl);

    imgsEl.forEach(img => img.classList.add('parallel'));

    console.log(imgs);
  } catch (err) {
    console.error(err);
  }
};

const loadNPause = async function () {
  try {
    let img = await createImage(`img/img-1.jpg`);

    await wait(2);
    img.style.display = 'none';
    img = await createImage(`img/img-2.jpg`);
    console.log('Image 1 loaded');

    await wait(2);
    img.style.display = 'none';
    img = await createImage(`img/img-3.jpg`);
    console.log('Image 2 loaded');

    await wait(2);
    img.style.display = 'none';
    console.log('Image 3 loaded');
  } catch (e) {
    console.error(e);
  }
};

loadAll([`img/img-1.jpg`, `img/img-2.jpg`, `img/img-3.jpg`]);

// loadNPause();
