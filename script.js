document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const menuBtn = document.getElementById('menuBtn');
    const closeBtn = document.getElementById('closeBtn');
    const mobileNav = document.getElementById('mobileNav');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    menuBtn.addEventListener('click', () => {
        mobileNav.classList.remove('hidden');
        setTimeout(() => mobileNav.classList.add('active'), 10);
    });

    closeBtn.addEventListener('click', () => {
        mobileNav.classList.remove('active');
        setTimeout(() => {
            mobileNav.classList.add('hidden');
        }, 300);
    });

    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileNav.classList.remove('active');
            setTimeout(() => {
                mobileNav.classList.add('hidden');
            }, 300);
        });
    });

    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Navbar Background on Scroll
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('.nav-container');
        if (window.scrollY > 100) {
            nav.style.background = 'rgba(7, 7, 17, 0.95)';
            nav.style.backdropFilter = 'blur(10px)';
        } else {
            nav.style.background = 'rgba(7, 7, 17, 0.9)';
            nav.style.backdropFilter = 'blur(8px)';
        }
    });

    // Skills Data - Organized by Categories
    const skills = {
        'Programming Languages': [
            { name: 'Python', level: 90, icon: 'fab fa-python' },
            { name: 'JavaScript', level: 88, icon: 'fab fa-js' },
            { name: 'HTML/CSS', level: 95, icon: 'fab fa-html5' }
        ],
        'Frontend Development': [
            { name: 'React', level: 85, icon: 'fab fa-react' },
            { name: 'React Native', level: 80, icon: 'fab fa-react' },
            { name: 'CSS Frameworks', level: 92, icon: 'fab fa-css3-alt' },
            { name: 'JavaScript', level: 88, icon: 'fab fa-js' }
        ],
        'Backend & APIs': [
            { name: 'FastAPI', level: 75, icon: 'fas fa-bolt' },
            { name: 'Flask', level: 78, icon: 'fas fa-flask' },
            { name: 'RESTful APIs', level: 85, icon: 'fas fa-code' },
            { name: 'Node.js', level: 80, icon: 'fab fa-node-js' }
        ],
        'Databases & Cloud': [
            { name: 'MongoDB', level: 82, icon: 'fas fa-database' },
            { name: 'Firebase', level: 80, icon: 'fas fa-fire' },
            { name: 'Realtime Firebase', level: 78, icon: 'fas fa-bolt' }
        ],
        'AI/ML & Tools': [
            { name: 'PyTorch', level: 75, icon: 'fas fa-brain' },
            { name: 'TensorFlow', level: 72, icon: 'fas fa-network-wired' },
            { name: 'Model Training', level: 70, icon: 'fas fa-robot' }
        ],
        'Development Tools': [
            { name: 'VS Code', level: 95, icon: 'fas fa-code' },
            { name: 'Google Colab', level: 88, icon: 'fab fa-google' },
            { name: 'Canva', level: 85, icon: 'fas fa-palette' },
            { name: 'Figma', level: 80, icon: 'fab fa-figma' },
            { name: 'Expo Go', level: 82, icon: 'fas fa-mobile' },
            { name: 'Google Drive', level: 90, icon: 'fab fa-google-drive' },
            { name: 'Ubuntu', level: 85, icon: 'fab fa-ubuntu' },
            { name: 'Virtual Machine', level: 78, icon: 'fas fa-server' }
        ]
    };

    // Updated Projects Data with proper media handling
    // Updated Projects Data with proper media handling
    const projects = [
        {
            title: 'Skin Disease Detection App',
            description: 'AI-powered mobile application for early detection of skin conditions using machine learning algorithms with React Native and TensorFlow.',
            media: 'assets/projects/skin.mp4',
            mediaType: 'video',
            thumbnail: 'assets/projects/thumbnails/skin.jpg',
            tags: ['React Native', 'TensorFlow', 'PyTorch', 'Python','Expo' , 'FastAPI', 'Firebase', 'Expo go' , 'Model Training' , 'Model Integration' , 'Camera Integration', 'Articles Content' ],
            category: 'Mobile App',
            //github: 'https://github.com/yourusername/skin-disease-app',
            
        },
        {
            title: 'Skin Disease Detection Website',
            description: 'Web platform for skin disease analysis using advanced machine learning models with FastAPI and React.',
            media: 'assets/projects/skinweb.mp4',
            mediaType: 'video',
            thumbnail: 'assets/projects/thumbnails/skinweb.jpg',
            tags: ['React', 'FastAPI', 'PyTorch', 'MongoDB', 'Flask API', 'Python' ],
            category: 'Web App',
            
        },
        {
            title: 'Weather App',
            description: 'Real-time weather forecasting application with beautiful UI and interactive maps using modern web technologies.',
            media: 'assets/projects/weather-app.mp4',
            mediaType: 'video',
            thumbnail: 'assets/projects/thumbnails/skyinsight.jpg',
            tags: ['JavaScript', 'API Integration','Expo ', 'Expo go' ,'React Native '],
            category: 'Mobile App',
            github: 'https://github.com/skystar22033/Weather-App',
            live: 'https://spectacular-bavarois-f08f38.netlify.app/'
        },
        {
            title: 'Calculator App',
            description: 'Advanced calculator with scientific functions, modern design, and responsive layout for all devices.',
            media: 'assets/projects/calculator.mp4',
            mediaType: 'video',
            thumbnail: 'assets/projects/thumbnails/calculator.jpg',
            tags: ['JavaScript', 'HTML', 'CSS', 'Responsive'],
            category: 'Web App',
            github: 'https://github.com/skystar22033/CodeAlpha_calculator',
            live: 'https://calculatortask12.netlify.app/'
        },
        {
            title: 'Tic Tac Toe Game',
            description: 'Interactive game with AI opponent, multiple difficulty levels, and beautiful animations.',
            media: 'assets/projects/tic.mp4',
            mediaType: 'video',
            thumbnail: 'assets/projects/thumbnails/tic.jpg',
            tags: ['JavaScript', 'Game AI', 'UI/UX', 'Animation','Expo go' ,' Expo', 'React Native'],
            category: 'Game',
            //github: 'https://github.com/yourusername/tic-tac-toe',
           // live: 'https://yourwebsite.com/tic-tac-toe'
        },
        {
            title: 'Image Gallery Website',
            description: 'Beautiful image gallery with search, filter functionality, and responsive grid layout.',
            media: 'assets/projects/image-gallery.mp4',
            mediaType: 'video',
            thumbnail: 'assets/projects/thumbnails/image-gallery.jpg',
            tags: ['React', 'CSS Grid', 'HTML', 'JavaScript', 'Responsive'],
            category: 'Web App',
            github: 'https://github.com/skystar22033/CodeAlpha_image-gallery',
            live: 'https://imagegallery11.netlify.app/'
        },
          {
            title: 'Music Player Website',
            description: 'Beautiful music player  with search, filter functionality, and responsive grid layout.',
            media: 'assets/projects/music-player.mp4',
            mediaType: 'video',
            thumbnail: 'assets/projects/thumbnails/music-player.jpg',
            tags: ['React', 'CSS Grid',  'HTML','JavaScript', 'Responsive'],
            category: 'Web App',
            github: 'https://github.com/skystar22033/musicplayer',
            live: 'https://mellow-brigadeiros-2f21c9.netlify.app/'
        },
        {
            title: 'Recipe Manager Website',
            description: 'Beautiful Recipe Manager with search, filter functionality, and responsive grid layout.',
            media: 'assets/projects/recipe-manager.mp4',
            mediaType: 'video',
            thumbnail: 'assets/projects/thumbnails/recipe-manager.jpg',
            tags: ['React', 'CSS Grid', 'HTML', 'JavaScript', 'Responsive'],
            category: 'Web App',
            github: 'https://github.com/skystar22033/recipe-manager',
            //live: 'https://mellow-brigadeiros-2f21c9.netlify.app/'
        },
         {
            title: 'College Website',
            description: 'Beautiful College Website with search, filter functionality, and responsive grid layout.',
            media: 'assets/projects/colg.mp4',
            mediaType: 'video',
            thumbnail: 'assets/projects/thumbnails/colg.jpg',
            tags: ['React', 'php' ,'CSS Grid', 'JavaScript', 'Responsive'],
            category: 'Web App',
           // github: 'https://github.com/yourusername/image-gallery',
           // live: 'https://mellow-brigadeiros-2f21c9.netlify.app/'
        }

    ];

    // Education Data
    const education = [
        {
            degree: 'Bachelor of Science in Infotmation Technology',
            institution: 'University of Punjab affiliated college (FG Postgraduate College, WahCantt)',
            year: '2021 - 2025',
            description: 'Major in Computer Science with focus on Artificial Intelligence, Web Development, and Software Engineering.'
        },
        {
            degree: 'Intermediate in Computer Science (ICS)',
            institution: 'FG Postgraduate College for Women, WahCantt',
            year: '2019 - 2021',
            description: 'Computer Science with Mathematics and Statistics. Focus on programming fundamentals and algorithms.'
        }
    ];

    // Certificates Data
    const certificates = [
        {
            title: 'Frontend Development',
            issuer: 'Meta Frontend Developer Professional',
            year: '2025',
            description: 'Advanced HTML, CSS, JavaScript and React certification'
        },
        {
            title: 'Android Development',
            issuer: 'Google Developers',
            year: '2025',
            description: 'Native Android App Development with Java/Kotlin certification'
        },
    ];

   // Social Media Links
  

    // Populate Skills by Categories
    const skillsContainer = document.querySelector('.skills-categories');
    Object.entries(skills).forEach(([category, skillList]) => {
        const categoryElement = document.createElement('div');
        categoryElement.className = 'skill-category';
        categoryElement.innerHTML = `
            <div class="skill-header">
                <div class="skill-icon">
                    <i class="fas fa-code"></i>
                </div>
                <h3 class="skill-title">${category}</h3>
            </div>
            <div class="skills-list">
                ${skillList.map(skill => `
                    <div class="skill-item">
                        <div class="skill-header-row">
                            <div class="skill-name">
                                <i class="${skill.icon}"></i>
                                <span>${skill.name}</span>
                            </div>
                            <span class="skill-percentage">${skill.level}%</span>
                        </div>
                        <div class="skill-bar">
                            <div class="skill-progress" 
                                 style="width: 0%" data-level="${skill.level}"></div>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
        skillsContainer.appendChild(categoryElement);
    });

    // Updated Populate Projects with video support
    const projectsGrid = document.querySelector('.projects-grid');
    projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.className = 'project-card';
        
        let mediaElement = '';
        if (project.mediaType === 'video') {
            mediaElement = `
                <div class="project-media">
                    <video class="project-video" muted loop poster="${project.thumbnail}">
                        <source src="${project.media}" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                    <div class="play-overlay">
                        <i class="fas fa-play"></i>
                    </div>
                </div>
            `;
        } else {
            mediaElement = `
                <div class="project-image">
                    <img src="${project.media}" alt="${project.title}" onerror="this.src='${project.thumbnail}'">
                </div>
            `;
        }

        projectElement.innerHTML = `
            ${mediaElement}
            <div class="project-content">
                <div class="project-category">
                    ${project.category}
                </div>
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                </div>
                <div class="project-links">
                    ${project.github ? `<a href="${project.github}" class="project-link" target="_blank" title="View Code">
                        <i class="fab fa-github"></i>
                    </a>` : ''}
                    ${project.live ? `<a href="${project.live}" class="project-link" target="_blank" title="Live Demo">
                        <i class="fas fa-external-link-alt"></i>
                    </a>` : ''}
                </div>
            </div>
        `;
        projectsGrid.appendChild(projectElement);
    });

    // Add video play/pause functionality
    document.addEventListener('click', function(e) {
        if (e.target.closest('.project-media')) {
            const mediaContainer = e.target.closest('.project-media');
            const video = mediaContainer.querySelector('video');
            const playOverlay = mediaContainer.querySelector('.play-overlay');
            
            if (video) {
                if (video.paused) {
                    video.play();
                    playOverlay.style.opacity = '0';
                } else {
                    video.pause();
                    playOverlay.style.opacity = '1';
                }
            }
        }
    });

    // Pause videos when not in viewport
    const pauseVideosOnScroll = () => {
        document.querySelectorAll('.project-video').forEach(video => {
            const rect = video.getBoundingClientRect();
            if (rect.top > window.innerHeight || rect.bottom < 0) {
                video.pause();
            }
        });
    };

    window.addEventListener('scroll', pauseVideosOnScroll);

    // Populate Education
    const educationTimeline = document.querySelector('.education-timeline');
    education.forEach((edu, index) => {
        const eduElement = document.createElement('div');
        eduElement.className = `timeline-item ${index % 2 === 0 ? 'lg:mr-auto lg:ml-0' : 'lg:ml-auto lg:mr-0'}`;
        eduElement.innerHTML = `
            <div class="timeline-header">
                <div class="edu-icon">
                    <i class="fas fa-graduation-cap"></i>
                </div>
                <div>
                    <h3>${edu.degree}</h3>
                    <p class="institution">${edu.institution}</p>
                    <p class="year">${edu.year}</p>
                </div>
            </div>
            <p class="description">${edu.description}</p>
        `;
        educationTimeline.appendChild(eduElement);
    });

    // Populate Certificates
    const certificatesGrid = document.querySelector('.certificates-grid');
    certificates.forEach(cert => {
        const certElement = document.createElement('div');
        certElement.className = 'certificate-card';
        certElement.innerHTML = `
            <div class="cert-icon">
                <i class="fas fa-award"></i>
            </div>
            <h3>${cert.title}</h3>
            <p class="issuer">${cert.issuer}</p>
            <p class="year">${cert.year}</p>
            <p class="description">${cert.description}</p>
        `;
        certificatesGrid.appendChild(certElement);
    });

    // Initialize Social Media Links
   // Initialize Social Media Links - UPDATED VERSION
