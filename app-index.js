let menu = document.getElementById('mobile-menu')
let menuLinks = document.getElementById('navbar-menu')
let radioButtons = document.querySelectorAll('input[name="radio-colour"]');
const imageEl = document.getElementById('imagecolors');
const imageCov = document.getElementsByClassName('image-hide')

let radioElements = document.getElementsByClassName('colours-radio');

let motorButtons = document.querySelectorAll('.motor-buttons');
let rimWheelButtons = document.querySelectorAll('.rim-wheel-button');
let rimWheelLabels = document.querySelectorAll('.rim-wheel-label');


menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})

const speed = 10;

//Changing the properties by motor type
//long range
const maxSpeed1 = 233;
const maxRange1 = 537;
const accel1 = 4.2;
//performace
const maxSpeed2 = 260;
const maxRange2 = 506;
const accel2 = 3.1;

let speedCh = document.getElementById('speed-number');
let rangeCh = document.getElementById('range-number');
let accelCh = document.getElementById('acceleration-number');


function innGenerator(ident){
    if(ident == "motor-long-range"){
        decNum(maxSpeed2, maxSpeed1, speedCh);
        incNum(maxRange2, maxRange1, rangeCh);
        incNum(accel2, accel1, accelCh);
    }
    if(ident == "motor-performance"){
        incNum(maxSpeed1, maxSpeed2, speedCh);
        decNum(maxRange1, maxRange2, rangeCh);
        decNum(accel1, accel2, accelCh);
    }
}

function incNum(i, end, inn){
    if(i<=end){
        switch(inn.dataset.what){
            case "км": inn.innerHTML = i + "км";
            break;
            case "км/ч": inn.innerHTML = i + "км/ч";
            break;
            case "сек": inn.innerHTML = i + "сек";
            break;
        }
        setTimeout(increase, speed);
        function increase(){
            incNum(i+1, end, inn);
        };
    }
}

function decNum(i, end, inn){
    if(i>=end){
        switch(inn.dataset.what){
            case 'км': inn.innerHTML = i + 'км';
            break;
            case 'км/ч': inn.innerHTML = i + 'км/ч';
            break;
            case 'сек': inn.innerHTML = i + 'сек';
            break;
        }
        setTimeout(decrease, speed);
        function decrease(){
            decNum(i-1, end, inn);
        };
    }
}


for(let j=0; j<motorButtons.length; j++){
    let btn = motorButtons[j];
    
    btn.addEventListener('click', function(){
        document.querySelector('.motor-buttons.selected').classList.remove('selected');
        this.classList.add('selected');
        innGenerator(this.id);
        console.log("hello");
    });

}

//Change of colour


for(let i=0; i<radioElements.length; i++){
    radioElements[i].addEventListener('change', function myFunction(e){
        let target = e.target;
        imageEl.style.opacity = "0%";
        var myTimeout = setTimeout(transitioning, 300);
        function transitioning(){
            imageEl.src = "images/tesla_3_" + target.dataset.name + '.jpg';
            imageEl.style.opacity = "100%";
        };
    });
}

for(let j=0; j<rimWheelButtons.length; j++){
    let btn = rimWheelButtons[j];
    
    btn.addEventListener('click', function(){
        document.querySelector('.rim-wheel-button.selected').classList.remove('selected');
        this.classList.add('selected');
    });

}

//scroll offset header

let specEls = document.getElementsByClassName('li-spec-item');

for(let z=0; z<specEls.length; z++){
    let lnk = specEls[z];
    lnk.addEventListener('click', function scrollToTarget(){
        let element = document.getElementById(lnk.dataset.spec);
        let headerOffset = 100;
        let elementPosition = element.getBoundingClientRect().top;
        let offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    
        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    });
}

//index to top
let indexBtn = document.getElementById("top-button");

window.onscroll = function() {
    scrollFunction();
};

const indexOffset = 300;

function scrollFunction(){
    if(document.body.scrollTop > indexOffset || document.documentElement.scrollTop > indexOffset){
        indexBtn.style.display = "block";
    }else{
        indexBtn.style.display = "none";
    }
}

function topFunction(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}