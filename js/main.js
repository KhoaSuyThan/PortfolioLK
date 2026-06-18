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
    // TRANSLATION SYSTEM
    // ==========================================================================
    const translations = {
        vi: {
            "nav-home": "Trang Chủ",
            "nav-about": "Giới Thiệu",
            "nav-skills": "Kỹ Năng",
            "nav-projects": "Dự Án",
            "nav-contact": "Liên Hệ",
            "btn-cv": "CV của tôi",
            "hero-welcome": "👋 Chào mừng bạn đến với không gian của tôi",
            "hero-greet": "Xin chào, tôi là <br><span class=\"highlight-gradient\">Nguyễn Võ Lê Khoa</span>",
            "hero-iam": "Tôi là một",
            "hero-desc": "Sinh viên ngành Kỹ thuật Phần mềm tại trường Đại học Công nghệ TP.HCM (HUTECH). Đam mê xây dựng ứng dụng web mạnh mẽ, ứng dụng di động đa nền tảng và nghiên cứu các giải pháp Trí tuệ Nhân tạo (AI/ML).",
            "hero-btn-projects": "Xem dự án",
            "hero-btn-contact": "Liên hệ tôi",
            "about-tag": "01. Về tôi",
            "about-title": "Câu Chuyện Của Tôi",
            "about-stat1": "Kho lưu trữ GitHub",
            "about-stat2": "Dự án cốt lõi",
            "about-stat3": "Đang học Kỹ sư HUTECH",
            "about-stat4": "Đam mê & Tâm huyết",
            "about-who": "Tôi là ai?",
            "about-p1": "Chào bạn! Tôi là một nhà phát triển phần mềm trẻ tuổi năng động tại Việt Nam. Hiện tôi đang là sinh viên theo học chuyên ngành <strong>Kỹ thuật Phần mềm</strong> tại Đại học Công nghệ TP.HCM (HUTECH).",
            "about-p2": "Tôi yêu thích việc giải quyết các bài toán kỹ thuật từ cơ bản đến phức tạp. Từ việc thiết kế cơ sở dữ liệu quan hệ chặt chẽ đến việc lập trình giao diện người dùng mượt mà, tôi luôn cố gắng học hỏi và hoàn thiện sản phẩm của mình tốt nhất.",
            "about-p3": "Hiện tại, tôi đang tập trung đi sâu nghiên cứu <strong>Hệ sinh thái .NET (C#)</strong>, kiến trúc hệ thống (System Architecture) và tìm hiểu sâu hơn về mô hình hóa 3D (3D Modeling) nhằm tạo nên các ứng dụng đột phá và toàn diện hơn trong tương lai.",
            "about-edu-title": "Đại học Công nghệ TP.HCM (HUTECH)",
            "about-edu-major": "Ngành Kỹ thuật Phần mềm (Software Engineering)",
            "about-edu-status": "Đang theo học (Sinh viên)",
            "skills-tag": "02. Kỹ năng",
            "projects-tag": "03. Dự án",
            "projects-title": "Sản Phẩm Nổi Bật",
            "project-heart-badge": "DỰ ÁN TÂM HUYẾT NHẤT",
            "project-num-featured": "Featured Project",
            "project1-title": "SmartCV AI Builder",
            "project1-desc": "Một nền tảng trực tuyến thông minh giúp người dùng xây dựng, quản lý và tối ưu hóa CV xin việc một cách chuyên nghiệp với sự trợ giúp đắc lực của Trí tuệ Nhân tạo. Nền tảng được xây dựng với giao diện hiện đại bằng React js và Vue js, kết hợp với hệ thống backend ASP.NET Core và SQL Server.",
            "project-btn-live": "Xem Trực Tiếp (smartcv-ai.io.vn)",
            "project-num-mobile": "Mobile Project",
            "project2-title": "Smart Cooking & Community",
            "project2-desc": "Ứng dụng di động đa nền tảng kết hợp mạng xã hội ẩm thực và trợ lý nấu ăn. Hỗ trợ khám phá hàng ngàn công thức nấu ăn trực tuyến, đồng bộ hóa thời gian thực qua cơ sở dữ liệu Firebase và hỗ trợ dịch thuật tự động công thức nấu ăn đa ngôn ngữ.",
            "project-num-ai": "AI / Machine Learning Project",
            "project3-title": "Face Recognition (PCA & OpenCV)",
            "project3-desc": "Hệ thống nhận diện khuôn mặt thời gian thực sử dụng camera giám sát. Dự án triển khai thuật toán Phân tích Thành phần Chính (PCA) để giảm số chiều đặc trưng (Eigenfaces) và tiến hành phân loại danh tính khuôn mặt chính xác trên bộ dữ liệu kiểm thử được thiết lập.",
            "contact-tag": "04. Liên hệ",
            "contact-title": "Kết Nối Với Tôi",
            "contact-heading": "Hãy nói chuyện!",
            "contact-p": "Tôi luôn hào hứng học hỏi các dự án mã nguồn mở, cơ hội thực tập, việc làm mới hoặc các cuộc thảo luận kỹ thuật bổ ích. Đừng ngần ngại liên lạc với tôi qua biểu mẫu bên cạnh hoặc các mạng xã hội bên dưới!",
            "contact-email-label": "Gửi Email",
            "contact-loc-label": "Vị Trí",
            "contact-loc-val": "TP. Hồ Chí Minh, Việt Nam",
            "form-name": "Họ và tên",
            "form-email": "Địa chỉ Email",
            "form-msg": "Lời nhắn của bạn...",
            "form-submit": "Gửi lời nhắn",
            "footer-copyright": "&copy; 2026 Nguyễn Võ Lê Khoa. All rights reserved.",
            "footer-credit": "Thiết kế tinh tế bằng HTML, CSS & JavaScript",
            "modal-success-title": "Gửi thành công!",
            "modal-success-msg": "Cảm ơn bạn đã gửi liên hệ. Tôi sẽ phản hồi lại bạn qua email sớm nhất có thể.",
            "modal-close": "Đóng"
        },
        en: {
            "nav-home": "Home",
            "nav-about": "About",
            "nav-skills": "Skills",
            "nav-projects": "Projects",
            "nav-contact": "Contact",
            "btn-cv": "My CV",
            "hero-welcome": "👋 Welcome to my personal space",
            "hero-greet": "Hello, I am <br><span class=\"highlight-gradient\">Nguyen Vo Le Khoa</span>",
            "hero-iam": "I am a",
            "hero-desc": "Software Engineering student at Ho Chi Minh City University of Technology (HUTECH). Passionate about building robust web applications, cross-platform mobile apps, and researching Artificial Intelligence (AI/ML) solutions.",
            "hero-btn-projects": "View Projects",
            "hero-btn-contact": "Contact Me",
            "about-tag": "01. About Me",
            "about-title": "My Story",
            "about-stat1": "GitHub Repositories",
            "about-stat2": "Core Projects",
            "about-stat3": "HUTECH Software Engineer student",
            "about-stat4": "Passion & Dedication",
            "about-who": "Who am I?",
            "about-p1": "Hello there! I am an active, young software developer based in Vietnam. Currently, I am a student majoring in <strong>Software Engineering</strong> at Ho Chi Minh City University of Technology (HUTECH).",
            "about-p2": "I love solving technical problems from basic to complex. From designing robust relational databases to programming smooth user interfaces, I always strive to learn and perfect my products to the best of my ability.",
            "about-p3": "Currently, I am focusing on deep-diving into the <strong>.NET ecosystem (C#)</strong>, system architecture, and exploring 3D modeling to build more breakthrough and comprehensive applications in the future.",
            "about-edu-title": "Ho Chi Minh City University of Technology (HUTECH)",
            "about-edu-major": "Major: Software Engineering",
            "about-edu-status": "Currently Studying (Student)",
            "skills-tag": "02. Skills",
            "projects-tag": "03. Projects",
            "projects-title": "Featured Projects",
            "project-heart-badge": "MOST PASSIONATE PROJECT",
            "project-num-featured": "Featured Project",
            "project1-title": "SmartCV AI Builder",
            "project1-desc": "An intelligent online platform that helps users build, manage, and optimize job resumes professionally with the help of Artificial Intelligence. The platform is built with a modern interface using React js and Vue js, combined with an ASP.NET Core and SQL Server backend.",
            "project-btn-live": "Live Demo (smartcv-ai.io.vn)",
            "project-num-mobile": "Mobile Project",
            "project2-title": "Smart Cooking & Community",
            "project2-desc": "A cross-platform mobile application combining a culinary social network and a cooking assistant. Supports discovering thousands of online recipes, real-time synchronization via Firebase database, and automatic multilingual recipe translation.",
            "project-num-ai": "AI / Machine Learning Project",
            "project3-title": "Face Recognition (PCA & OpenCV)",
            "project3-desc": "A real-time face recognition system using surveillance cameras. The project implements the Principal Component Analysis (PCA) algorithm to reduce feature dimensions (Eigenfaces) and performs accurate face identity classification on a custom test dataset.",
            "contact-tag": "04. Contact",
            "contact-title": "Get In Touch",
            "contact-heading": "Let's talk!",
            "contact-p": "I am always excited about open-source projects, internship/job opportunities, or rewarding technical discussions. Feel free to contact me using the adjacent form or the social media links below!",
            "contact-email-label": "Send Email",
            "contact-loc-label": "Location",
            "contact-loc-val": "Ho Chi Minh City, Vietnam",
            "form-name": "Full Name",
            "form-email": "Email Address",
            "form-msg": "Your message...",
            "form-submit": "Send Message",
            "footer-copyright": "&copy; 2026 Nguyen Vo Le Khoa. All rights reserved.",
            "footer-credit": "Exquisitely designed with HTML, CSS & JavaScript",
            "modal-success-title": "Message Sent!",
            "modal-success-msg": "Thank you for reaching out. I will respond to your email as soon as possible.",
            "modal-close": "Close"
        }
    };

    const typewriterWords = {
        vi: [
            "Sinh Viên Kỹ Thuật Phần Mềm",
            "Lập Trình Viên .NET / C#",
            "Nhà Phát Triển Ứng Dụng Di Động",
            "Người Đam Mê Nghiên Cứu AI/ML"
        ],
        en: [
            "Software Engineering Student",
            ".NET / C# Developer",
            "Mobile App Developer",
            "AI/ML Research Enthusiast"
        ]
    };

    let currentLang = localStorage.getItem('portfolio-lang') || 'vi';

    // ==========================================================================
    // 3. TYPEWRITER EFFECT
    // ==========================================================================
    const typewriterElement = document.getElementById('typewriter');
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeTimeout = null;

    function type() {
        if (!typewriterElement) return;
        const activeWords = typewriterWords[currentLang];
        const currentWord = activeWords[wordIndex];
        
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
            wordIndex = (wordIndex + 1) % activeWords.length; // Move to next word
            typingSpeed = 500; // Brief pause before typing next
        }

        typeTimeout = setTimeout(type, typingSpeed);
    }

    // Initialize multi-language and start typewriter
    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('portfolio-lang', lang);
        
        // Update all translation tags
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });

        // Update active class on toggle buttons (Desktop)
        document.querySelectorAll('#lang-toggle-btn .lang-text').forEach(btn => {
            btn.classList.remove('active');
        });
        const activeDesktopBtn = document.getElementById(`lang-${lang}`);
        if (activeDesktopBtn) activeDesktopBtn.classList.add('active');
        
        // Update active class on toggle buttons (Mobile)
        document.querySelectorAll('#mob-lang-toggle-btn .lang-text').forEach(btn => {
            btn.classList.remove('active');
        });
        const activeMobileBtn = document.getElementById(`mob-lang-${lang}`);
        if (activeMobileBtn) activeMobileBtn.classList.add('active');

        // Restart typewriter with new language words
        if (typewriterElement) {
            clearTimeout(typeTimeout);
            wordIndex = 0;
            charIndex = 0;
            isDeleting = false;
            typewriterElement.textContent = '';
            type();
        }
    }

    // Set up toggle buttons listeners
    const langToggleBtn = document.getElementById('lang-toggle-btn');
    if (langToggleBtn) {
        langToggleBtn.addEventListener('click', () => {
            const targetLang = currentLang === 'vi' ? 'en' : 'vi';
            setLanguage(targetLang);
        });
    }

    const mobLangToggleBtn = document.getElementById('mob-lang-toggle-btn');
    if (mobLangToggleBtn) {
        mobLangToggleBtn.addEventListener('click', () => {
            const targetLang = currentLang === 'vi' ? 'en' : 'vi';
            setLanguage(targetLang);
        });
    }

    // Set language on page load
    setLanguage(currentLang);

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
