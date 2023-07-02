const animeId = 38000; // Demon Slayer: Kimetsu no Yaiba

let jsonData; // Global variable to store the JSON data

async function fetchData() {
  try {
    const response = await fetch(`https://api.jikan.moe/v4/anime/${animeId}/full`);
    const retrievedData = await response.json();
    console.log(retrievedData);
    jsonData = retrievedData.data;
    console.log("here are the available data options: ", jsonData)
    grabUrl();



  } catch (error) {
    console.error(error);
  }
}


function grabUrl() {
  console.log("url data here :",jsonData['url']);
}





fetchData();
