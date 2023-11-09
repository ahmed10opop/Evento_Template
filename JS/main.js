let icon = document.getElementById("icon");

icon.onclick = function () {
    document.body.classList.toggle("light-theme");
    if (document.body.classList.contains("light-theme")) {
        icon.src = "img/sun.png";} else {
        icon.src = "img/moon.png";
    }
}

document.querySelector('.switcher-btn').onclick = () => {
    document.querySelector('.color-switcher').classList.toggle('active');
}

let themeBtns = document.querySelectorAll('.theme-btns');

themeBtns.forEach(color => {
    color.addEventListener('click', () => {
        let dataColor = color.getAttribute('data-color');
        document.querySelector('body').style.setProperty('--main-color', dataColor);
    })
})

//----------------------------------------------------------------------------------

// Swiper
// const swiper = new Swiper('.swiper', {
//     loop: true,

//     pagination: {
//         el: '.swiper-pagination',
//     },

//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },
//     // Default parameters
//     slidesPerView: 1,
//     spaceBetween: 10,
//     // Responsive breakpoints
//     breakpoints: {
//         // when window width is >= 320px
//             320: {
//                 slidesPerView: 1,
//                 spaceBetween: 20
//             },
//             // when window width is >= 480px
//             480: {
//                 slidesPerView: 2,
//                 spaceBetween: 20
//             },
//             // when window width is >= 640px
//             640: {
//                 slidesPerView: 3,
//                 spaceBetween: 15
//             }
//     }
    
// });
//----------------------------------------------------------------------------------


//----------------------------------------------------------------------------------
// Get Slider Items | Array.form [ES6 Feature]
let sliderImages =  Array.from(document.querySelectorAll('.slider-container img'));
// console.table(sliderImages);

// Get Number Of Slides
let slidesCount = sliderImages.length;
// console.log(slidesCount);

// Set Current Slide
let currentSlide = 1;
// Slide Number Sring Element
let slideNumberElement = document.getElementById('slide-number');

// Previous And Next Buttons
let nextButton = document.getElementById('next');
let prevButton = document.getElementById('prev');

// Handle Click On Previous And Next Buttons
nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

// Create The Main UL Element
let paginationElement = document.createElement('ul');

// Set ID On Created UL Element
paginationElement.setAttribute('id', 'pagination-ul');

// Creat List Items Bassed On Slides Count
for (let i = 1; i<= slidesCount; i++) {
    // Create The LI
    let paginationItem = document.createElement('li');

    // Set Custom Attribute 
    paginationItem.setAttribute('data-index', i);

    // Set Item Content
    paginationItem.appendChild(document.createTextNode(i))

    // Append Item To The Main UL List
    paginationElement.appendChild(paginationItem);
}

// Add The Created UL Element To The Page
document.getElementById('indicators').appendChild(paginationElement);

// Get The New Created UL
let paginationCreatedUl = document.getElementById('pagination-ul');

// Get Pagination Items | Array.form [ES6 Feature]
let paginationBullets =  Array.from(document.querySelectorAll('#pagination-ul li'));

// Loop Through Bullets Items
for (let i = 0; i < paginationBullets.length; i++) {
    paginationBullets[i].onclick = function () {
        currentSlide = parseInt(this.getAttribute('data-index'));
        theChecker();
    }
}

// Trigger The Checer Function
theChecker();

// Next Slide Function
function nextSlide() {
    if (nextButton.classList.contains('disabled')) {
        return false;
    } else {
        currentSlide++;
        theChecker();
    }
}

// Previous Slide Function
function prevSlide () {
    if (prevButton.classList.contains('disabled')) {
        return false;
    } else {
        currentSlide--;
        theChecker();
    }
}

// Create The Checker Function
function theChecker () {
    // Set The Slide Number
    slideNumberElement.textContent = 'Slide #' + (currentSlide) + ' Of ' + (slidesCount);

    // Remove All Active Classes
    removeAllActive ();

    // Set Active Class On Current Slide
    sliderImages[currentSlide - 1].classList.add('active');

    // Set Active Class on Current Pagination Item
    paginationCreatedUl.children[currentSlide - 1].classList.add('active');

    // Check If Current Slides Is The First
    if (currentSlide == 1) {
        // Add Disabled Class On Previous Button
        prevButton.classList.add('disabled')
    } else {
        // Remove Disabled Class On Previous Button
        prevButton.classList.remove('disabled')
    }

    // Check If Current Slides Is The Last
    if (currentSlide == slidesCount) {
        // Add Disabled Class On Previous Button
        nextButton.classList.add('disabled')
    } else {
        // Remove Disabled Class On Previous Button
        nextButton.classList.remove('disabled')
    }

}

// Remove All Active Classes From Image And Pagination Bullets
function removeAllActive () {
    // Loop Through Images 
    sliderImages.forEach(function (img) {
        img.classList.remove('active');
    });

    // Loop Through Pagination Bullets 
    paginationBullets.forEach(function (bullet) {
        bullet.classList.remove('active');
    });
}

//----------------------------------------------------------------------------------


//----------------------------------------------------------------------------------

let navIcon = document.querySelector('.navIcon');
let navUl = document.querySelector('.nav-ul');
navIcon.onclick = function () {
    if (navUl.classList.contains('nav-icon-mobile')) {
        navUl.classList.remove('nav-icon-mobile');
    } else {
        navUl.classList.add('nav-icon-mobile');
    };

}

//----------------------------------------------------------------------------------


//----------------------------------------------------------------------------------



//----------------------------------------------------------------------------------