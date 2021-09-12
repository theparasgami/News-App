// Api key 2df1a3fb50c541f794903817effa3c1c

//grab the news Container
let newsAccordian= document.getElementById('newsAccordian');

let apiKey='2df1a3fb50c541f794903817effa3c1c';
let source='in';

const xhr=new XMLHttpRequest();
xhr.open('POST',`https://newsapi.org/v2/top-headlines?country=${source}&apiKey=${apiKey}`,true);
xhr.getResponseHeader('Content-type','application/json');

xhr.onload=function(){
    if(this.status===200)
    {
        let json=JSON.parse(this.responseText);
         let articles=json.articles;
        
         // console.log(articles);   
         let newsHtml="";
         articles.forEach(function(element,index) {
            // console.log(articles[news]);
             let news=
                    `<div class="accordion-item">
                    <h2 class="accordion-header" id="flush-heading${index}">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#flush-collapse${index}" aria-expanded="false" aria-controls="flush-collapse${index}">
                           ${element["title"]}
                        </button>
                    </h2>
                    <div id="flush-collapse${index}" class="accordion-collapse collapse" aria-labelledby="flush-heading${index}" data-bs-parent="#newsAccordian">
                        <div class="accordion-body">${element["description"]}.<a href="${element['url']}" target="_blank">Read More Here</a></div>
                        </div>
                    </div>`;
                newsHtml+=news;
            
         
        });
         newsAccordian.innerHTML=newsHtml;
    }
    else{
        console.log("Some Error");
    }
}
xhr.send();

