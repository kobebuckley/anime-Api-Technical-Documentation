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

async function fetchEpisodeData() {
  try {
    const response = await fetch(`https://api.jikan.moe/v4/anime/${animeId}/episodes`)
    const retrievedData = await response.json();
    // console.log(retrievedData);
    jsonEpisodeData = retrievedData.data;
    episodeList()

  } catch (error) {
    console.error(error);
  }
}


// #1 - Method to access the animelist data for Demon Slayer and share it on your website using (getAnimeFullById)
function generalAccess() {
  console.log("general demon slayer info: ",jsonData)
}

// #1 - Method to access the English & Japanese title
let JapaneseTitle;
let englishTitle;

function title() {
  let JapaneseTitle = jsonData['title_japanese']
  let englishTitle = jsonData['title_english']
  let titleInsert = document.getElementById("insert-title");
  titleInsert.innerHTML = "Japanese Title - " + JapaneseTitle + "<br>English Title - " + englishTitle

  console.log("Japanese Title: ",JapaneseTitle,"English Title: ",englishTitle)
}

// let newImgElement;

// #1 - Method to access the image

function firstImage() {
  let grabbedImage = jsonData['images']['jpg']['large_image_url']
  console.log("Here is the image: ", grabbedImage)
  let newImgElement = document.createElement("img");
  newImgElement.src = grabbedImage;
  let imageSection = document.getElementById("insert-image");
  imageSection.appendChild(newImgElement);
}


// #1 - Method to access the episode amount

function episodeAmount() {
  console.log("There are: ",jsonData['episodes']," episodes")
  let episodeAmount = document.getElementById("s1EpisodeNumber")
  episodeAmount.innerHTML = "Method to show the list of episodes in Demon Slayer S1 (" + jsonData['episodes']+" episodes)";
}





function episodeList() {
  console.log("Episode List is: ", jsonEpisodeData);
  let episodeContainer = document.getElementById("insert-episode-list");
  for (let i = 0; i < jsonEpisodeData.length; i++) {
    let episode = jsonEpisodeData[i];
    episodeAmount.appendChild
    let episodeLi = document.createElement("li");
    episodeLi.innerHTML = "<h3>" + "Episode # : " + episode.mal_id + "</h3>" +
                          "<h4>" + episode.title_japanese + " : " + episode.title + "</h4>";

    let episodeLink = document.createElement("a");
    episodeLink.target = "_blank";
    episodeLink.href = episode.url;
    episodeLink.textContent = "Link to Episode";
    episodeLi.appendChild(episodeLink);
    episodeContainer.appendChild(episodeLi);
  }
}


fetchData();
fetchEpisodeData();