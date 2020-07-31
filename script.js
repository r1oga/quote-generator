const API_URL =
  'https://wj5f1tey75.execute-api.eu-central-1.amazonaws.com/dev/quotes'

const PROXY_URL = 'https://c0rsanywhere.herokuapp.com/'

const quoteContainer = document.getElementById('quote-container')
const quoteText = document.getElementById('quote')
const quoteAuthor = document.getElementById('author')
const twitterBtn = document.getElementById('twitter')
const newQuoteBtn = document.getElementById('new-quote')

async function getQuote() {
  try {
    const response = await fetch(`${PROXY_URL}${API_URL}`)
    const { quote, author, url, handle } = await response.json()
    quoteText.innerText = quote
    console.log(author)
    quoteAuthor.innerText = author
    quoteAuthor.setAttribute('href', url)
  } catch (error) {
    console.log(error)
  }
}

newQuoteBtn.addEventListener('click', () => getQuote())

getQuote()
