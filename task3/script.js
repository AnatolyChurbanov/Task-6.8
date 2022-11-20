const trafficLightEl = document.querySelector('#trafficLight1');
const trafficLightE2 = document.querySelector('#trafficLight2');
const trafficLightE3 = document.querySelector('#trafficLight3');
const trafficLight = document.querySelector('#trafficLight')

trafficLight.addEventListener ('click', () => {
    if (trafficLightE3.style.background === 'red' ||
    trafficLightE2.style.background === ''&&
    trafficLightEl.style.background === '') {
        makeBlackAll();
        makeGreen();
    }
    else if (trafficLightE2.style.background === 'yellow'&&
    trafficLightEl.style.background === ''&&
    trafficLightE3.style.background === '') {
        makeBlackAll();
        makeRed();
    }
    else if (trafficLightEl.style.background === 'green'&&
    trafficLightE2.style.background === ''&&
    trafficLightE3.style.background === '') {
        makeBlackAll();
        makeYellow();
    }
}) ;

function makeBlackAll () {
    trafficLightEl.style.background = '';
    trafficLightE2.style.background = '';
    trafficLightE3.style.background = '';
};

function makeGreen () {
    trafficLightEl.style.background = 'green';
};

function makeYellow () {
    trafficLightE2.style.background = 'yellow';
};

function makeRed () {
    trafficLightE3.style.background = 'red';
};



