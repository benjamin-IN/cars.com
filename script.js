let slides = document.querySelectorAll('.slide');
let dots = document.querySelectorAll('.dot');
let currentSlide = 0;
let slideInterval = setInterval(nextSlide, 3000);

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove('active'));
  dots.forEach(dot => dot.classList.remove('active'));
  slides[index].classList.add('active');
  dots[index].classList.add('active');
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

document.querySelector('.next').addEventListener('click', () => {
  nextSlide();
  resetInterval();
});

document.querySelector('.prev').addEventListener('click', () => {
  prevSlide();
  resetInterval();
});

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentSlide = index;
    showSlide(currentSlide);
    resetInterval();
  });
});

function resetInterval() {
  clearInterval(slideInterval);
  slideInterval = setInterval(nextSlide, 3000);
}

  const searchInput = document.getElementById('searchInput');
  const carList = document.getElementById('carList');
  const cars = carList.getElementsByTagName('li');

  searchInput.addEventListener('keyup', function() {
    const filter = searchInput.value.toLowerCase();
    
    // Show the list only when there's input
    carList.style.display = filter ? 'block' : 'none';

    for (let i = 0; i < cars.length; i++) {
      let car = cars[i];
      let text = car.textContent || car.innerText;
      car.style.display = text.toLowerCase().includes(filter) ? '' : 'none';
    }
  });

  const favoriteButtons = document.querySelectorAll('.favorite');

  favoriteButtons.forEach(button => {
    button.addEventListener('click', () => {
      button.classList.toggle('active');
      const span = button.querySelector('span');
  
      if (button.classList.contains('active')) {
        span.innerHTML = '&#10084;';
        saveCar(button);
      } else {
        span.innerHTML = '&#9825;';
        removeCar(button);
      }
    });
  });
  
  function saveCar(button) {
    const car = {
      name: button.dataset.name,
      image: button.dataset.image,
      price: button.dataset.price,
    };
  
    let savedCars = JSON.parse(localStorage.getItem('savedCars')) || [];
    
    // prevent duplicates
    if (!savedCars.find(c => c.name === car.name)) {
      savedCars.push(car);
      localStorage.setItem('savedCars', JSON.stringify(savedCars));
    }
  }
  
  function removeCar(button) {
    let savedCars = JSON.parse(localStorage.getItem('savedCars')) || [];
    const name = button.dataset.name;
    savedCars = savedCars.filter(car => car.name !== name);
    localStorage.setItem('savedCars', JSON.stringify(savedCars));
  }

  
function page() {
  window.location.href="page.html"
}

function plus() {
  window.location.href="contact.html"

}

function redirect() {
    window.location.href="car.html"
}
 function showDiv(){
    document.getElementById("myDiv").style.display = "block";

 }

function closeModal() {
    document.querySelector('.overlay').style.display = 'none';
  }



  function send() {
    const form = document.querySelector('form');
    
    // Prevent default form submission
    event.preventDefault();
    
    // Submit form data using Fetch API
    fetch(form.action, {
        method: 'POST',
        body: new FormData(form)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // Show success alert
        alert('Message sent successfully!');
        form.reset(); // Clear the form
    })
    .catch(error => {
        // Show error alert
        alert('Failed to send message. Please try again later.');
        console.error('Error:', error);
    });
}

function showbBtn(){
  window.location.href="main.html"
}

function back() {
  window.location.href="main.html"
}

function ctn() {
  window.location.href="electric.html"
}

function bmw() {
  window.location.href="bmw.html"
}

function tesla() {
  window.location.href="tesla.html"
}

function audi() {
  window.location.href="audi.html"
}

function toyota() {
  window.location.href="toyota.html"
}

function chevy() {
  window.location.href="chevy.html"
}

function benze() {
  window.location.href="benze.html"
}

function honda() {
  window.location.href="honda.html"
}