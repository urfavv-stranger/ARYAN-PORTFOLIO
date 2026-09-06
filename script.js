// Showcase Modal Data - Add or customize your projects here!
const showcaseData = {
  'project-1': {
    title: 'IVE SEREIN',
    subtitle: 'LUXURY FRAGRANCE D2C',
    image: 'project1.jpg',
    desc: 'An end-to-end luxury fragrance venture built from scratch, covering product formulation, packaging design, supply chain logistics, and direct-to-consumer launch planning.',
    sections: [
      {
        title: 'Key Objectives & Challenge',
        content: 'Carving out a distinct identity in the premium fragrance market by formulating high-concentration Extrait de Parfum while managing tight unit economics, custom visual packaging, and reliable local vendor pipelines.'
      },
      {
        title: 'Execution & Strategy',
        content: 'Engineered complete scent profiles and product lines, designed bespoke packaging layouts, onboarded glass and component manufacturers, and modeled financial projections alongside targeted digital marketing assets for commercial scaling.'
      },
      {
        title: 'Results & Impact',
        content: 'Successfully established a market-ready luxury fragrance brand with high-concentration Extrait de Parfum formulations, built a resilient direct-to-manufacturer supply chain that minimized unit production costs, and developed investor-grade unit economics and scaling roadmaps ready for direct-to-consumer expansion.'
      }
    ]
  },
  'project-2': {
    title: 'MAYSAN LABS',
    subtitle: 'AI & AUTOMATION TECH',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=85',
    desc: 'An operations and growth enablement project focused on scaling strategic initiatives, optimizing internal workflows, and accelerating go-to-market execution.',
    sections: [
      {
        title: 'Key Objectives & Challenge',
        content: 'Bridging the gap between early-stage strategy and daily execution by streamlining cross-functional communication, identifying operational bottlenecks, and structuring high-conviction market research under fast turnaround times.'
      },
      {
        title: 'Execution & Strategy',
        content: 'Partnered directly with founders to lead competitive intelligence and roadmap planning, aligned product and marketing pipelines to remove release friction, and automated repetitive operational workflows to raise overall team velocity.'
      },
      {
        title: 'Results & Impact',
        content: 'Accelerated product release cycles by aligning cross-functional teams, eliminated recurring operational overhead through automated workflows, and delivered strategic competitive research that directly shaped executive decision-making and pipeline development.'
      }
    ]
  },
  'project-3': {
    title: 'SEA OF JOURNEY',
    subtitle: '3D GAME DEVELOPMENT',
    video: 'sea-of-journey.mp4',
    fallbackVideo: 'https://assets.mixkit.co/videos/preview/mixkit-top-aerial-shot-of-seashore-with-rocks-and-waves-44331-large.mp4',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=85',
    desc: 'A 3D pirate-themed puzzle-battle title engineered from concept to playable mechanics, integrating custom gameplay scripts, environmental systems, and modular assets.',
    sections: [
      {
        title: 'Key Objectives & Challenge',
        content: 'Balancing complex gameplay logic combining strategic puzzle mechanics with dynamic naval combat while maintaining consistent 3D rendering performance, intuitive UI, and smooth physics interactions across core game loops.'
      },
      {
        title: 'Execution & Strategy',
        content: 'Engineered core gameplay systems and combat logic using C#, modeled and textured thematic maritime assets, and implemented custom UI/UX flows and state machines inside the game engine to create an immersive, responsive player experience.'
      },
      {
        title: 'Results & Impact',
        content: 'Successfully built a functional, end-to-end playable prototype with stable frame rates, validated intuitive puzzle-battle mechanics through iterative testing, and established an efficient, modular 3D asset pipeline for future content expansions.'
      }
    ]
  }
};

// Modal Elements
const showcaseModal = document.getElementById('showcase-modal');
const showcaseContent = document.getElementById('showcase-content');

function openShowcase(id) {
  const data = showcaseData[id];
  if (!data) return;

  let bannerHtml = '';
  if (data.video) {
    bannerHtml = `
      <div class="modal-banner-wrap">
        <video autoplay loop muted playsinline controls poster="${data.image || ''}" class="modal-banner-img">
          <source src="${data.video}" type="video/mp4">
          ${data.fallbackVideo ? `<source src="${data.fallbackVideo}" type="video/mp4">` : ''}
        </video>
        <div class="modal-banner-overlay" style="pointer-events:none;"></div>
      </div>
    `;
  } else if (data.image) {
    bannerHtml = `
      <div class="modal-banner-wrap">
        <img src="${data.image}" alt="${data.title}" class="modal-banner-img">
        <div class="modal-banner-overlay"></div>
      </div>
    `;
  }

  let subtitleHtml = data.subtitle ? `<div class="showcase-subtitle">${data.subtitle}</div>` : '';

  let sectionsHtml = '';
  if (data.sections) {
    sectionsHtml = data.sections.map(sec => `
      <div class="modal-section-card">
        <h3>${sec.title}</h3>
        <p>${sec.content}</p>
      </div>
    `).join('');
  }

  showcaseContent.innerHTML = `
    ${bannerHtml}
    ${subtitleHtml}
    <h2 class="showcase-title">${data.title}</h2>
    <p class="showcase-desc">${data.desc}</p>
    ${sectionsHtml}
  `;

  showcaseModal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeShowcase() {
  showcaseModal.classList.remove('active');
  document.body.style.overflow = '';
}

// Close modal on Escape key press
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && showcaseModal.classList.contains('active')) {
    closeShowcase();
  }
});

