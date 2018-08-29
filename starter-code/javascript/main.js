let chronometer = new Chronometer();
let btnLeft = document.getElementById('btnLeft');
let iconRight = document.getElementById('splitReset');
let iconLeft = document.getElementById('startStop');
let btnRight = document.getElementById('btnRight');
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');
let count = 0;
let interval = 0;
let interval2 = 0;
let interval3 = 0;

const printTime = () => {
    
}


const printSeconds = () => {
    interval = setInterval ( () => {
        secDec.innerHTML = chronometer.twoDigitsNumber(chronometer.seconds);
    }, 10); 
}

const printMinutes = () => {
    interval2 = setInterval ( () => {
        minDec.innerHTML = chronometer.twoDigitsNumber(chronometer.minutes);
    }, 10); 
}

const printMilliseconds = () => {
    interval3 = setInterval ( () => {
        milDec.innerHTML = chronometer.twoDigitsNumber(chronometer.miliseconds);
    }, 10); 
}

const printSplit = () => {
    let splitTime = [`${minDec.innerText}:${secDec.innerText}:${milDec.innerText}`];
   
    splitTime.forEach( (e) => {
        let split = document.createElement('li');
        splits.appendChild(split);
        split.innerHTML += e;
    })
    
}

const clearSplits = () => {
    // splits.removeChild(splits.childNodes);
    while(splits.firstChild) {
        splits.removeChild(splits.firstChild);
    }
}

const setStopBtn = () => {
    chronometer.stopClick();
    clearInterval(interval);
    clearInterval(interval2);
    clearInterval(interval3);
}


const setStartBtn = () => {
    chronometer.startClick();
}

const setResetBtn = () => {
    chronometer.resetClick();
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {   
    if(count === 0) {
        count = 1;
        setStartBtn();
        printSeconds()
        printMilliseconds()
        printMinutes()
        iconLeft.setAttribute('class', 'fas fa-stop-circle fa-2x')
        btnLeft.setAttribute('class', 'btn stop');
        iconRight.setAttribute('class', 'far fa-clock fa-2x')
        btnRight.setAttribute('class', 'btn split');
    } else if(count === 1) {
        count = 0;
        setStopBtn();
        iconLeft.setAttribute('class','fas fa-play-circle fa-2x')
        iconRight.setAttribute('class', 'fas fa-redo fa-2x');
        btnLeft.setAttribute('class', 'btn start');
        btnRight.setAttribute('class', 'btn reset')
    } else {
        console.log('error');
    }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
    if(count === 1) {
        printSplit()
    } else {
        clearInterval(interval)
        clearInterval(interval2)
        secDec.innerHTML = '00';
        minDec.innerHTML = '00';
        milDec.innerHTML = '00';
        clearSplits()
        setResetBtn();
    }
});
