const API_URL =
  'https://wj5f1tey75.execute-api.eu-central-1.amazonaws.com/dev/quotes'

const quoteContainer = document.getElementById('quote-container')
const quoteText = document.getElementById('quote')
const quoteAuthor = document.getElementById('author')
const twitterBtn = document.getElementById('twitter')
const newQuoteBtn = document.getElementById('new-quote')
const loader = document.getElementById('loader')

const showLoadingSpinner = () => {
  loader.hidden = false
  quoteContainer.hidden = true
}

const removeLoadingSpinner = () => {
  if (!loader.hidden) {
    loader.hidden = true
    quoteContainer.hidden = false
  }
}

let errorsCount = 0
async function getQuote() {
  showLoadingSpinner()

  try {
    const response = await fetch(`${API_URL}`)
    const { quote, author, url } = await response.json()

    // reduce font size for long quotes
    if (quote.length > 150) {
      quoteText.classList.add('long-quote')
    } else {
      quoteText.classList.remove('long-quote')
    }

    quoteText.innerText = quote
    quoteAuthor.innerText = author
    quoteAuthor.setAttribute('href', url)
    quoteAuthor.setAttribute('target', '_blank')

    removeLoadingSpinner()
  } catch (error) {
    errorsCount++
    if (errorsCount < 10) {
      getQuote()
    }
    removeLoadingSpinner()
    quoteContainer.style.cssText = 'font-size: 2rem;'
    quoteContainer.innerText = 'Application crashed. Try reloading page'
  }
}

const tweetQuote = () => {
  const quote = quoteText.innerText
  const author = quoteAuthor.innerText
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`
  window.open(twitterUrl, '_blank')
}

newQuoteBtn.addEventListener('click', () => {
  errorsCount = 0
  getQuote()
})
twitterBtn.addEventListener('click', () => {
  errorsCount = 0
  tweetQuote()
})

// on load
getQuote()
