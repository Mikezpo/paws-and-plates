const clearInput = () => {
    const input = document.getElementsByClassName('inputSearch')[0];
    input.value = '';
  }
  
  const clearBtn = document.getElementById('clearButton');
  clearBtn.addEventListener('click', clearInput);