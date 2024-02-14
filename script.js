const circle = document.querySelector(".heart");
const letter = document.querySelector(".letter");
const envelope = document.querySelector(".envelope-open");
const h1 = document.querySelector("h1");

console.log(envelope);


function openLtter() {
    letter.classList.toggle('active');
    circle.classList.toggle('heart-active');
    if (circle.classList.contains('heart-active')) {

        h1.classList.remove('changeTwo')
        h1.classList.add('change')
        envelope.classList.remove("close");
        envelope.classList.add("open");

    } else {
        h1.classList.remove('change')
        h1.classList.add('changeTwo')
        envelope.classList.remove("open");

        envelope.classList.add("close");
        circle.classList.add('active-heart');
    }


}

circle.addEventListener('click', openLtter)