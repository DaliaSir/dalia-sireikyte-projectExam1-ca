const detailContainer = document.querySelector(".image-details");
const pageTitle = document.querySelector(".page-title");

const queryString = document.location.search;
console.log(queryString);
const params = new URLSearchParams(queryString);
console.log(params);
const id = params.get("id");
console.log(id);
const imageDetailUrl =
  "http://hubblesite.org/api/v3/image/";
const imageUrl = "https://noroffcors.herokuapp.com/" + imageDetailUrl + id;

console.log(imageUrl);

async function fetchArticle() {
  try {
    const response = await fetch(imageUrl);
    const details = await response.json();
    console.log(details);
    createHTML(details);
  } catch (error) {
    console.log(error);
    detailContainer.innerHTML = `An error accured calling API`;
  }
}
fetchArticle();

function createHTML(details) {
  detailContainer.innerHTML = `
    <h2>${details.name}</h2>
    <div class="last_news-image" style="background-image: url(${details.image_files[0].file_url});"></div> 
    <p class="article-abstract">${details.description}</p>
    <p class="last_news-credits">Credits: ${details.credits}</p>
    `;
  document.title = `${details.name}`;
}
