alert("active")
const animeId = 1; // Replace with the desired anime ID

fetch(`https://api.jikan.moe/v4/anime/${animeId}/full`)
  .then(response => response.json())
  .then(data => {
    // Process the retrieved data
    console.log(data);
  })
  .catch(error => {
    // Handle any errors
    console.error(error);
  });
