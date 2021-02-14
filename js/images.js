const resultsLastArticleContainer = document.querySelector(".images_container");

const hubbleArticleUrl =
  "http://hubblesite.org/api/v3/";

const urlBasic = "https://noroffcors.herokuapp.com/" + hubbleArticleUrl;
const urlArticle =  urlBasic + "images";


async function fetchLastArticle() {
    try {
        const response = await fetch(urlArticle);
        console.log(urlArticle);
        const json = await response.json();
        resultsLastArticleContainer.innerHTML = "";
        for(let i=0; i< json.length; i++){

            const imageUrl = urlBasic + `image/${json[i].id}`;
            const response = await fetch(imageUrl);
            const results = await response.json();


            resultsLastArticleContainer.innerHTML += `
                                            <div class="imageContainer">
                                            <a href="imageDetails.html?id=${json[i].id}">
                                            <div class="img_wrap">
                                            <div class="images_file" style="background-image: url(${results.image_files[0].file_url});"></div>
                                            <h3 class="img_description">${results.name}</h3>
                                            </div>
                                            <p class="image-credits">Credits: ${results.credits}</p>
                                            <h3 class="image-h3">${results.name}</h3>          
                                            </a> 
                                           
                                            </div>       
            `;
            
        };  

        
    } catch (error) {
        console.log(error);
        resultsLastArticleContainer.innerHTML = `An error accured calling API`;
    }
    }
    
    fetchLastArticle();