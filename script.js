const words=[
    "Software Developer",
    "ICT Professional",
    "Cybersecurity Enthusiast",
    "Problem Solver"
];

let wordIndex=0;
let charIndex=0;

const typing=document.getElementById("typing");

function type(){

    if(charIndex<words[wordIndex].length){

        typing.textContent+=words[wordIndex].charAt(charIndex);

        charIndex++;

        setTimeout(type,100);

    }

    else{

        setTimeout(erase,1500);

    }

}

function erase(){

    if(charIndex>0){

        typing.textContent=words[wordIndex].substring(0,charIndex-1);

        charIndex--;

        setTimeout(erase,50);

    }

    else{

        wordIndex++;

        if(wordIndex>=words.length){

            wordIndex=0;

        }

        setTimeout(type,300);

    }

}

type();
// Counter Animation

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");

        const count = +counter.innerText;

        const increment = Math.ceil(target / 100);

        if(count < target){

            counter.innerText = count + increment;

            setTimeout(updateCounter,20);

        }else{

            counter.innerText = target + "+";

        }

    };

    updateCounter();

});
window.addEventListener("scroll",function(){

    const nav=document.querySelector("nav");

    nav.classList.toggle("sticky",window.scrollY>50);

});