// ALLSITEY - Interactive Scripts

// Typewriter Effect
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed + Math.random() * 30);
        } else {
            element.innerHTML += '<span class="cursor-blink">|</span>';
        }
    }
    
    type();
}

// Eye Mouse Tracking
function initEyeTracking() {
    const eye = document.querySelector('.eye-tracker');
    if (!eye) return;
    
    let mouseX = 0;
    let mouseY = 0;
    let eyeX = 0;
    let eyeY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    function animate() {
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        
        const deltaX = (mouseX - centerX) / 20;
        const deltaY = (mouseY - centerY) / 20;
        
        eyeX += (deltaX - eyeX) * 0.1;
        eyeY += (deltaY - eyeY) * 0.1;
        
        if (eye) {
            eye.style.transform = `translate(${eyeX}px, ${eyeY}px)`;
        }
        
        requestAnimationFrame(animate);
    }
    
    animate();
    
    // Random glitch/disappear
    setInterval(() => {
        if (Math.random() > 0.85 && eye) {
            eye.style.opacity = '0';
            setTimeout(() => {
                eye.style.opacity = '1';
            }, 200);
        }
    }, 3000);
}

// Smooth page transitions & initialization
function markPageLoaded() {
    requestAnimationFrame(() => {
        document.body.classList.add('page-loaded');
    });
}

function navigateWithFade(target) {
    document.body.classList.remove('page-loaded');
    setTimeout(() => {
        window.location.href = target;
    }, 600);
}

document.addEventListener('DOMContentLoaded', () => {
    markPageLoaded();
    initEyeTracking();
    
    // Initialize typewriter if element exists
    const typewriterEl = document.querySelector('.typewriter-text');
    if (typewriterEl && typewriterEl.dataset.text) {
        setTimeout(() => {
            typeWriter(typewriterEl, typewriterEl.dataset.text, 40);
        }, 1500);
    }

    // Delegated navigation for subtle links / hover zones
    document.addEventListener('click', (event) => {
        const navEl = event.target.closest('[data-nav]');
        if (!navEl) return;
        const target = navEl.getAttribute('data-nav');
        if (!target) return;
        event.preventDefault();
        navigateWithFade(target);
    });
});

// Form Submission Handler
function handleAccessSubmit(e) {
    e.preventDefault();
    const input = document.getElementById('identifier');
    const message = document.getElementById('status-message');
    
    if (input && input.value.trim()) {
        input.setAttribute('readonly', true);
        input.style.opacity = '0.5';
        input.style.cursor = 'not-allowed';
        
        if (message) {
            message.textContent = 'Identifier recorded.';
            message.style.opacity = '1';
            message.style.color = 'var(--dark-blood)';
        }

        // redirect to Leader page after short delay in static HTML version
        setTimeout(() => {
            try {
                window.location.href = 'leader.html';
            } catch (e) {}
        }, 1500);
    }
}

// Make function globally available
window.handleAccessSubmit = handleAccessSubmit;

