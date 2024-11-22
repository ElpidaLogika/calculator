let inputField = document.querySelector('.input');
let isEqual = false;
let isOperation = false;
let isDot = false;

document.querySelector('.btn-AC').addEventListener('click', () => { inputField.innerHTML = '0' });

document.querySelector('.btn-dot').addEventListener('click', () => {
    if (isDot && !isOperation) {
        inputField.innerHTML = inputField.innerHTML;
    }
    else {
        inputField.innerHTML += '.';
        isDot = true;
        isOperation = false;
    }
});

document.querySelector('.btn-mult').addEventListener('click', () => {
    if (inputField.innerHTML.slice(-1) === '/' || inputField.innerHTML.slice(-1) === '+' || inputField.innerHTML.slice(-1) === '-' || inputField.innerHTML.slice(-1) === '*') {
        inputField.innerHTML = inputField.innerHTML.slice(0, -1) + '*';
    }
    else { 
        inputField.innerHTML += '*';
    }
    isEqual = false;
    isDot = false; 
    isOperation = true;
});

document.querySelector('.btn-div').addEventListener('click', () => {
    if (inputField.innerHTML.slice(-1) === '/' || inputField.innerHTML.slice(-1) === '+' || inputField.innerHTML.slice(-1) === '-' || inputField.innerHTML.slice(-1) === '*') {
        inputField.innerHTML = inputField.innerHTML.slice(0, -1) + '/';
    }
    else { 
        inputField.innerHTML += '/';
    }
    isEqual = false;
    isDot = false; 
    isOperation = true;
});

document.querySelector('.btn-add').addEventListener('click', () => {
    if (inputField.innerHTML.slice(-1) === '/' || inputField.innerHTML.slice(-1) === '+' || inputField.innerHTML.slice(-1) === '-' || inputField.innerHTML.slice(-1) === '*') {
        inputField.innerHTML = inputField.innerHTML.slice(0, -1) + '+';
    }
    else { 
        inputField.innerHTML += '+';
    }
    isEqual = false;
    isDot = false; 
    isOperation = true;
});

document.querySelector('.btn-sub').addEventListener('click', () => {
    if (inputField.innerHTML.slice(-1) === '/' || inputField.innerHTML.slice(-1) === '+' || inputField.innerHTML.slice(-1) === '-' || inputField.innerHTML.slice(-1) === '*') {
        inputField.innerHTML = inputField.innerHTML.slice(0, -1) + '-';
    }
    else { 
        inputField.innerHTML += '-';
    }
    isEqual = false;
    isDot = false; 
    isOperation = true;
});

document.querySelector('.btn-del').addEventListener('click', () => {
    inputField.innerHTML = inputField.innerHTML.slice(0, -1);
    if (inputField.innerHTML === '') { 
        inputField.innerHTML = '0'
    }
});

document.querySelector('.btn-plus-minus').addEventListener('click', () => {
    if (inputField.innerHTML[0] === '-') {
        inputField.innerHTML = inputField.innerHTML.slice(1);
    }
    else {
        if (inputField.innerHTML === '0') {
            inputField.innerHTML === '0'
        }
        else {
            inputField.innerHTML = '-' + inputField.innerHTML;
        } 
    }    
});

for (let i = 0; i <= 9; i++) {    
    document.querySelector(`.btn-${i}`).addEventListener('click', () => {
        if (inputField.innerHTML === '0' || isEqual) {
            isEqual = false;
            inputField.innerHTML = `${i}`;
        }
        else { 
            inputField.innerHTML += `${i}`;
        }
    });  
}

document.querySelector('.btn-equal').addEventListener('click', () => {
    isEqual = true;
    isOperation = false;
    isDot = false;
    inputField.innerHTML = eval(inputField.innerHTML)
});

