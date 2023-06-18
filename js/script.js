// Menu toggle functionality
let menu = document.querySelector('#menu-bars');
let header = document.querySelector('header');

// Toggle menu bars and header when menu is clicked
menu.onclick = () => {
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

// Remove menu bars and active header when scrolling
window.onscroll = () => {
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}

// Cursor positioning based on mouse movement
let cursor1 = document.querySelector('.cursor-1');
let cursor2 = document.querySelector('.cursor-2');

window.onmousemove = (e) => {
    cursor1.style.top = e.pageY + 'px';
    cursor1.style.left = e.pageX + 'px';
    cursor2.style.top = e.pageY + 'px';
    cursor2.style.left = e.pageX + 'px';
}

// Cursor activation on link hover
document.querySelectorAll('a').forEach(links => {
    links.onmouseenter = () => {
        cursor1.classList.add('active');
        cursor2.classList.add('active');
    }
    links.onmouseleave = () => {
        cursor1.classList.remove('active');
        cursor2.classList.remove('active');
    }
});

// Typing effect
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");
const textArray = ["Front-end Developer", "Web Designer", "Web Developer", "Software Engineer"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

// Type function for typing effect
function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        cursorSpan.classList.remove("typing");
        setTimeout(erase, newTextDelay);
    }
}

// Erase function for typing effect
function erase() {
    if (charIndex > 0) {
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        cursorSpan.classList.remove("typing");
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
    }
}

// Start typing effect when DOM content is loaded
document.addEventListener("DOMContentLoaded", function() {
    if (textArray.length) setTimeout(type, newTextDelay + 250);
});

// Back-to-top button functionality
const showOnPx = 150;
const backToTopButton = document.querySelector(".back-to-top");

// Get the scroll container
const scrollContainer = () => {
    return document.documentElement || document.body;
};

// Show or hide back-to-top button based on scroll position
document.addEventListener("scroll", () => {
    if (scrollContainer().scrollTop > showOnPx) {
        backToTopButton.classList.remove("hidden");
    } else {
        backToTopButton.classList.add("hidden");
    }
});





window.addEventListener('DOMContentLoaded', function() {
  const workItems = document.querySelectorAll('.work');
  const modalOverlay = document.querySelector('.modal-overlay');
  const modalContent = document.querySelector('.modal-content');
  const closeModal = document.querySelector('.close-modal');
  const modalDetails = document.querySelector('.modal-details');

  // Open modal and display hidden content
  function openModal(content) {
    modalDetails.innerHTML = content.innerHTML;
    modalOverlay.style.display = 'flex';
  }

  // Close modal
  function closeModalHandler() {
    modalOverlay.style.display = 'none';
  }

  // Attach click event listeners to work items
  workItems.forEach(function(workItem) {
    workItem.addEventListener('click', function(e) {
      const hiddenContent = this.querySelector('.hidden-content');
      openModal(hiddenContent);
    });
  });

  // Attach click event listener to close modal button
  closeModal.addEventListener('click', closeModalHandler);

  // Close modal when clicking outside the modal content
  modalOverlay.addEventListener('click', function(e) {
    if (e.target === modalOverlay) {
      closeModalHandler();
    }
  });
});









