'use strict';

const tvSearch = document.getElementById('tv-maze');
const resultsDiv = document.getElementById('results');

tvSearch.addEventListener('submit', async function(event) {
  event.preventDefault();

  const searchTVShow = document.querySelector('#query').value;


  resultsDiv.innerHTML = '';

  try {
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${searchTVShow}`);
    const data = await response.json();
    console.log(data);

    for (const item of data) {

      const show = item.show;

      const article = document.createElement('article');

      const h2 = document.createElement('h2');
      h2.innerText = show.name;
      article.appendChild(h2);

      const a = document.createElement('a');
      a.href = show.url;
      a.target = "_blank";
      a.innerText = "View details";
      article.appendChild(a);

      const img = document.createElement('img');
      img.src = show.image?.medium;
      img.alt = show.name;
      article.appendChild(img);

      const summary = document.createElement('div');
      summary.innerHTML = show.summary;
      article.appendChild(summary);

      resultsDiv.appendChild(article);
    }

  } catch (error) {
    console.log('error:', error.message);
  }

});
