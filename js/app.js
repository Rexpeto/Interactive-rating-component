const containerRating = document.querySelector('.rating-state__numbers');

const btnSubmit = document.querySelector('.rating-state__submit');

containerRating.addEventListener('click', e => {
    getNumber(e);
});

function getNumber(e) {
    if(e.target.className === 'rating-state__numbers__number') {
        const number = e.target.innerText;
        if(number !== '') {
            setNumber(number);
        }
    }
}

function setNumber(number) {
    const result = document.querySelector('#result');
    result.innerText = number;

    if(number > 0 || number < 5) {
        btnSubmit.addEventListener('click', () => {
            const ratingContainer = document.querySelector('.rating-state');
            const thankContainer = document.querySelector('.thankyou-state');
            ratingContainer.style.display = 'none';
            thankContainer.style.display = 'flex';
        });        
    }
}
