'use strict';

const jokeForm = document.querySelector('#joke-form');
const jokeResults = document.querySelector('#joke-results');

jokeForm.addEventListener('submit', async function(event) {
  event.preventDefault();

  const searchWord = document.querySelector('#joke-query').value;
  jokeResults.innerHTML = '';

  try {
    const response = await fetch(`https://api.chucknorris.io/jokes/search?query=${searchWord}`);
    const data = await response.json();

    for (const joke of data.result) {
      const article = document.createElement('article');
      const p = document.createElement('p');
      p.innerText = joke.value;
      article.appendChild(p);
      jokeResults.appendChild(article);
    }

  } catch (error) {
    console.log(error);
  }
});

