// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const cardsContainer = document.querySelector('.cards-container')

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then((response) => {
        console.log(response)
        Object.values(response.data.articles).forEach((topic) => {
            topic.forEach((article) => {
                cardsContainer.appendChild(CardMaker(article))
            })
        })
    })
    .catch((error) => {
        console.log('error', error)
    })

function CardMaker(data) {
    let card = document.createElement('div')
    let headLine = document.createElement('div')
    let author = document.createElement('div')
    let imgContainer = document.createElement('div')
    let img = document.createElement('img')
    let span = document.createElement('span')

    card.classList.add('card')
    headLine.classList.add('headline')
    author.classList.add('author')
    imgContainer.classList.add('img-container')

    headLine.textContent = data.headline;
    img.setAttribute('src', data.authorPhoto)
    span.textContent = data.authorName;

    card.appendChild(headLine)
    card.appendChild(author)
    author.appendChild(imgContainer)
    imgContainer.appendChild(img)
    author.appendChild(span)

    return card;
}

//non-dry method
// axios.get('https://lambda-times-backend.herokuapp.com/articles')
//     .then((response) => {
//         console.log(response)
//         response.data.articles['bootstrap'].forEach((article) => {
//             cardsContainer.appendChild(CardMaker(article))
//         })
//         response.data.articles['javascript'].forEach((article) => {
//             cardsContainer.appendChild(CardMaker(article))
//         })
//         response.data.articles['jquery'].forEach((article) => {
//             cardsContainer.appendChild(CardMaker(article))
//         })
//         response.data.articles['node'].forEach((article) => {
//             cardsContainer.appendChild(CardMaker(article))
//         })
//         response.data.articles['technology'].forEach((article) => {
//             cardsContainer.appendChild(CardMaker(article))
//         })
//     })
//     .catch((error) => {
//         console.log('error', error)
//     })
