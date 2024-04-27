apikey = '83fe06d30fe3cc51baf2c4c735cf921d';
url = 'https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=10&apikey=' + apikey;

fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        articles = data.articles;

        xeberler = document.getElementsByClassName('xeberler');

        for (i = 0; i < 10; i++) {
            // articles[i].title
            console.log("Title: " + articles[i]['title']);
            // articles[i].description
            console.log("Description: " + articles[i]['description']);
            xeberler[i].src = articles[i]['image'];

        }

        latestnews = document.getElementById('latestnews');
        latesttitle = document.getElementsByClassName('latest-title');
        latestdesc = document.getElementsByClassName('latest-desc');

        for (let i = 0; i < latestnews.children.length; i++) {
            latestnews.children[i].firstElementChild.src = articles[i + 5]['image'];
            latesttitle[i].textContent = articles[i + 5]['title'];
            latestdesc[i].textContent = articles[i + 5]['description'];
        }
    });