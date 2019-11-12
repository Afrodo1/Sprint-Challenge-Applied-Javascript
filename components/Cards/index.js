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
axios.get('https://lambda-times-backend.herokuapp.com/articles') 
    .then(respond =>{


        const content = document.querySelector('.cards-container');

        respond.data.articles.javascript.forEach(event => {

            content.appendChild(articleMaker(event));

            
        })
        respond.data.articles.technology.forEach(event => {

            content.appendChild(articleMaker(event));

            
        })
        respond.data.articles.bootstrap.forEach(event => {

            content.appendChild(articleMaker(event));

            
        })
        respond.data.articles.node.forEach(event => {

            content.appendChild(articleMaker(event));

            
        })
        respond.data.articles.jquery.forEach(event => {

            content.appendChild(articleMaker(event));

            
        })


    })

articleMaker = (info)=>{

    //creating Elements

    const card = document.createElement('div');

    const title = document.createElement('div');

    const auth = document.createElement('div');

    const imgC = document.createElement('div');

    const img = document.createElement('img');

    const author = document.createElement('span');

    //adding classes

    card.classList.add('card');

    title.classList.add('headline');

    auth.classList.add('author');

    imgC.classList.add('img-container');


    //adding content

    title.textContent = info.headline;

    author.textContent = `By ${info.authorName}`;

    img.setAttribute("src", info.authorPhoto)


    //put it all together

    card.appendChild(title);

    card.appendChild(auth);

    auth.appendChild(imgC);

    imgC.appendChild(img);

    auth.appendChild(author);

    return card;



}