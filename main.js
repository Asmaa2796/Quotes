const api_url = "https://api.quotable.io/random";
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');

async function getQuotes(url) {
  const response = await fetch(url);
  const data = await response.json();

  quote.innerHTML = data.content;
  author.innerHTML = data.author;
}
getQuotes(api_url);