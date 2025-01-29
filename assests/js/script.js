document.querySelectorAll('.navbar > li').forEach(item => {
    item.addEventListener('click', () => {
      const subMenu = item.querySelector('.sub-menu');
      if (subMenu) {
        subMenu.style.display = subMenu.style.display === 'block';
      }
    });
  });
  document.addEventListener('DOMContentLoaded', function () {
    const submenuToggles = document.querySelectorAll('.toggle-submenu');
  
    submenuToggles.forEach((toggle) => {
      toggle.addEventListener('click', function (event) {
        event.stopPropagation(); // Prevent click from affecting parent elements
        const submenu = this.nextElementSibling; // Get the next sibling (the sub-menu)
        
        if (submenu) {
          submenu.classList.toggle('show'); // Toggle the "show" class to show/hide the submenu
        }
      });
    });
  
    // Optional: Close submenu if clicking anywhere else on the page
    document.addEventListener('click', function () {
      document.querySelectorAll('.sub-menu.show').forEach((submenu) => {
        submenu.classList.remove('show');
      });
    });
  });  
  // Trigger animation on scroll
  const cards = document.querySelectorAll('.fade-up');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  });
  cards.forEach(card => observer.observe(card));
   /// Nav bar Toggle ///
   const menuToggle = document.querySelector('.menu-toggle');
   const navbar = document.querySelector('.navbar');
   
   menuToggle.addEventListener('click', () => {
     navbar.classList.toggle('active'); 
     menuToggle.classList.toggle('cross'); // Change to cross icon
   }); 
//    Team Section 
   const arrowButton = document.getElementById('arrowButton');
const grid = document.querySelector('.grid-container1');

let currentIndex = 0;

const teamImages = [
  ['./assests/images/person1.jpeg', './assests/images/person2.jpg', './assests/images/person3.jpg', './assests/images/person4.jpg', './assests/images/person5.jpg', './assests/images/person6.jpg'],
  ['./assests/images/person7.jpg', './assests/images/person8.jpg', './assests/images/person9.jpg', './assests/images/person10.jpg', './assests/images/person11.jpg', './assests/images/person12.jpg'],
  ['./assests/images/person13.jpg', './assests/images/person14.jpg', './assests/images/person15.jpg', './assests/images/person16.jpg', './assests/images/person17.jpg', './assests/images/person18.jpg'],
];
arrowButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % teamImages.length;
  const newImages = teamImages[currentIndex];
  const gridItems = document.querySelectorAll('.grid-item2 img');

  gridItems.forEach((img, index) => {
    img.src = newImages[index];
  });
});
// Slick Slider //
$(document).ready(function () {
    $('.testimonial-slider').slick({
      dots: true,
      infinite: true,
      speed:1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: false,    
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
  });
    //  Media section 
    // JavaScript to handle video play/pause functionality
const myVideo = document.getElementById("myVideo");
const playIcon = document.getElementById("playIcon");

playIcon.addEventListener("click", () => {
  if (myVideo.paused) {
    myVideo.play();
    playIcon.style.display = "none"; // Hide the icon when video starts
  }
});

myVideo.addEventListener("pause", () => {
  playIcon.style.display = "flex"; // Show the icon when video is paused
});

myVideo.addEventListener("play", () => {
  playIcon.style.display = "none"; // Hide the icon when video is playing
});

