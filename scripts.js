document.querySelectorAll('.note-header').forEach(header => {
  header.addEventListener('click', () => {
    const content = header.nextElementSibling;

    // Toggle visibility of the clicked section
    if (content.style.display === 'block') {
      content.style.display = 'none';
      header.classList.remove('active');
    } else {
      content.style.display = 'block';
      header.classList.add('active');
    }
  });
});


const scrollToTopBtn = document.getElementById('scrollToTopBtn');

// Show the button when the user scrolls down 100px
window.onscroll = function() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    scrollToTopBtn.style.display = 'block'; // Show the button
  } else {
    scrollToTopBtn.style.display = 'none'; // Hide the button
  }
};

// Scroll to top function
scrollToTopBtn.addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // This will make the scroll smooth
  });
});
