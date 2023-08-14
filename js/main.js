// NAVBAR SLIDER

const toggleButton = document.getElementsByClassName('navButton')[0];
const navbarLinks = document.getElementsByClassName('navLinks')[0];

// Add click event listener to each menu item
const menuItems = document.querySelectorAll('.menu-list a');
for (const item of menuItems) {
  item.addEventListener('click', () => {
    // Close the menu when an item is clicked
    navbarLinks.classList.remove('active');
    toggleButton.checked = false;
  });
}

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
});

// Close the menu when clicking outside of it
document.addEventListener('click', (event) => {
  const isClickInsideMenu = navbarLinks.contains(event.target);
  const isClickOnButton = event.target === toggleButton;

  if (!isClickInsideMenu && !isClickOnButton) {
    navbarLinks.classList.remove('active');
    toggleButton.checked = false;
  }
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


// Pet Tips expansion

document.addEventListener('DOMContentLoaded', function () {
  const toggleElements = document.querySelectorAll('.toggle');
  for (let i = 0; i < toggleElements.length; i++) {
    toggleElements[i].addEventListener('click', function () {
      const tipContent = this.parentNode.nextElementSibling;
      if (tipContent.style.display === 'none') {
        tipContent.style.display = 'block';
        this.textContent = '-';
      } else {
        tipContent.style.display = 'none';
        this.textContent = '+';
      }
    });
  }
});


// Regions

document.addEventListener('DOMContentLoaded', function() {
  let carouselItems = document.querySelectorAll('.carouselItem');
  carouselItems[0].classList.add('active');
  let total = carouselItems.length;
  let current = 0;

  document.getElementById('moveRight').addEventListener('click', function() {
    let next = current;
    current = (current + 1) % total;
    setSlide(next, current);
  });

  document.getElementById('moveLeft').addEventListener('click', function() {
    let prev = current;
    current = (current - 1 + total) % total;
    setSlide(prev, current);
  });

  function setSlide(prev, next) {
    let slide = current;
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

// Search bar

const clearInput = () => {
  const input = document.getElementsByClassName('inputSearch')[0];
  input.value = '';
}

const clearBtn = document.getElementById('clearButton');
clearBtn.addEventListener('click', clearInput);

