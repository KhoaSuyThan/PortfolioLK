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
            "about-p1": "Chào bạn! Tôi là một nhà phát triển phần mềm trẻ tuổi năng động tại Việt Nam. Hiện tôi đang là sinh viên theo học chuyên ngành <strong>Công nghệ phần mềm</strong> tại Đại học Công nghệ TP.HCM (HUTECH).",
            "about-p2": "Với tư duy logic và niềm đam mê công nghệ, tôi luôn hào hứng trước các bài toán kỹ thuật thực tế. Tôi không chỉ chú trọng xây dựng kiến trúc backend vững chắc, tối ưu hóa cơ sở dữ liệu mà còn đặc biệt quan tâm tới việc kiến tạo giao diện frontend trực quan, mượt mà nhằm đem lại trải nghiệm tốt nhất cho người dùng.",
            "about-p3": "Định hướng hiện tại của tôi là đi sâu nghiên cứu <strong>Hệ sinh thái .NET (C#)</strong> và thiết kế kiến trúc hệ thống (System Architecture). Đồng thời, tôi cũng đang tích cực tìm hiểu công nghệ mô hình hóa 3D (3D Modeling) nhằm mở rộng không gian tương tác số trong các ứng dụng tương lai.",
            "about-edu-title": "Đại học Công nghệ TP.HCM (HUTECH)",
            "about-edu-major": "Ngành Công nghệ phần mềm (Software Engineering)",
            "about-edu-status": "Đang theo học (Sinh viên)",
            "about-timeline-title": "Lộ Trình Học Tập & Phát Triển",
            "timeline-y1-title": "Năm 1: Bắt Đầu Lập Trình",
            "timeline-y1-desc": "Bắt đầu làm quen với tư duy lập trình, học sâu về cấu trúc dữ liệu, giải thuật cơ bản và phát triển tư duy logic toán học.",
            "timeline-y2-title": "Năm 2: Thực Hành & Dự Án Nhỏ",
            "timeline-y2-desc": "Rèn luyện kỹ năng qua các bài tập lớn, thực hiện một số dự án nhỏ và làm quen với các công nghệ lập trình web căn bản.",
            "timeline-y3-title": "Năm 3: AI, Mobile & Dự Án Lớn",
            "timeline-y3-desc": "Nghiên cứu Machine Learning/AI (dự án Nhận diện khuôn mặt PCA), học Flutter phát triển ứng dụng di động (Smart Cooking). Thiết kế hệ thống web lớn, xây dựng SmartCV AI Builder (.NET Core, React, Vue) và tích cực tham gia Nghiên cứu khoa học tại HUTECH.",
            "timeline-y3-date": "2025 - 2026 (Hiện tại - Năm 3)",
            "timeline-y4-title": "Năm 4: Thực Chiến Dự Án & Tốt Nghiệp",
            "timeline-y4-desc": "Đầu năm 4 hướng tới tham gia các dự án thực tế tại doanh nghiệp để tích lũy kinh nghiệm thực chiến, đồng thời tập trung nghiên cứu và hoàn thành đồ án tốt nghiệp xuất sắc.",
            "timeline-y4-date": "2026 - 2027 (Kế hoạch)",
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
            "project3-title": "Face Recognition (PCA & OpenCV)",
            "project3-desc": "Hệ thống nhận diện khuôn mặt thời gian thực sử dụng camera giám sát. Dự án triển khai thuật toán Phân tích Thành phần Chính (PCA) để giảm số chiều đặc trưng (Eigenfaces) và tiến hành phân loại danh tính khuôn mặt chính xác trên bộ dữ liệu kiểm thử được thiết lập.",
            "other-projects-title": "Các Dự Án Khác (GitHub)",
            "github-loading": "Đang tải các dự án từ GitHub...",
            "github-empty": "Không tìm thấy dự án công khai nào.",
            "github-error": "Không thể tải các dự án từ GitHub lúc này. Vui lòng thử lại sau.",
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
            "about-p2": "Driven by logical thinking and a passion for technology, I am always excited to tackle practical engineering problems. I focus not only on designing solid backend architectures and optimized databases but also on crafting intuitive, smooth frontend user interfaces to deliver the best possible user experience.",
            "about-p3": "My current direction is to deep-dive into the <strong>.NET ecosystem (C#)</strong> and system architecture design. In parallel, I am actively exploring 3D modeling technologies to expand digital interactive spaces in future applications.",
            "about-edu-title": "Ho Chi Minh City University of Technology (HUTECH)",
            "about-edu-major": "Major: Software Engineering",
            "about-edu-status": "Currently Studying (Student)",
            "about-timeline-title": "Learning & Development Timeline",
            "timeline-y1-title": "Year 1: Programming Foundations",
            "timeline-y1-desc": "Getting familiar with programming concepts, deep diving into data structures, basic algorithms, and developing logical thinking.",
            "timeline-y2-title": "Year 2: Practice & Small Projects",
            "timeline-y2-desc": "Practicing coding skills through assignments, building small personal projects, and learning basic web development technologies.",
            "timeline-y3-title": "Year 3: AI, Mobile & Core Projects",
            "timeline-y3-desc": "Researching Machine Learning/AI (PCA Face Recognition project), learning Flutter for mobile development (Smart Cooking app). Designing large web systems, building SmartCV AI Builder (.NET Core, React, Vue), and actively participating in Scientific Research at HUTECH.",
            "timeline-y3-date": "2025 - 2026 (Current - Year 3)",
            "timeline-y4-title": "Year 4: Real-world Projects & Graduation",
            "timeline-y4-desc": "Aiming to participate in real-world corporate projects at the start of Year 4 to gain practical industry experience, while focusing on completing an outstanding graduation thesis.",
            "timeline-y4-date": "2026 - 2027 (Planning)",
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
            "project3-title": "Face Recognition (PCA & OpenCV)",
            "project3-desc": "A real-time face recognition system using surveillance cameras. The project implements the Principal Component Analysis (PCA) algorithm to reduce feature dimensions (Eigenfaces) and performs accurate face identity classification on a custom test dataset.",
            "other-projects-title": "Other Noteworthy Projects (GitHub)",
            "github-loading": "Loading projects from GitHub...",
            "github-empty": "No public projects found.",
            "github-error": "Could not load GitHub projects at this time. Please try again later.",
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

    // Fetch GitHub Projects dynamically
    async function fetchGitHubProjects() {
        const grid = document.getElementById('github-projects-grid');
        if (!grid) return;

        try {
            const response = await fetch('https://api.github.com/users/KhoaSuyThan/repos?per_page=100');
            if (!response.ok) {
                throw new Error('Failed to fetch repositories');
            }
            const repos = await response.json();
            
            // Selected repositories to showcase in specific order
            const selectedRepos = [
                'ECO-PROTECTMNM', 
                'Print3DWeb', 
                'event-cert-soroban', 
                'Hotel-Management-Secured', 
                'Hotel-Management-System', 
                'QuanLyDongTien'
            ];
            
            // Filter and sort by the order defined in selectedRepos
            const filteredRepos = repos
                .filter(repo => selectedRepos.includes(repo.name))
                .sort((a, b) => selectedRepos.indexOf(a.name) - selectedRepos.indexOf(b.name));

            if (filteredRepos.length === 0) {
                grid.innerHTML = `
                    <div class="empty-repos">
                        <p data-i18n="github-empty">${translations[currentLang]['github-empty'] || 'Không tìm thấy dự án công khai nào.'}</p>
                    </div>
                `;
                return;
            }

            grid.innerHTML = ''; // Clear loading state
            
            filteredRepos.forEach(repo => {
                const card = document.createElement('div');
                card.className = 'other-project-card glass-card';
                
                // Format programming language / tech
                const lang = repo.language || 'HTML/CSS';
                
                // Format description (handle null)
                const desc = repo.description || (currentLang === 'vi' ? 'Dự án nguồn mở trên GitHub.' : 'Open source project on GitHub.');
                
                card.innerHTML = `
                    <div class="other-project-header">
                        <i class="fa-regular fa-folder folder-icon"></i>
                        <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer" class="github-link-icon" aria-label="GitHub Repository">
                            <i class="fa-brands fa-github"></i>
                        </a>
                    </div>
                    <h4 class="other-project-card-title">${repo.name}</h4>
                    <p class="other-project-card-desc">${desc}</p>
                    <div class="other-project-footer">
                        <span class="other-project-tech">${lang}</span>
                        <div class="other-project-stats">
                            <span><i class="fa-regular fa-star"></i> ${repo.stargazers_count}</span>
                            <span><i class="fa-solid fa-code-fork"></i> ${repo.forks_count}</span>
                        </div>
                    </div>
                `;
                
                grid.appendChild(card);
            });
        } catch (error) {
            console.error('Error fetching GitHub repos:', error);
            grid.innerHTML = `
                <div class="error-repos">
                    <p data-i18n="github-error">${translations[currentLang]['github-error'] || 'Không thể tải các dự án từ GitHub lúc này.'}</p>
                </div>
            `;
        }
    }

    // Set language on page load
    setLanguage(currentLang);
    fetchGitHubProjects();

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
    // 7. CONTACT FORM SUBMISSION & MODAL (Formspree Integration)
    // ==========================================================================
    // HƯỚNG DẪN: Đăng ký tài khoản miễn phí tại https://formspree.io/
    // Tạo một Form mới, copy ID của form (ví dụ: xv9jpdzo) và dán vào đây:
    const FORMSPREE_FORM_ID = 'mrevnpbl'; 

    const contactForm = document.getElementById('contact-form');
    const formModal = document.getElementById('form-modal');
    const closeModalBtn = document.getElementById('close-modal-btn');
    const submitBtn = document.getElementById('contact-submit');

    if (contactForm && formModal && closeModalBtn) {
        
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const formData = new FormData(contactForm);
            
            // Set loading state
            const originalBtnText = submitBtn.innerHTML;
            submitBtn.disabled = true;
            submitBtn.innerHTML = currentLang === 'vi' ? 'Đang gửi <i class="fa-solid fa-spinner fa-spin"></i>' : 'Sending <i class="fa-solid fa-spinner fa-spin"></i>';
            
            // Chạy chế độ giả lập nếu chưa cấu hình ID thực tế
            if (FORMSPREE_FORM_ID === 'YOUR_FORMSPREE_FORM_ID') {
                setTimeout(() => {
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = originalBtnText;
                    contactForm.reset();
                    formModal.classList.add('active');
                }, 1200);
                return;
            }

            try {
                const response = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });
                
                if (response.ok) {
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = originalBtnText;
                    contactForm.reset();
                    
                    // Show glassmorphic success modal
                    formModal.classList.add('active');
                } else {
                    throw new Error('Formspree submission failed');
                }
            } catch (error) {
                console.error('Lỗi khi gửi liên hệ:', error);
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalBtnText;
                
                alert(currentLang === 'vi' 
                    ? 'Có lỗi xảy ra khi gửi tin nhắn. Vui lòng liên hệ trực tiếp qua Email!' 
                    : 'An error occurred while sending the message. Please contact me directly via Email!');
            }
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