function initializeSocialLinks() {
    // Social Media Links - UPDATED WITH YOUR LINKS
    const socialLinks = {
        github: 'https://github.com/skystar22033',
        linkedin: 'https://www.linkedin.com/in/ayesha-altaf-b43100385/',
        whatsapp: 'https://wa.me/923184210723', // Added WhatsApp
        email: 'mailto:ayeshaaltaf223@gmail.com'
    };

    console.log('Initializing social links...');

    // ✅ FIXED: Hero Section Social Links
    const heroSocialLinks = document.querySelectorAll('.hero-social-links a');
    console.log('Hero social links found:', heroSocialLinks.length);
    
    heroSocialLinks.forEach((link, index) => {
        // Assign platforms based on icon order
        const platforms = ['github', 'linkedin', 'whatsapp', 'email'];
        const platform = platforms[index];
        
        if (platform && socialLinks[platform]) {
            link.href = socialLinks[platform];
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
            console.log('Set hero link:', platform, socialLinks[platform]);
        }
    });

    // ✅ FIXED: Footer Social Links
    const footerSocialLinks = document.querySelectorAll('.social-links a'); // Changed selector
    console.log('Footer social links found:', footerSocialLinks.length);
    
    footerSocialLinks.forEach((link, index) => {
        // Assign platforms based on icon order
        const platforms = ['github', 'linkedin', 'whatsapp', 'email'];
        const platform = platforms[index];
        
        if (platform && socialLinks[platform]) {
            link.href = socialLinks[platform];
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
            console.log('Set footer link:', platform, socialLinks[platform]);
        }
    });

    // Remove contact social links since they don't exist in HTML
    // const contactSocialLinks = document.querySelectorAll('.contact-social-links a');
}

