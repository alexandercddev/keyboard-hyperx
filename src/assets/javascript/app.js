window.addEventListener('load', () => {
    
}); 

/*document.addEventListener('mouseover', ({fromElement}) => { 
    const isButton = fromElement.className.includes('keyboard-key');
    if(isButton){ 
        fromElement.classList.add('key-color');
        setTimeout(() => {
            fromElement.classList.remove('key-color');
        }, 1000) 
    } 
});*/
 
const buttons = document.querySelectorAll('.keyboard-key');

const buttonsRowOne = document.querySelectorAll('.keyboard-key.key-row-1');
const buttonsRowTwo = document.querySelectorAll('.keyboard-key.key-row-2');
const buttonsRowThree = document.querySelectorAll('.keyboard-key.key-row-3');
const buttonsRowFour = document.querySelectorAll('.keyboard-key.key-row-4');
const buttonsRowFive = document.querySelectorAll('.keyboard-key.key-row-5');
const buttonsRowSix = document.querySelectorAll('.keyboard-key.key-row-6'); 

buttons.forEach((button, index) => {
    button.addEventListener('click', (event) => {
        event.preventDefault(); 
        let count = 1;
        for(let keyIndex = index; keyIndex < buttons.length; keyIndex++)
        {
            setTimeout(() => { 
                buttons[keyIndex].classList.add('key-color'); 
            }, count * 100)
            setTimeout(() => {
                buttons[keyIndex].classList.remove('key-color');
            }, count *200) 
            count++;
        } 
    });
});
buttonsRowTwo.forEach((button, index) => {
    button.addEventListener('click', (event) => {
        event.preventDefault();  
        button.classList.add('key-color');
        setTimeout(() => {
            button.classList.remove('key-color');
        }, 1000) 
    });
});