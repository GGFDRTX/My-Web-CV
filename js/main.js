// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const icon = darkModeToggle.querySelector('i');
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
});

// Back to Top Button
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
});

backToTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Scroll Progress Indicator
const scrollProgress = document.createElement('div');
scrollProgress.className = 'scroll-progress';
document.body.appendChild(scrollProgress);

window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (window.scrollY / windowHeight) * 100;
    scrollProgress.style.setProperty('--scroll', `${scrolled}%`);
});

// Section Visibility Animation
const sections = document.querySelectorAll('section');
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

sections.forEach(section => {
    observer.observe(section);
});

// Project Tech Tags Animation
const projectTechTags = document.querySelectorAll('.project-tech span');
projectTechTags.forEach((tag, index) => {
    tag.style.setProperty('--i', index);
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
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

// Portfolio Filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');

        const filterValue = button.getAttribute('data-filter');

        portfolioItems.forEach(item => {
            if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// Testimonials Slider
const testimonialsSlider = document.querySelector('.testimonials-slider');
const testimonialCards = document.querySelectorAll('.testimonial-card');
const prevButton = document.querySelector('.prev-testimonial');
const nextButton = document.querySelector('.next-testimonial');
let currentSlide = 0;

function updateSlider() {
    testimonialsSlider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

if (prevButton && nextButton) {
    prevButton.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + testimonialCards.length) % testimonialCards.length;
        updateSlider();
    });

    nextButton.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % testimonialCards.length;
        updateSlider();
    });

    // Auto-slide testimonials
    setInterval(() => {
        currentSlide = (currentSlide + 1) % testimonialCards.length;
        updateSlider();
    }, 5000);
}

// Language Switcher
const languageButtons = document.querySelectorAll('.language-btn');
const translations = {
    en: {
        about: 'About',
        certifications: 'Certifications',
        skills: 'Skills',
        experience: 'Experience',
        projects: 'Projects',
        contact: 'Contact',
        getInTouch: 'Get in Touch',
        viewCertifications: 'View Certifications',
        aboutMe: 'About Me',
        professionalCertifications: 'Professional Certifications',
        additionalCertifications: 'Additional Certifications',
        technicalSkills: 'Technical Skills',
        education: 'Education',
        professionalExperience: 'Professional Experience',
        featuredProjects: 'Featured Projects',
        featuredIn: 'Featured In',
        manifestoForChange: 'Manifesto for Change',
        downloadResume: 'Download Resume',
        sendMessage: 'Send Message',
        name: 'Name',
        email: 'Email',
        message: 'Message',
        copyright: '© 2024 Fady Bottros Samir. All rights reserved.'
    },
    it: {
        about: 'Chi Sono',
        certifications: 'Certificazioni',
        skills: 'Competenze',
        experience: 'Esperienza',
        projects: 'Progetti',
        contact: 'Contatti',
        getInTouch: 'Contattami',
        viewCertifications: 'Vedi Certificazioni',
        aboutMe: 'Chi Sono',
        professionalCertifications: 'Certificazioni Professionali',
        additionalCertifications: 'Certificazioni Aggiuntive',
        technicalSkills: 'Competenze Tecniche',
        education: 'Formazione',
        professionalExperience: 'Esperienza Professionale',
        featuredProjects: 'Progetti in Evidenza',
        featuredIn: 'Presentato In',
        manifestoForChange: 'Manifesto per il Cambiamento',
        downloadResume: 'Scarica CV',
        sendMessage: 'Invia Messaggio',
        name: 'Nome',
        email: 'Email',
        message: 'Messaggio',
        copyright: '© 2024 Fady Bottros Samir. Tutti i diritti riservati.'
    },
    fr: {
        about: 'À Propos',
        certifications: 'Certifications',
        skills: 'Compétences',
        experience: 'Expérience',
        projects: 'Projets',
        contact: 'Contact',
        getInTouch: 'Me Contacter',
        viewCertifications: 'Voir les Certifications',
        aboutMe: 'À Propos de Moi',
        professionalCertifications: 'Certifications Professionnelles',
        additionalCertifications: 'Certifications Supplémentaires',
        technicalSkills: 'Compétences Techniques',
        education: 'Formation',
        professionalExperience: 'Expérience Professionnelle',
        featuredProjects: 'Projets en Vedette',
        featuredIn: 'Présenté Dans',
        manifestoForChange: 'Manifeste pour le Changement',
        downloadResume: 'Télécharger CV',
        sendMessage: 'Envoyer Message',
        name: 'Nom',
        email: 'Email',
        message: 'Message',
        copyright: '© 2024 Fady Bottros Samir. Tous droits réservés.'
    },
    ar: {
        about: 'نبذة عني',
        certifications: 'الشهادات',
        skills: 'المهارات',
        experience: 'الخبرة',
        projects: 'المشاريع',
        contact: 'اتصل بي',
        getInTouch: 'تواصل معي',
        viewCertifications: 'عرض الشهادات',
        aboutMe: 'نبذة عني',
        professionalCertifications: 'الشهادات المهنية',
        additionalCertifications: 'الشهادات الإضافية',
        technicalSkills: 'المهارات التقنية',
        education: 'التعليم',
        professionalExperience: 'الخبرة المهنية',
        featuredProjects: 'المشاريع المميزة',
        featuredIn: 'ظهر في',
        manifestoForChange: 'بيان التغيير',
        downloadResume: 'تحميل السيرة الذاتية',
        sendMessage: 'إرسال رسالة',
        name: 'الاسم',
        email: 'البريد الإلكتروني',
        message: 'الرسالة',
        copyright: '© 2024 فادي بطرس سمير. جميع الحقوق محفوظة.'
    }
};

