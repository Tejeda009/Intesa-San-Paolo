document.addEventListener('DOMContentLoaded', function() {
    let text = document.querySelector('h1');
    let newText = text.textContent.split('').map(char => {
      return `<span>${char}</span>`;
    }).join('');
    text.innerHTML = newText;
  
    let spans = document.querySelectorAll('span');
    spans.forEach((span, i) => {
      setTimeout(() => {
        span.style.color = 'white';
      }, i * 100);
    });
  
    // Function to create a popup
    function createPopup() {
      const popup = document.createElement('div');
      popup.classList.add('popup');
      popup.textContent = 'Pagaci! da Ruben';
      document.body.appendChild(popup);
  
      const maxWidth = window.innerWidth - popup.offsetWidth;
      const maxHeight = window.innerHeight - popup.offsetHeight;
  
      popup.style.left = Math.random() * maxWidth + 'px';
      popup.style.top = Math.random() * maxHeight + 'px';
    }
  
    // Create multiple popups at intervals
    let popupInterval = setInterval(createPopup, 500);
  
    // Stop creating popups after 20 seconds
    setTimeout(() => {
      clearInterval(popupInterval);
    }, 20000);
  });
  
