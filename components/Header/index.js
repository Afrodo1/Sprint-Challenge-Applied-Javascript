// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

const container = document.querySelector('.header-container');

Header = () => {

    //creating elements

    const div = document.createElement('div');

    const date = document.createElement('span');

    const lambda = document.createElement('h1');

    const temp = document.createElement('span');

    //creating classes

    div.classList.add('header');

    date.classList.add('date');

    temp.classList.add('temp');

    //adding content

    date.textContent = 'SMarch 28, 2019';

    lambda.textContent = 'Lambda Times';

    temp.textContent = '98°';

    //put it together

    div.appendChild(date);

    div.appendChild(lambda);

    div.appendChild(temp);

    return div;

}

container.appendChild(Header());
