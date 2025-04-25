/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction(){
  var menuBtn = document.getElementById("myNavMenu");
  if(menuBtn.className === "nav-menu"){
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}
/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
window.onscroll = function() {headerShadow()};
function headerShadow() {
  const navHeader =document.getElementById("header");
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {
    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";
  } else {
    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";
  }
}
/* ----- TYPING EFFECT ----- */
var typingEffect = new Typed(".typedText",{
  strings : ["Designer","Youtuber","Developer"],
  loop : true,
  typeSpeed : 100, 
  backSpeed : 80,
  backDelay : 2000
})
/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
const sr = ScrollReveal({
      origin: 'top',
      distance: '80px',
      duration: 2000,
      reset: true     
})
/* -- HOME -- */
sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay: 100})
sr.reveal('.featured-text-info',{delay: 200})
sr.reveal('.featured-text-btn',{delay: 200})
sr.reveal('.social_icons',{delay: 200})
sr.reveal('.featured-image',{delay: 300})

/* -- PROJECT BOX -- */
sr.reveal('.project-box',{interval: 200})
/* -- HEADINGS -- */
sr.reveal('.top-header',{})
/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */
/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
origin: 'left',
distance: '80px',
duration: 2000,
reset: true
})

srLeft.reveal('.about-info',{delay: 100})
srLeft.reveal('.contact-info',{delay: 100})
/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
origin: 'right',
distance: '80px',
duration: 2000,
reset: true
})

srRight.reveal('.skills-box',{delay: 100})
srRight.reveal('.form-control',{delay: 100})

/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll('section[id]')
function scrollActive() {
const scrollY = window.scrollY;
sections.forEach(current =>{
  const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
    sectionId = current.getAttribute('id')
  if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 
      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
  }  else {
    document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
  }
})
}
window.addEventListener('scroll', scrollActive)


/* skill js */
// Initialize circular progress bars
document.querySelectorAll('.progress-circle').forEach(circle => {
  const percent = circle.getAttribute('data-percent');
  const circleElement = circle.querySelector('.progress-ring-circle');
  circleElement.style.setProperty('--percent', percent);
});





// Dark/Light Mode Toggle
const modeToggle = document.querySelector('.nav-button .btn');
let darkMode = localStorage.getItem('darkMode') === 'true';

// Apply saved mode
if (darkMode) {
    document.body.classList.add('dark-mode');
    modeToggle.innerHTML = 'Light Mode<i class="uil uil-sun"></i>';
}

// Toggle function
modeToggle.addEventListener('click', () => {
    darkMode = !darkMode;
    localStorage.setItem('darkMode', darkMode);
    
    document.body.classList.toggle('dark-mode');
    modeToggle.innerHTML = darkMode 
        ? 'Light Mode<i class="uil uil-sun"></i>' 
        : 'Dark Mode<i class="uil uil-moon"></i>';
});




// form js 

document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('.luxury-form');
  const notification = document.querySelector('.form-notification');
  
  // Floating label functionality
  const floatingInputs = document.querySelectorAll('.floating input, .floating textarea');
  floatingInputs.forEach(input => {
      // Check if input has value on page load
      if (input.value) {
          input.previousElementSibling.style.top = '0';
          input.previousElementSibling.style.fontSize = '0.8rem';
          input.previousElementSibling.style.background = 'white';
          input.previousElementSibling.style.padding = '0 5px';
          input.previousElementSibling.style.color = '#6c5ce7';
      }
      
      input.addEventListener('focus', function() {
          this.previousElementSibling.style.color = '#6c5ce7';
      });
      
      input.addEventListener('blur', function() {
          if (!this.value) {
              this.previousElementSibling.style.top = '50%';
              this.previousElementSibling.style.fontSize = '1rem';
              this.previousElementSibling.style.background = 'transparent';
              this.previousElementSibling.style.padding = '0';
              this.previousElementSibling.style.color = '#636e72';
          }
      });
  });
  
  // Form submission
  form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Validate form
      let isValid = true;
      const inputs = this.querySelectorAll('input, textarea');
      
      inputs.forEach(input => {
          if (!input.value.trim()) {
              isValid = false;
              input.style.borderColor = '#d63031';
              
              // Shake animation for error
              input.style.animation = 'shake 0.5s';
              setTimeout(() => {
                  input.style.animation = '';
              }, 500);
          } else {
              input.style.borderColor = '#6c5ce7';
          }
      });
      
      if (!isValid) {
          showNotification('Please fill all required fields', 'error');
          return;
      }
      
      // Simulate form submission
      const submitBtn = this.querySelector('.submit-btn');
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span>Sending...</span>';
      
      // In a real app, you would use AJAX here
      setTimeout(() => {
          showNotification('Your message has been sent successfully!', 'success');
          submitBtn.disabled = false;
          submitBtn.innerHTML = '<span>Send Message</span><div class="submit-icon"><i class="fas fa-paper-plane"></i></div>';
          
          // Optional: Reset form after successful submission
          this.reset();
          
          // Reset floating labels
          floatingInputs.forEach(input => {
              input.previousElementSibling.style.top = '50%';
              input.previousElementSibling.style.fontSize = '1rem';
              input.previousElementSibling.style.background = 'transparent';
              input.previousElementSibling.style.padding = '0';
              input.previousElementSibling.style.color = '#636e72';
          });
      }, 2000);
  });
  
  // Reset button functionality
  const resetBtn = document.querySelector('.reset-btn');
  resetBtn.addEventListener('click', function() {
      // Reset floating labels
      floatingInputs.forEach(input => {
          input.previousElementSibling.style.top = '50%';
          input.previousElementSibling.style.fontSize = '1rem';
          input.previousElementSibling.style.background = 'transparent';
          input.previousElementSibling.style.padding = '0';
          input.previousElementSibling.style.color = '#636e72';
          input.style.borderColor = '#dfe6e9';
      });
      
      showNotification('Form has been reset', 'success');
  });
  
  // Show notification function
  function showNotification(message, type) {
      notification.textContent = message;
      notification.className = 'form-notification ' + type;
      notification.classList.add('show');
      
      setTimeout(() => {
          notification.classList.remove('show');
      }, 3000);
  }
  
  // Add shake animation dynamically
  const style = document.createElement('style');
  style.textContent = `
      @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
          20%, 40%, 60%, 80% { transform: translateX(5px); }
      }
  `;
  document.head.appendChild(style);
});













// new no use correctly 