// Close modal on backdrop click
showcaseModal.addEventListener('click', (e) => {
  if (e.target === showcaseModal) {
    closeShowcase();
  }
});

// Cinematic Preloader Initialization
function initPreloader() {
  const preloader = document.getElementById('preloader');
  const counter = document.getElementById('preloader-counter');
  const bar = document.getElementById('preloader-bar');
  const status = document.getElementById('preloader-status');

  if (!preloader || !counter || !bar) return;

  let progress = 0;
  const duration = 1500; // ms
  const startTime = performance.now();
  let animationDone = false;

  function updatePreloader(time) {
    if (animationDone) return;
    const elapsed = time - startTime;
    progress = Math.min(Math.floor((elapsed / duration) * 100), 100);

    const formatted = progress < 10 ? '0' + progress : progress;
    counter.textContent = `${formatted}%`;
    bar.style.width = `${progress}%`;

    if (progress >= 30 && progress < 70) {
      if (status) status.textContent = 'LOADING VENTURES & CASE STUDIES...';
    } else if (progress >= 70 && progress < 99) {
      if (status) status.textContent = 'CALIBRATING INTERFACES...';
    } else if (progress >= 100) {
      if (status) status.textContent = 'WELCOME';
    }

    if (progress < 100) {
      requestAnimationFrame(updatePreloader);
    } else {
      finishPreloader();
    }
  }

  function finishPreloader() {
    if (animationDone) return;
    animationDone = true;
    counter.textContent = '100%';
    bar.style.width = '100%';
    setTimeout(() => {
      preloader.classList.add('loaded');
      const heroLeft = document.querySelector('.hero-left');
      if (heroLeft) heroLeft.classList.add('visible');
    }, 300);
  }

  requestAnimationFrame(updatePreloader);

  // Safety fallback after 2.5s
  setTimeout(finishPreloader, 2500);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initPreloader);
} else {
  initPreloader();
}

// Custom Cursor Implementation
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursor-ring');
let mx = -100, my = -100, rx = -100, ry = -100;
let cursorActive = false;

// Check for touch devices
const isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);

if (!isTouchDevice && cursor && ring) {
  document.addEventListener('mousemove', (e) => {
    mx = e.clientX;
    my = e.clientY;
    if (!cursorActive) {
      cursorActive = true;
      rx = mx;
      ry = my;
      cursor.style.opacity = '1';
      ring.style.opacity = '1';
    }
    cursor.style.left = mx + 'px';
    cursor.style.top = my + 'px';
  });

  function animRing() {
    rx += (mx - rx) * 0.16;
    ry += (my - ry) * 0.16;
    ring.style.left = rx + 'px';
    ring.style.top = ry + 'px';
    requestAnimationFrame(animRing);
  }
  requestAnimationFrame(animRing);

  // Cursor Click Ripple Effect
  document.addEventListener('click', (e) => {
    const ripple = document.createElement('div');
    ripple.className = 'cursor-click-ripple';
    ripple.style.left = e.clientX + 'px';
    ripple.style.top = e.clientY + 'px';
    document.body.appendChild(ripple);
    setTimeout(() => {
      ripple.remove();
    }, 600);
  });

  // Dynamic Hover Expansion for Interactive Elements
  const interactiveSelector = 'a, button, input, textarea, .skill-card, .work-card, .experience-card, .tag, .showcase-close, .hero-name, .section-heading, .contact-heading, .nav-logo, .social-btn, .stat-cell, .floating-badge';

  document.body.addEventListener('mouseover', (e) => {
    if (e.target.closest(interactiveSelector)) {
      document.body.classList.add('hovering');
    }
  });

  document.body.addEventListener('mouseout', (e) => {
    if (e.target.closest(interactiveSelector)) {
      document.body.classList.remove('hovering');
    }
  });
} else {
  // Hide custom cursor on mobile touch screens
  if (cursor) cursor.style.display = 'none';
  if (ring) ring.style.display = 'none';
  document.documentElement.style.cursor = 'auto';
  document.body.style.cursor = 'auto';
}

