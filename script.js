

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

// Get the <ul> element
const ul = document.querySelector('ul');

// Define variable for the current active slide
let currentSlide = 0;

// Define variable for the total slide count
const totalSlides = images.length;


// Loop through the array of literal objects using forEach method
// The forEach method takes a callback function as an argument and executes that callback function once for each element in the array
// Loop through the array of literal objects using forEach method
images.forEach((image, index) => {
    // Create an <li> element for the thumbnail
    const thumbnailLi = document.createElement('li');
    
    // Create an <img> element for the thumbnail
    const thumbnailImg = document.createElement('img');
    thumbnailImg.src = image.image; // Set the src attribute to the image URL
    thumbnailImg.alt = image.title; // Set the alt attribute to the image title
    
    // Append the <img> element to the <li> element
    thumbnailLi.appendChild(thumbnailImg);

    // Add class to the thumbnail <li> element
    thumbnailLi.classList.add('thumbnail');

    // Append the thumbnail <li> element to the <ul> element
    ul.appendChild(thumbnailLi);

    // Add click event listener to the thumbnail
    thumbnailLi.addEventListener('click', () => {
        // Set the current slide to the clicked thumbnail's index
        currentSlide = index;
        // Update the carousel
        updateCarousel();
    });

    // Create an <li> element for the main slide
    const slideLi = document.createElement('li');

    // Add class to the main slide <li> element
    slideLi.classList.add('slide');
    
    // Check if it's the first slide, set it as active by default
    if (index === 0) 
    {
        slideLi.classList.add('active');
    }

    // Create an <img> element for the main slide
    const slideImg = document.createElement('img');
    slideImg.src = image.image; // Set the src attribute to the image URL
    slideImg.alt = image.title; // Set the alt attribute to the image title
    
    // Append the <img> element to the <li> element
    slideLi.appendChild(slideImg);

    // Create a <div> element for the title
    const titleDiv = document.createElement('div');
    titleDiv.classList.add('title');
    titleDiv.textContent = image.title;
    
    // Append the titleDiv to the <li> element
    slideLi.appendChild(titleDiv);

    // Create a <div> element for the description
    const descriptionDiv = document.createElement('div');
    descriptionDiv.classList.add('description');
    descriptionDiv.textContent = image.description;
    
    // Append the descriptionDiv to the <li> element
    slideLi.appendChild(descriptionDiv);
    
    // Add class to the main slide <li> element
    slideLi.classList.add('slide');
    
    // Append the main slide <li> element to the <ul> element
    ul.appendChild(slideLi);
});


// Call the updateCarousel function to initialize the carousel with the first slide
updateCarousel();

// Define update carousel function
function updateCarousel() 
{
    // Get all slides
    const slides = document.querySelectorAll('.slide');

    // Loop through all slides and remove 'active' class
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });

    // Get the active slide
    const activeSlide = slides[currentSlide];

    // Add 'active' class to the active slide
    activeSlide.classList.add('active');

    // Get the title and description
    const title = activeSlide.querySelector('.title');
    // Get the description
    const description = activeSlide.querySelector('.description');

    // Loop through all slides and hide them
    slides.forEach((slide) => {
        slide.style.display = 'none';
    });

    // Show the active slide
    activeSlide.style.display = 'block';

    // Update the title and description
    title.textContent = images[currentSlide].title;
    description.textContent = images[currentSlide].description;
}

// Save the previous button in a variable
const previousButton = document.getElementById('previous');

// When I click on the left button, the slide should move to the left
previousButton.addEventListener('click', () => {
    // We decrement the currentSlide by 1
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    // and then take the modulus (%) of totalSlides. 
    // This ensures that when the currentSlide reaches the first slide, it wraps around to the last slide again, creating the loop effect of the carousel.
    updateCarousel();
});

// Save the next button in a variable
const nextButton = document.getElementById('next');

// When I click on the right button, the slide should move to the left
nextButton.addEventListener('click', () => {
    // We increment the currentSlide by 1
    currentSlide = (currentSlide + 1) % totalSlides;
    // and then take the modulus (%) of totalSlides. 
    // This ensures that when the currentSlide reaches the last slide, it wraps around to the first slide again, creating the loop effect of the carousel.
    updateCarousel();
});

// Define variable for the autoplay interval
let autoplayInterval;

// Function to start autoplay
function startAutoplay() 
{
    autoplayInterval = setInterval(() => {
        // Increment the currentSlide by 1
        currentSlide = (currentSlide + 1) % totalSlides;
        // Update the carousel
        updateCarousel();
    }, 3000); // Change slide every 3 seconds (3000 milliseconds)
}

// Function to stop autoplay
function stopAutoplay() 
{
    clearInterval(autoplayInterval);
}

// Call the startAutoplay function to initiate autoplay
startAutoplay();

// Save the autoplay buttons in variables
const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');

// Add click event listener to the play button
playButton.addEventListener('click', () => {
    // Start autoplay
    if (!autoplayInterval) 
    {
        startAutoplay();
    }
});

// Add click event listener to the pause button
pauseButton.addEventListener('click', () => {
    // Stop autoplay
    if (autoplayInterval)
    {
        stopAutoplay();
        autoplayInterval = null;
    }
});









