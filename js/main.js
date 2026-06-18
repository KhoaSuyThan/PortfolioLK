/**
 * Nguyễn Võ Lê Khoa - Portfolio JavaScript Logic
 * Contains: Canvas Background, Typewriter, Scroll Reveal, Active Spy, GitHub API, Contact Form
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================================================
    // 1. MOBILE DRAWER NAVIGATION
    // ==========================================================================
    const mobileToggle = document.getElementById('mobile-toggle');
    const mobileDrawer = document.getElementById('mobile-drawer');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');
    
    if (mobileToggle && mobileDrawer) {
        mobileToggle.addEventListener('click', () => {
            mobileToggle.classList.toggle('open');
            mobileDrawer.classList.toggle('open');
        });

        // Close drawer when clicking a mobile nav link
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileToggle.classList.remove('open');
                mobileDrawer.classList.remove('open');
            });
        });
    }

    // Close drawer when resizing screen beyond mobile breakpoint
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && mobileDrawer.classList.contains('open')) {
            mobileToggle.classList.remove('open');
            mobileDrawer.classList.remove('open');
        }
    });

    // ==========================================================================
    // 2. HEADER SCROLL EFFECT & SCROLL SPY (ACTIVE NAVIGATION)
    // ==========================================================================
    const header = document.getElementById('main-header');
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    const mobLinks = document.querySelectorAll('.mobile-nav-link');

    window.addEventListener('scroll', () => {
        // Scroll header glass effect
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Scroll spy: update active link based on scroll position
        let currentSectionId = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120; // Offset for sticky header
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });

        if (currentSectionId) {
            updateActiveLinks(currentSectionId);
        }
    });

    function updateActiveLinks(sectionId) {
        // Desktop nav
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${sectionId}`) {
                link.classList.add('active');
            }
        });

        // Mobile drawer nav
        mobLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${sectionId}`) {
                link.classList.add('active');
            }
        });
    }

    // ==========================================================================
    // 3. TYPEWRITER EFFECT
    // ==========================================================================
    const typewriterElement = document.getElementById('typewriter');
    const words = [
        "Sinh Viên Kỹ Thuật Phần Mềm",
        "Lập Trình Viên .NET / C#",
        "Nhà Phát Triển Ứng Dụng Di Động",
        "Người Đam Mê Nghiên Cứu AI/ML"
    ];
    
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeTimeout = null;

    function type() {
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            // Delete characters
            typewriterElement.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            // Write characters
            typewriterElement.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }

        // Delay handling
        let typingSpeed = 100;
        if (isDeleting) {
            typingSpeed = 50; // Deleting is faster
        }

        // Word completed writing
        if (!isDeleting && charIndex === currentWord.length) {
            typingSpeed = 2000; // Pause at full word
            isDeleting = true;
        } 
        // Word completed deleting
        else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length; // Move to next word
            typingSpeed = 500; // Brief pause before typing next
        }

        typeTimeout = setTimeout(type, typingSpeed);
    }

    if (typewriterElement) {
        type();
    }

    // ==========================================================================
    // 4. INTERACTIVE CANVAS PARTICLE BACKGROUND
    // ==========================================================================
    const canvas = document.getElementById('bg-canvas');
    const ctx = canvas.getContext('2d');
    
    let particlesArray = [];
    const numberOfParticles = 80;
    const connectionDistance = 120;
    
    const mouse = {
        x: null,
        y: null,
        radius: 150
    };

    // Set canvas dimensions
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Track mouse coordinates
    window.addEventListener('mousemove', (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });

    // Clear mouse when it leaves screen
    window.addEventListener('mouseout', () => {
        mouse.x = null;
        mouse.y = null;
    });

    // Particle Blueprints
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.vx = (Math.random() - 0.5) * 0.8; // Slow horizontal speed
            this.vy = (Math.random() - 0.5) * 0.8; // Slow vertical speed
            this.radius = Math.random() * 2 + 1; // Size 1px to 3px
            this.color = 'rgba(0, 242, 254, 0.4)'; // Cyan-blue particle glow
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
        }

        update() {
            // Collision detection with canvas edges
            if (this.x < 0 || this.x > canvas.width) this.vx = -this.vx;
            if (this.y < 0 || this.y > canvas.height) this.vy = -this.vy;

            // Mouse interaction (repelling effect)
            if (mouse.x !== null && mouse.y !== null) {
                let dx = this.x - mouse.x;
                let dy = this.y - mouse.y;
                let distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < mouse.radius) {
                    let force = (mouse.radius - distance) / mouse.radius;
                    let angle = Math.atan2(dy, dx);
                    this.x += Math.cos(angle) * force * 2;
                    this.y += Math.sin(angle) * force * 2;
                }
            }

            // Normal movement
            this.x += this.vx;
            this.y += this.vy;
            this.draw();
        }
    }

    // Initialize particles array
    function initParticles() {
        particlesArray = [];
        for (let i = 0; i < numberOfParticles; i++) {
            particlesArray.push(new Particle());
        }
    }
    initParticles();

    // Draw connecting lines between close particles
    function connectParticles() {
        for (let i = 0; i < particlesArray.length; i++) {
            for (let j = i + 1; j < particlesArray.length; j++) {
                let dx = particlesArray[i].x - particlesArray[j].x;
                let dy = particlesArray[i].y - particlesArray[j].y;
                let distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < connectionDistance) {
                    // Lines opacity drops as distance increases
                    let opacity = 1 - (distance / connectionDistance);
                    ctx.strokeStyle = `rgba(162, 89, 255, ${opacity * 0.12})`; // Purple subtle net lines
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
                    ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
                    ctx.stroke();
                }
            }
            
            // Connect to mouse as well
            if (mouse.x !== null && mouse.y !== null) {
                let dx = particlesArray[i].x - mouse.x;
                let dy = particlesArray[i].y - mouse.y;
                let distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < mouse.radius) {
                    let opacity = 1 - (distance / mouse.radius);
                    ctx.strokeStyle = `rgba(0, 242, 254, ${opacity * 0.25})`; // Cyan glowing lines to cursor
                    ctx.beginPath();
                    ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
                    ctx.lineTo(mouse.x, mouse.y);
                    ctx.stroke();
                }
            }
        }
    }

    // Animation Loop
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Render gradients directly onto canvas background
        let bgGradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
        bgGradient.addColorStop(0, '#070913');
        bgGradient.addColorStop(1, '#04050a');
        ctx.fillStyle = bgGradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        particlesArray.forEach(particle => particle.update());
        connectParticles();
        requestAnimationFrame(animate);
    }
    animate();

    // ==========================================================================
    // 5. SCROLL REVEAL (INTERSECTION OBSERVER)
    // ==========================================================================
    const revealElements = document.querySelectorAll('.scroll-reveal');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                revealObserver.unobserve(entry.target); // Reveal only once
            }
        });
    }, {
        threshold: 0.05,
        rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });

    // ==========================================================================
    // 7. CONTACT FORM SUBMISSION & MODAL
    // ==========================================================================
    const contactForm = document.getElementById('contact-form');
    const formModal = document.getElementById('form-modal');
    const closeModalBtn = document.getElementById('close-modal-btn');
    const submitBtn = document.getElementById('contact-submit');

    if (contactForm && formModal && closeModalBtn) {
        
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Set loading state
            const originalBtnText = submitBtn.innerHTML;
            submitBtn.disabled = true;
            submitBtn.innerHTML = 'Đang gửi <i class="fa-solid fa-spinner fa-spin"></i>';
            
            // Simulated secure api post / email dispatch
            setTimeout(() => {
                // Reset loading state
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalBtnText;
                
                // Reset form values
                contactForm.reset();
                
                // Show glassmorphic success modal
                formModal.classList.add('active');
            }, 1500);
        });

        // Close modal listeners
        closeModalBtn.addEventListener('click', () => {
            formModal.classList.remove('active');
        });

        // Close modal when clicking on backdrop shadow
        formModal.addEventListener('click', (e) => {
            if (e.target === formModal) {
                formModal.classList.remove('active');
            }
        });
    }
});
