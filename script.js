let inputField = document.querySelector('.input');
let isEqual = false;

document.querySelector('.btn-AC').addEventListener('click', () => { inputField.innerHTML = '0'});
document.querySelector('.btn-dot').addEventListener('click', () => { inputField.innerHTML += '.' });
document.querySelector('.btn-mult').addEventListener('click', () => { inputField.innerHTML += '*'; isEqual = false; });
document.querySelector('.btn-div').addEventListener('click', () => { inputField.innerHTML += '/'; isEqual = false;});
document.querySelector('.btn-add').addEventListener('click', () => { inputField.innerHTML += '+'; isEqual = false;});
document.querySelector('.btn-sub').addEventListener('click', () => { inputField.innerHTML += '-'; isEqual = false; });

document.querySelector('.btn-del').addEventListener('click', () => { inputField.innerHTML = inputField.innerHTML.slice(0, -1) });

document.querySelector('.btn-plus-minus').addEventListener('click', () => {
    if (inputField.innerHTML[0] === '-') {
        inputField.innerHTML = inputField.innerHTML.slice(1);
    }
    else {
        inputField.innerHTML = '-' + inputField.innerHTML;
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
    inputField.innerHTML = eval(inputField.innerHTML)
});

