const detailContainer = document.querySelector(".article-details");
const pageTitle = document.querySelector(".page-title");

const queryString = document.location.search;
console.log(queryString);
const params = new URLSearchParams(queryString);
console.log(params);
const id = params.get("id");
console.log(id);
const hubbleUrl =
  "http://hubblesite.org/api/v3/news_release/";
const url = "https://noroffcors.herokuapp.com/" + hubbleUrl + id;

console.log(url);

async function fetchArticle() {
  try {
    const response = await fetch(url);
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
    <div class="last_news-image" style="background-image: url(${details.keystone_image_2x});"></div> 
    <p class="article-abstract">${details.abstract}</p>
    <div class="last_news-url">
      <p>Full article:</span>
      <a href="${details.url}" > ${details.url}</a>
    </div>
    <div class="last_news-published"><b>Published:</b> ${details.publication}</div>
    <p class="last_news-credits">${details.credits}</p>
    `;
  document.title = `${details.name}`;
}
