const API_URL = 'http://api.forismatic.com/api/1.0'
const PROXY_URL = `https://${process.env.PROXY_URL}.herokuapp.com`

;(async function getQuote() {
  try {
    const response = await fetch(
      `${API_URL}/?method=getQuote&lang=en&format=json`
    )
    const data = await response.json()
    console.log(data)
  } catch (error) {
    // getQuote()
    console.log(error)
  }
})()
