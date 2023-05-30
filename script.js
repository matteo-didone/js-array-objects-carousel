// Given an array of literal objects with:
// image URL
// title
// description
// Create a carousel as shown in the attached photo.
// Milestone 0:
// As in the first carousel created, let's first focus on creating the static markup: build the container and insert the large image so that we can style the slider.
// Milestone 1: Now, remove the static content and dynamically populate the carousel using the array of literal objects.
// Upon user click on the left or right arrows, the active image should become visible, and we should add the corresponding title and text.
// Milestone 2:
// Add the infinite loop functionality to the carousel. If the active thumbnail is the first one and the user clicks the up arrow, the activated thumbnail should be the last one, and vice versa for the last thumbnail if the user clicks the down arrow.
// BONUS 1:
// Add thumbnails and activate the corresponding image upon clicking.
// BONUS 2:
// Add autoplay functionality: after a certain period of time (3 seconds), the active image should change to the next one.
// BONUS 3:
// Add start/stop buttons and a button to reverse the autoplay mechanism.

// Start creating an array of literal objects
const images = 
[
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        description: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, 
    {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        description: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, 
    {
        image: 'img/03.webp',
        title: 'Fortnite',
        description: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, 
    {
        image: 'img/04.webp',
        title: 'Stray',
        description: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, 
    {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        description: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];