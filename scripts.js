const animeId = 38000; // Demon Slayer: Kimetsu no Yaiba

let jsonData; // Global variable to store the JSON data

async function fetchData() {
  try {
    const response = await fetch(`https://api.jikan.moe/v4/anime/${animeId}/full`);
    const retrievedData = await response.json();
    // console.log(retrievedData);
    jsonData = retrievedData.data;
    generalAccess();
    title();
    episodeAmount();
    firstImage();


  } catch (error) {
    console.error(error);
  }
}


// !#1 - Method to access the animelist data for Demon Slayer and share it on your website using (getAnimeFullById)
function generalAccess() {
  console.log("general demon slayer info: ",jsonData)
}

// #1 - Method to access the English & Japanese title
let JapaneseTitle;
let englishTitle;

function title() {
  let JapaneseTitle = jsonData['title_japanese']
  let englishTitle = jsonData['title_english']
  console.log("Japanese Title: ",JapaneseTitle,"English Title: ",englishTitle)
}


// #1 - Method to access the episode amount

function episodeAmount() {
  console.log("There are: ",jsonData['episodes']," episodes")
}



// let newImgElement;

// #1 - Method to access the image

function firstImage() {
  let grabbedImage = jsonData['images']['jpg']['large_image_url']
  console.log("Here is the image: ", grabbedImage)
  let newImgElement = document.createElement("img");
  newImgElement.src = grabbedImage;
// Append the image element to a container in the HTML document
   let imageSection = document.getElementById("insert-image");
   imageSection.appendChild(newImgElement);
}







fetchData();
