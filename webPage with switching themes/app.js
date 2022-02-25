// Elementer
const darkButton = document.getElementById('dark');
const lightButton = document.getElementById('light');
const greenButton = document.getElementById('green');
const body = document.body;


// enable buttons

darkButton.onclick = () => {
    body.classList.replace('light', 'dark');
};

lightButton.onclick = () => {
    body.classList.replace('dark', 'light');



};

greenButton.onclick = () => {
    if (body.classList.contains('green')) {
        body.classList.remove('green')
        greenButton.style.cssText = `
        --bg-green: var(--yellow);
        `
        
        greenButton.innerText = 'greenify';

    } else {
        
        greenButton.style.cssText = `
        --bg--green: white;
        `

        body.classList.add('green');
        greenButton.innerText = 'greenify';
    
    }
};
/*
@keyframes color-rotate {
    from {
        filter: hue-rotate(0deg);
    }
    to {
        filter: hue-rotate(360deg);
    }
}


.LEGO-Emblem:hover {
    animation: color-rotate 1s;
    animation-iteration-count: infinite; 
    animation-direction: alternate;
}

*/