const resultsLastArticleContainer = document.querySelector(".resultsLastArticle");

const hubbleArticleUrl =
  "http://hubblesite.org/api/v3/news_release/last";
const urlArticle = "https://noroffcors.herokuapp.com/" + hubbleArticleUrl;

async function fetchLastArticle() {
    try {
        const response = await fetch(urlArticle);
        console.log(urlArticle);
        const articleLast = await response.json();
        console.log(articleLast);
        createHtml(articleLast);
    } catch (error) {
        console.log(error);
        resultsLastArticleContainer.innerHTML = `An error accured calling API`;
    }
}

fetchLastArticle();
    
    function createHtml(articleLast) {
        resultsLastArticleContainer.innerHTML = `
        <a href="details.html?id=${articleLast.news_id}">
            <div class="last_news-image" style="background-image: url(${articleLast.keystone_image_2x});"></div>
            <h3>${articleLast.name}</h3>
        </a>   
            <div class="last_news-published"><b>Published:</b> ${articleLast.publication}</div>
            <p class="last_news-credits">${articleLast.credits}</p>
        `;
    }



const resultsContainer = document.querySelector(".news_results");
const hubbleUrl =
  "http://hubblesite.org/api/v3/news";
const url = "https://noroffcors.herokuapp.com/" + hubbleUrl;

async function fetchNews() {
    try {
      const response = await fetch(url);
      console.log(url);
      const json = await response.json();
      console.log(json);
      resultsContainer.innerHTML = "";

      for(let i=0; i< json.length; i++) {
        if(json[i].name===json[0].name){
            continue;
        }
    
        if(i===4){
            break;
        }
     
        resultsContainer.innerHTML += `
                                        <div class="articleContainer">
                                        <a href="details.html?id=${json[i].news_id}">
                                        <h3>${json[i].name}</h3>          
                                        </a> 
                                        </div>       
      `;} 
    } catch (error) {
      console.log(error);
      resultsContainer.innerHTML = `An error accured calling API`;
    }
  }
  
  fetchNews();
