'use strict';

const tvSearch = document.getElementById('tv-maze');

    tvSearch.addEventListener('submit', async function(event) {
      event.preventDefault();

      const searchTVShow = document.querySelector('#query').value;

      try {
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${searchTVShow}`);
        const data = await response.json();
        console.log(data);

      } catch (error) {
        console.log('error:', error.message);
      }

});