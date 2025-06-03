// Funções para o modal de login
function openLoginModal() {
    document.getElementById('loginModal').style.display = 'flex';
}

function closeLoginModal() {
    document.getElementById('loginModal').style.display = 'none';
}

// Funções para a galeria
function openModal(src, caption) {
    const modal = document.getElementById('galleryModal');
    const modalImg = document.getElementById('modalImg');
    const modalCaption = document.getElementById('modalCaption');
    
    modal.style.display = 'flex';
    modalImg.src = src;
    modalCaption.textContent = caption;
}

function closeModal() {
    document.getElementById('galleryModal').style.display = 'none';
}

// Funções para os depoimentos
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial');
const dots = document.querySelectorAll('.slider-dot');

function showTestimonial(index) {
    testimonials.forEach(testimonial => testimonial.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    testimonials[index].classList.add('active');
    dots[index].classList.add('active');
    currentTestimonial = index;
}

// Rotação automática de depoimentos
setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
}, 5000);

// Função para o áudio ambiente
function toggleAudio() {
    const audio = document.getElementById('ambientMusic');
    const toggleBtn = document.querySelector('.audio-toggle');
    
    if (audio.paused) {
        audio.play();
        toggleBtn.textContent = '🔇 Música';
    } else {
        audio.pause();
        toggleBtn.textContent = '🎵 Música';
    }
}