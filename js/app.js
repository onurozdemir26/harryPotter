const api = "../quotes.json";

const quote = document.getElementById("quote");
const author = document.getElementById("author");
const btn = document.getElementById("btn");
twitterLink = document.getElementById("twitterLink");


function getQuote() {
    fetch(api)
        .then((res) => res.json())
        .then((data) => {
            const randomquote = newQuote(data);
            const cleanText = randomquote.quote.replace(/<\/?[^>]+(>|$)/g, "");
            quote.innerHTML = `${cleanText}`;
            author.innerHTML = ` ${randomquote.character}`;
            
        });
}

function newQuote(data){
    const randomNumber = Math.floor(Math.random() * data.length);
    return data[randomNumber];  
  }


function tweetQuote() {
    tweet = `https://twitter.com/intent/tweet?text=${ quote.innerHTML}-${author.innerHTML}`;
    window.open(tweet, '_blank')
}

btn.addEventListener("click", getQuote);
twitterLink.addEventListener("click", tweetQuote);