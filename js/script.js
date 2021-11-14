//////////////////////////////////////////////////////////3
let selectColor = document.getElementById('test');
let divColor = document.querySelector('.divTest');

selectColor.addEventListener('click', () => {
    if (selectColor.value == "red") {
        divColor.style.backgroundColor = "red";
    }
    else if (selectColor.value == "blue") {
        divColor.style.backgroundColor = "blue";
    }
    else if (selectColor.value == "green") {
        divColor.style.backgroundColor = "green";
    }
    else if (selectColor.value == "yelow") {
        divColor.style.backgroundColor = "yellow";
    }
});

/////////////////////////////////////////////////////////1

let inputs = document.querySelector('input');
let textComm = document.querySelector('.text_form');


inputs.addEventListener('input', () => {
    textComm.innerHTML = inputs.value;
});

///////////////////////////////////////////////////////////4

const form = document.getElementById('form');
const rows = document.getElementById('row');
const columns = document.getElementById('column');
const table = document.getElementById('table');

rows.addEventListener('input', () => {

    for (let i = 1; i <= rows.value; i++) {
        let tr = document.createElement('tr');
        table.appendChild(tr);
        
}
});

columns.addEventListener('input', () => {

    for (let i = 1; i <= columns.value; i++) {
        let td = document.createElement('td');
        table.appendChild(td);
        
}

});

///////////////////////////////////////////2


let images = [
    './images/1.jpg',
    './images/2.jpg',
    './images/3.jpg',
    './images/4.jpg',
    './images/5.jpg',
];

const root = document.getElementById('root');

for (let i = 0; i < images.length; i++) {
    let img = document.createElement('img');
    
    img.src = images[i];
    
    root.appendChild(img);
    
}

