const resultsAllContainer = document.querySelector(".newsAll_results");

const hubbleUrl =
  "http://hubblesite.org/api/v3/news";
const url = "https://noroffcors.herokuapp.com/" + hubbleUrl;


async function fetchAllNews() {
    try {
      const response = await fetch(url);
      console.log(url);
      const json = await response.json();
      console.log(json);
      resultsAllContainer.innerHTML = "";
      json.forEach(function (article) {
        resultsAllContainer.innerHTML += `
                                        <div class="articleAllContainer">
                                        <a href="details.html?id=${article.news_id}">
                                        <h3>${article.name}</h3>          
                                        </a> 
                                        </div>       
          `;
      });  

      
    } catch (error) {
      console.log(error);
      resultsAllContainer.innerHTML = `An error accured calling API`;
    }
  }
  
fetchAllNews();


const nextPageButton = document.querySelector(".nextButton");

nextPageButton.addEventListener("click", nextPageFunction);
const nextPageUrl = url + "?page=2";

async function nextPageFunction() {
    try {
      const response = await fetch(nextPageUrl);
      console.log(nextPageUrl);
      const json = await response.json();
      console.log(json);
      resultsAllContainer.innerHTML = "";
      json.forEach(function (article) {
        resultsAllContainer.innerHTML += `
                                        <div class="articleAllContainer">
                                        <a href="details.html?id=${article.news_id}">
                                        <h3>${article.name}</h3>                                       
                                        </a> 
                                        </div>       
          `;
      }); 
      
      window.scrollTo(0, 0);
      
    } catch (error) {
      console.log(error);
      resultsAllContainer.innerHTML = `An error accured calling API`;
    }
  }
  