// Call social links initialization
initializeSocialLinks();


    // Animate skill bars on scroll
    const animateSkillBars = () => {
        const skillBars = document.querySelectorAll('.skill-progress');
        skillBars.forEach(bar => {
            const level = bar.getAttribute('data-level');
            bar.style.width = level + '%';
        });
    };

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('skills-categories')) {
                    setTimeout(animateSkillBars, 500);
                }
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe sections for animation
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(section);
    });

   // Form submission with EmailJS
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = {
        name: this.querySelector('input[type="text"]').value,
        email: this.querySelector('input[type="email"]').value,
        subject: this.querySelector('input[placeholder="Subject"]').value || 'No Subject',
        message: this.querySelector('textarea').value
    };

    // Validation
    if (!formData.name || !formData.email || !formData.message) {
        showNotification('Please fill in all required fields', 'error');
        return;
    }

    const submitBtn = this.querySelector('.btn-send');
    const originalText = submitBtn.innerHTML;
    
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>Sending...';
    submitBtn.disabled = true;

    // Replace these with your actual IDs from EmailJS
    const SERVICE_ID = 'service_ecsbmva';  // From Email Services
    const TEMPLATE_ID = 'template_801vb1m'; // From Email Templates

    emailjs.send(SERVICE_ID, TEMPLATE_ID, formData)
        .then(() => {
            showNotification('Thank you for your message! I\'ll get back to you soon.', 'success');
            this.reset();
        })
       .catch((error) => {
    console.error('EmailJS Error Details:', error);
    console.log('Error text:', error.text);
    showNotification('Failed to send: ' + error.text, 'error');
})
        .finally(() => {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        });
});

    // CV Download functionality
    const downloadCVBtn = document.getElementById('downloadCV');
    downloadCVBtn.addEventListener('click', function() {
        const cvPath = 'assets/Ayesha_C_V.pdf';
        
        // Check if file exists
        fetch(cvPath)
            .then(response => {
                if (response.ok) {
                    // File exists - proceed with download
                    const a = document.createElement('a');
                    a.href = cvPath;
                    a.download = 'Ayesha_CV.pdf';
                    document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a);
                    showNotification('CV downloaded successfully!', 'success');
                } else {
                    showNotification('CV file not found. Please check the file path.', 'error');
                }
            })
            .catch(error => {
                showNotification('Error downloading CV: ' + error.message, 'error');
            });
    });

    // Notification function
    function showNotification(message, type) {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerHTML = `
            <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-triangle'}"></i>
            <span>${message}</span>
        `;
        document.body.appendChild(notification);

        setTimeout(() => {
            notification.classList.add('show');
        }, 100);

        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 4000);
    }

    // Scroll to section function
    window.scrollToSection = function(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    // Scroll to top functionality
    const scrollToTopBtn = document.getElementById('scrollToTop');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            scrollToTopBtn.classList.add('show');
        } else {
            scrollToTopBtn.classList.remove('show');
        }
    });

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Add particle effect to hero section
    createParticles();
});

// Particle effect for background
function createParticles() {
    const particlesContainer = document.querySelector('.animated-bg');
    if (!particlesContainer) return;
    
    const particleCount = 25;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random properties
        const size = Math.random() * 4 + 1;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const delay = Math.random() * 20;
        const duration = Math.random() * 10 + 10;
        const colors = ['#10b981', '#f59e0b', '#ec4899', '#6366f1', '#06b6d4'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        // Set styles
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;
        particle.style.background = color;
        particle.style.opacity = '0.3';
        particle.style.setProperty('--tx', `${Math.random() * 100 - 50}px`);
        particle.style.setProperty('--ty', `${Math.random() * 100 - 50}px`);
        particle.style.animation = `float-particles ${duration}s linear ${delay}s infinite`;
        
        particlesContainer.appendChild(particle);
    }
}