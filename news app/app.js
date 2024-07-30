async function newsdata(query){
    a = await fetch("https://newsapi.org/v2/everything?q="+query+"&apiKey=267221deb91e437cb370e7edefed2a22")
    b = await a.json();

    data = ""
    b.articles.forEach(news => {
        console.log(news)
    urlimage= news.urlToImage !=null ? news.urlToImage:'/demoimg.jpg'

        if(news.title!="[Removed]"){

      
      data +=` <div class="col">
          <div class="card h-100">
            <img src="${  urlimage
                }" class="card-img-top" alt="..." style="height:220px;">
            <div class="card-body">
              <h5 class="card-title">${news.title}</h5>
              <p class="card-text">${news.description} </p>
            </div>
            <div class="card-footer">
           <a href="${news.url}" class="link"><small class="text-body-secondary"> Read More </small></a> 
            </div>
          </div>
        </div>`
    }
    })
    document.getElementById("demo").innerHTML=data
}


newsdata("top");