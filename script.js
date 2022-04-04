'use strict';

const images = [

    // Array do carrossel  

    { 'id': '1', 'url':'./Carrossel/carrossel1.jpg'},
    { 'id': '2', 'url':'./Carrossel/carrossel2.jpg'},
    { 'id': '3', 'url':'./Abertura/Abertura2.jpg'},

]

const containerItems = document.querySelector('#container-items'); // renderizar as imagens 

const loadImages = ( images, containerItems ) => {

    // Criando a renderização da imagem

    images.forEach( image => {

        // Parte de formatação do site 
        // O += significa que o elemento além de ser atribuído ele ira pegar os próximos elementos 
        containerItems.innerHTML += `  
        <div class='item'> //
        <img src='${image.url}'
        </div> `
    })

} 

loadImages( images, containerItems );

let items = document.querySelectorAll('.item');

const previous = () => {
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll('.item');
}

document.querySelector('#previous').addEventListener( 'click', previous);

const next = () => {
    const lastItem = items[items.length - 1];
    containerItems.insertBefore( lastItem, items[0]);
    items = document.querySelectorAll('.item');
}

document.querySelector('#next').addEventListener( 'click', next);