// Top Scroll Progress Bar & Dynamic Navbar Shadow
const progressBar = document.getElementById('scroll-progress');
const nav = document.querySelector('nav');
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  // Update progress bar width
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  if (progressBar) {
    progressBar.style.width = scrollPercent + '%';
  }

  // Dynamic navbar shadow
  if (nav) {
    if (scrollTop > 20) {
      nav.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.06)';
    } else {
      nav.style.boxShadow = 'none';
    }
  }

  // Active navigation link tracking
  let current = '';
  sections.forEach((s) => {
    if (scrollTop >= s.offsetTop - 120) {
      current = s.id;
    }
  });

  navLinks.forEach((a) => {
    if (a.getAttribute('href') === '#' + current) {
      a.classList.add('active');
    } else {
      a.classList.remove('active');
    }
  });
});

// Fade Up Animations on Scroll
const fadeEls = document.querySelectorAll('.fade-up');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

fadeEls.forEach((el) => observer.observe(el));

// Animated Number Counters for Stats Section
const statNumbers = document.querySelectorAll('.stat-number');
let statsCounted = false;

function animateStatNumbers() {
  statNumbers.forEach((el) => {
    const target = parseInt(el.getAttribute('data-target'), 10);
    const prefix = el.getAttribute('data-prefix') || '';
    const suffix = el.getAttribute('data-suffix') || '';
    const isINR = el.getAttribute('data-format') === 'inr';

    if (isNaN(target)) return;

    const duration = 1800;
    const startTime = performance.now();

    function updateCounter(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(easeOut * target);

      let formattedVal = current.toString();
      if (isINR) {
        formattedVal = current.toLocaleString('en-IN');
      } else if (target >= 1000) {
        formattedVal = current.toLocaleString();
      }

      el.textContent = `${prefix}${formattedVal}${suffix}`;

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        let finalVal = target.toString();
        if (isINR) finalVal = target.toLocaleString('en-IN');
        el.textContent = `${prefix}${finalVal}${suffix}`;
      }
    }

    requestAnimationFrame(updateCounter);
  });
}

const statsSection = document.getElementById('stats');
if (statsSection) {
  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !statsCounted) {
        statsCounted = true;
        animateStatNumbers();
      }
    });
  }, { threshold: 0.25 });
  statsObserver.observe(statsSection);
}

// 3D Perspective Card Tilt & Interactive Glare Reflection
const tiltCards = document.querySelectorAll('.experience-card, .work-card, .skill-card, .stat-cell');

tiltCards.forEach(card => {
  let glare = card.querySelector('.card-glare');
  if (!glare) {
    glare = document.createElement('div');
    glare.className = 'card-glare';
    card.appendChild(glare);
  }

  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;

    glare.style.opacity = '1';
    glare.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(0, 0, 0, 0.04) 0%, transparent 65%)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
    glare.style.opacity = '0';
  });
});

// Magnetic Buttons Interaction
const magneticElements = document.querySelectorAll('.btn-primary, .btn-secondary, .nav-cta, .social-btn');
magneticElements.forEach(btn => {
  btn.addEventListener('mousemove', (e) => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
  });
  btn.addEventListener('mouseleave', () => {
    btn.style.transform = '';
  });
});

// Interactive Contact Form Handling with Web3Forms
const contactForm = document.getElementById('contact-form');
const submitBtn = document.getElementById('submit-btn') || document.querySelector('.form-submit');

if (contactForm && submitBtn) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    submitBtn.textContent = 'TRANSMITTING...';
    submitBtn.style.opacity = '0.7';

    const formData = new FormData(contactForm);

    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    })
      .then(async (response) => {
        const json = await response.json();
        if (response.status === 200) {
          submitBtn.textContent = 'MESSAGE SENT! ✓';
          submitBtn.style.background = 'linear-gradient(135deg, #10B981, #059669)';
          submitBtn.style.color = '#FFFFFF';
          contactForm.reset();
        } else {
          submitBtn.textContent = json.message || 'Error. Try again.';
          submitBtn.style.background = '#EF4444';
          submitBtn.style.color = '#FFFFFF';
        }
      })
      .catch((error) => {
        submitBtn.textContent = 'ERROR SENDING MESSAGE.';
        submitBtn.style.background = '#EF4444';
        submitBtn.style.color = '#FFFFFF';
      })
      .finally(() => {
        setTimeout(() => {
          submitBtn.textContent = 'TRANSMIT MESSAGE →';
          submitBtn.style.background = '';
          submitBtn.style.color = '';
          submitBtn.style.opacity = '1';
        }, 4000);
      });
  });
}
