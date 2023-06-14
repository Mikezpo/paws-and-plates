const clearInput = () => {
    const input = document.getElementsByClassName('inputSearch')[0];
    input.value = '';
  }
  
  const clearBtn = document.getElementById('clearButton');
  clearBtn.addEventListener('click', clearInput);

// NAVBAR SLIDER

const toggleButton = document.getElementsByClassName('navButton')[0];
const navbarLinks = document.getElementsByClassName('navLinks')[0];

// Add click event listener to each menu item
const menuItems = document.querySelectorAll('.menu-list a');
for (const item of menuItems) {
  item.addEventListener('click', () => {
    // Close the menu when an item is clicked
    navbarLinks.classList.remove('active');
    toggle.checked = false;
  });
}

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
});

// Footer liquid

const wrapper = document.getElementById('bubbleWrapper');

const animateBubble = x => {  
  const bubble = document.createElement('div');
  
  bubble.className = 'bubble';
  bubble.style.left = `${x}px`;
  
  wrapper.appendChild(bubble);
  
  setTimeout(() => wrapper.removeChild(bubble), 2000);
}

window.onmousemove = e => animateBubble(e.clientX);

// Regions

document.addEventListener('DOMContentLoaded', function() {
  var carouselItems = document.querySelectorAll('.carouselItem');
  carouselItems[0].classList.add('active');
  var total = carouselItems.length;
  var current = 0;

  document.getElementById('moveRight').addEventListener('click', function() {
    var next = current;
    current = (current + 1) % total;
    setSlide(next, current);
  });

  document.getElementById('moveLeft').addEventListener('click', function() {
    var prev = current;
    current = (current - 1 + total) % total;
    setSlide(prev, current);
  });

  function setSlide(prev, next) {
    var slide = current;
    if (next > total - 1) {
      slide = 0;
      current = 0;
    }
    if (next < 0) {
      slide = total - 1;
      current = total - 1;
    }

    carouselItems[prev].classList.remove('active');
    carouselItems[slide].classList.add('active');

    setTimeout(function() {
      
    }, 800);

    console.log('current ' + current);
    console.log('prev ' + prev);
  }
});