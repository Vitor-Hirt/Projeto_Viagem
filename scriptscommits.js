'use strict'

const imagescommits = [

    // Array do carrossel

    { 'id': '1', 'url':'./CarrosselC/commit1.png'},
    { 'id': '2', 'url':'./CarrosselC/commit2.png'},
    { 'id': '3', 'url':'./CarrosselC/commit3.png'},

]

const containercommits = document.querySelector('#container-items-commits')

const loadcommits = ( imagescommits, containercommits ) => {

    // Colocar as images no site através da atribuição 

    imagescommits.forEach( imagesco => {
        containercommits.innerHTML += `
        <div class="commits">
        <img src='${imagesco.url}'
        </div>
        `
    })

}

loadcommits( imagescommits,  containercommits );

let commit = document.querySelectorAll('.commits');

const previouscommits = () => {

    containercommits.appendChild(commit[0]);
    commit = document.querySelectorAll('.commits');

}

document.querySelector('#previouscommits').addEventListener( 'click', previouscommits);

const nextcommits = () => {

    const lastCommit = commit[commit.length - 1];
    containercommits.insertBefore( lastCommit, commit[0]);
    commit = document.querySelectorAll('.commits');

}

document.querySelector('#nextcommits').addEventListener( 'click', nextcommits);