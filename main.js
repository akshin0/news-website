async function logNews() {
    const response = await fetch("https://newsapi.org/v2/everything?q=tesla&from=2024-03-23&sortBy=publishedAt&apiKey=e5208be4d0034433a6e45ef5e2de11b6");
    const news = await response.json();

    xeberler = document.getElementsByClassName('xeberler');

    for (let i = 0; i < 10; i++) {
        if (news.articles[i].urlToImage != null) {
            xeberler[i].src = news.articles[i].urlToImage;
        }
    }
  }
logNews();