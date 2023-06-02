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

