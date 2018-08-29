var chronometer = new Chronometer();
var btnLeft = document.getElementById('btnLeft');
var iconRight = document.getElementById('splitReset');
var iconLeft = document.getElementById('startStop');
var btnRight = document.getElementById('btnRight');
var minDec = document.getElementById('minDec');
var minUni = document.getElementById('minUni');
var secDec = document.getElementById('secDec');
var secUni = document.getElementById('secUni');
var milDec = document.getElementById('milDec');
var milUni = document.getElementById('milUni');
var splits = document.getElementById('splits');
var count = 0;
var interval = 0;
var interval2 = 0;
var interval3 = 0;

function printTime() {
    
}


function printSeconds() {
    interval = setInterval ( function () {
        secDec.innerHTML = chronometer.twoDigitsNumber(chronometer.seconds);
    }, 10); 
}

function printMinutes() {
    interval2 = setInterval ( function () {
        minDec.innerHTML = chronometer.twoDigitsNumber(chronometer.minutes);
    }, 10); 
}

function printMilliseconds() {
    interval3 = setInterval ( function () {
        milDec.innerHTML = chronometer.twoDigitsNumber(chronometer.miliseconds);
    }, 10); 
}

function printSplit() {
    var splitTime = [`${minDec.innerText}:${secDec.innerText}:${milDec.innerText}`];
   
    splitTime.forEach(function (e) {
        var split = document.createElement('li');
        splits.appendChild(split);
        split.innerHTML += e;
    })
    
}

function clearSplits() {
    // splits.removeChild(splits.childNodes);
    while(splits.firstChild) {
        splits.removeChild(splits.firstChild);
    }
}

function setStopBtn() {
    chronometer.stopClick();
    clearInterval(interval);
    clearInterval(interval2);
    clearInterval(interval3);
}


function setStartBtn() {
    chronometer.startClick();
}

function setResetBtn() {
    chronometer.resetClick();
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {   
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
btnRight.addEventListener('click', function () {
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
