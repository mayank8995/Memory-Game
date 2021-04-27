//Image array
let cardArray = [
    { name: "fries", img: "https://res.cloudinary.com/fakod29/image/upload/v1604561421/fries_t5rfhy.png", },
    { name: "fries", img: "https://res.cloudinary.com/fakod29/image/upload/v1604561421/fries_t5rfhy.png", },
    { name: "pizza", img: "https://res.cloudinary.com/fakod29/image/upload/v1604561421/pizza_bmge3a.png", },
    { name: "pizza", img: "https://res.cloudinary.com/fakod29/image/upload/v1604561421/pizza_bmge3a.png", },
    { name: "milkshake", img: "https://res.cloudinary.com/fakod29/image/upload/v1604561421/milkshake_emts11.png", },
    { name: "milkshake", img: "https://res.cloudinary.com/fakod29/image/upload/v1604561421/milkshake_emts11.png", },
    { name: "ice-cream", img: "https://res.cloudinary.com/fakod29/image/upload/v1604561421/ice-cream_olhaql.png", },
    { name: "ice-cream", img: "https://res.cloudinary.com/fakod29/image/upload/v1604561421/ice-cream_olhaql.png", },
    { name: "hotdog", img: "https://res.cloudinary.com/fakod29/image/upload/v1604561421/hotdog_ng2hna.png", },
    { name: "hotdog", img: "https://res.cloudinary.com/fakod29/image/upload/v1604561421/hotdog_ng2hna.png", },
    { name: "cheeseburger", img: "https://res.cloudinary.com/fakod29/image/upload/v1604561421/cheeseburger_ju7b3t.png", },
    { name: "cheeseburger", img: "https://res.cloudinary.com/fakod29/image/upload/v1604561421/cheeseburger_ju7b3t.png", },
];
shuffle(cardArray);
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i

        // swap elements array[i] and array[j]
        // we use "destructuring assignment" syntax to achieve that
        // you'll find more details about that syntax in later chapters
        // same can be written as:
        // let t = array[i]; array[i] = array[j]; array[j] = t
        [array[i], array[j]] = [array[j], array[i]];
    }
}
let i = 0;
let arr = [];

const cardBack = document.querySelectorAll('.flip-card-back img');
const innerCard = document.querySelectorAll('.flip-card-inner');

cardBack.forEach(item => {
    item.src = cardArray[i++].img;
});
innerCard.forEach((item, index) => {
    item.addEventListener('click', () => {
        if (!(arr.find(elem => elem === index))) {
            arr.push(index);
            item.classList.add('flip', 'disabled');
            if (arr.length === 2) {
                let brr = [...arr];
                arr.length = 0;
                checkPair(brr);
            }
        } else if (arr.length != 0) {
            arr.length = 0;
        }
        console.log(arr);
    })
})

function checkPair(arr) {
    if (cardArray[arr[0]].name === cardArray[arr[1]].name) {
        setTimeout(() => {
            document.getElementById(arr[0]).classList.add('disabled', 'flip', 'background');
            document.getElementById(arr[1]).classList.add('disabled', 'flip', 'background');
        }, 1000);
    }
    else {
        setTimeout(() => {
            document.getElementById(arr[0]).classList.remove('flip', 'disabled');
            document.getElementById(arr[1]).classList.remove('flip', 'disabled');
        }, 1000);
    }
}

function resetCard() {

}