function updateLanguage(lang) {
    // Update navigation links
    document.querySelector('a[href="#about"]').textContent = translations[lang].about;
    document.querySelector('a[href="#certifications"]').textContent = translations[lang].certifications;
    document.querySelector('a[href="#skills"]').textContent = translations[lang].skills;
    document.querySelector('a[href="#experience"]').textContent = translations[lang].experience;
    document.querySelector('a[href="#projects"]').textContent = translations[lang].projects;
    document.querySelector('a[href="#contact"]').textContent = translations[lang].contact;

    // Update hero section
    document.querySelector('.hero-content .btn-primary').textContent = translations[lang].getInTouch;
    document.querySelector('.hero-content .btn-secondary').textContent = translations[lang].viewCertifications;

    // Update section headings
    document.querySelector('#about h2').textContent = translations[lang].aboutMe;
    document.querySelector('#certifications h2').textContent = translations[lang].professionalCertifications;
    document.querySelector('#additional-certifications h2').textContent = translations[lang].additionalCertifications;
    document.querySelector('#skills h2').textContent = translations[lang].technicalSkills;
    document.querySelector('#education h2').textContent = translations[lang].education;
    document.querySelector('#experience h2').textContent = translations[lang].professionalExperience;
    document.querySelector('#projects h2').textContent = translations[lang].featuredProjects;
    document.querySelector('#media h2').textContent = translations[lang].featuredIn;
    document.querySelector('#manifesto h2').textContent = translations[lang].manifestoForChange;

    // Update contact form
    document.querySelector('#contact h2').textContent = translations[lang].getInTouch;
    document.querySelector('label[for="name"]').textContent = translations[lang].name;
    document.querySelector('label[for="email"]').textContent = translations[lang].email;
    document.querySelector('label[for="message"]').textContent = translations[lang].message;
    document.querySelector('.submit-btn').textContent = translations[lang].sendMessage;

    // Update resume download button
    document.querySelector('.resume-btn').innerHTML = `<i class="fas fa-download"></i> ${translations[lang].downloadResume}`;

    // Update footer
    document.querySelector('footer p').textContent = translations[lang].copyright;

    // Update RTL for Arabic
    if (lang === 'ar') {
        document.body.dir = 'rtl';
        document.body.classList.add('rtl');
    } else {
        document.body.dir = 'ltr';
        document.body.classList.remove('rtl');
    }
}

languageButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        languageButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        // Update language
        const lang = button.getAttribute('data-lang');
        updateLanguage(lang);
    });
}); 