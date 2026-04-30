document.addEventListener('DOMContentLoaded', () => {
    // 1. Loader Logic
    const loader = document.getElementById('loader-wrapper');
    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.display = 'none';
                // Trigger initial animations after loader is gone
                initHeroAnimations();
            }, 500);
        }, 1000);
    });

    // 2. Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 3. GSAP Animations
    gsap.registerPlugin(ScrollTrigger);

    function initHeroAnimations() {
        const tl = gsap.timeline();
        
        tl.from(".hero-content h1", {
            duration: 1.2,
            y: 50,
            opacity: 0,
            ease: "power4.out"
        })
        .from(".hero-subtitle", {
            duration: 1,
            y: 30,
            opacity: 0,
            ease: "power3.out"
        }, "-=0.8")
        .from(".hero-btns", {
            duration: 1,
            y: 20,
            opacity: 0,
            ease: "power3.out"
        }, "-=0.6")
        .from(".search-form-card", {
            duration: 1.5,
            y: 100,
            opacity: 0,
            ease: "elastic.out(1, 0.75)"
        }, "-=1");

        // Floating Airplane Animation
        gsap.to(".floating-airplane", {
            duration: 4,
            y: -20,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });

        gsap.to(".floating-airplane", {
            duration: 6,
            x: 10,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
    }

    // 4. Mouse Hover Spotlight Effect
    document.addEventListener('mousemove', (e) => {
        const orbs = document.querySelectorAll('.glow-orb');
        orbs.forEach((orb, index) => {
            const speed = 0.05 + (index * 0.02);
            const x = (window.innerWidth - e.pageX * speed) / 100;
            const y = (window.innerHeight - e.pageY * speed) / 100;
            orb.style.transform = `translateX(${x}px) translateY(${y}px)`;
        });
    });

    // 5. AOS Initialization
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });

    // 6. Swiper JS Initialization
    const destinationSwiper = new Swiper('.destination-swiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1400: { slidesPerView: 4 }
        }
    });

    const testimonialSwiper = new Swiper('.testimonial-swiper', {
        loop: true,
        autoplay: {
            delay: 5000,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        }
    });

    // 7. Counter Animation
    const counters = document.querySelectorAll('.stat-number');
    counters.forEach(counter => {
        ScrollTrigger.create({
            trigger: counter,
            onEnter: () => {
                const target = +counter.getAttribute('data-target');
                gsap.to(counter, {
                    innerText: target,
                    duration: 2,
                    snap: { innerText: 1 },
                    ease: "power1.out"
                });
            }
        });
    });

    // 8. Particle System (Simple)
    const createParticles = () => {
        const container = document.querySelector('.animated-bg');
        for (let i = 0; i < 50; i++) {
            const p = document.createElement('div');
            p.className = 'particle';
            const size = Math.random() * 3 + 1;
            p.style.width = `${size}px`;
            p.style.height = `${size}px`;
            p.style.left = `${Math.random() * 100}%`;
            p.style.top = `${Math.random() * 100}%`;
            p.style.position = 'absolute';
            p.style.background = 'rgba(255, 255, 255, 0.2)';
            p.style.borderRadius = '50%';
            p.style.pointerEvents = 'none';
            container.appendChild(p);

            gsap.to(p, {
                y: -(Math.random() * 100 + 50),
                x: (Math.random() - 0.5) * 50,
                opacity: 0,
                duration: Math.random() * 3 + 2,
                repeat: -1,
                ease: "none",
                delay: Math.random() * 5
            });
        }
    };
    createParticles();
});
