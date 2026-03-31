// ========================================
// KENNEDY & JOY CECILIA — GSAP Motion Engine
// ========================================

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// ========================================
// CUSTOM CURSOR
// ========================================
const cursor = document.getElementById('cursor');
const cursorRing = document.getElementById('cursor-ring');

if (cursor && cursorRing) {
  document.addEventListener('mousemove', (e) => {
    gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.1, ease: 'power2.out' });
    gsap.to(cursorRing, { x: e.clientX, y: e.clientY, duration: 0.3, ease: 'power2.out' });
  });

  // Magnetic hover effect
  const hoverElements = document.querySelectorAll('a, button, .bento-card, .memory-card, .music-btn, .photo-upload, .quick-link, .page-nav__link');
  hoverElements.forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('hovering'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('hovering'));
  });
}

// ========================================
// STARS BACKGROUND
// ========================================
const starsContainer = document.getElementById('stars');

if (starsContainer) {
  const starCount = 150;
  
  for (let i = 0; i < starCount; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    
    const size = Math.random() * 2.5 + 0.5;
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const opacity = Math.random() * 0.7 + 0.3;
    
    star.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      left: ${x}%;
      top: ${y}%;
      background: rgba(255, 255, 255, ${opacity});
    `;
    
    starsContainer.appendChild(star);
    
    // Twinkle animation with GSAP
    gsap.to(star, {
      opacity: Math.random() * 0.5 + 0.2,
      scale: Math.random() * 0.5 + 0.8,
      duration: Math.random() * 3 + 2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      delay: Math.random() * 2
    });
  }
}

// ========================================
// MOBILE NAVIGATION TOGGLE
// ========================================
const navToggle = document.querySelector('.nav__toggle');
const navLinks = document.querySelector('.nav__links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    navToggle.setAttribute('aria-expanded', 
      navLinks.classList.contains('active') ? 'true' : 'false'
    );
  });

  // Close mobile nav on link click
  document.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
    });
  });
}

// ========================================
// NAV SCROLL EFFECT
// ========================================
let lastScroll = 0;
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.nav');
  const currentScroll = window.scrollY;
  
  if (nav) {
    if (currentScroll > 100) {
      nav.style.background = 'rgba(4, 1, 14, 0.95)';
      nav.style.padding = '0.8rem 3rem';
    } else {
      nav.style.background = 'rgba(4, 1, 14, 0.8)';
      nav.style.padding = '1.2rem 3rem';
    }
  }
  
  lastScroll = currentScroll;
}, { passive: true });

// ========================================
// PAGE: HOME ANIMATIONS
// ========================================
const hero = document.querySelector('.hero');

if (hero) {
  // Hero entrance animation
  const tlHero = gsap.timeline({ defaults: { ease: 'power3.out' } });
  
  tlHero
    .to('.hero__prelude', { opacity: 1, y: 0, duration: 1, delay: 0.5 })
    .to('.hero__title--kennedy', { opacity: 1, y: 0, duration: 1 }, '-=0.6')
    .to('.hero__title--joy', { opacity: 1, y: 0, duration: 1 }, '-=0.8')
    .to('.hero__amp', { opacity: 1, duration: 0.5 }, '-=0.5')
    .to('.hero__tagline', { opacity: 1, y: 0, duration: 1 }, '-=0.6')
    .to('.hero__cta', { opacity: 1, y: 0, duration: 1 }, '-=0.8')
    .from('.hero__img--left', { x: -100, scale: 1.4, duration: 1.5, ease: 'power2.out' }, '-=1')
    .from('.hero__img--right', { x: 100, scale: 1.4, duration: 1.5, ease: 'power2.out' }, '-=1.3');
  
  // Parallax effect on hero images
  gsap.to('.hero__img--left', {
    yPercent: 20,
    ease: 'none',
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: 'bottom top',
      scrub: true
    }
  });
  
  gsap.to('.hero__img--right', {
    yPercent: 20,
    ease: 'none',
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: 'bottom top',
      scrub: true
    }
  });
  
  // Quick links stagger reveal
  gsap.from('.quick-link', {
    opacity: 0,
    y: 40,
    duration: 0.8,
    stagger: 0.15,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.quick-links',
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    }
  });
}

// ========================================
// BACKGROUND TEXT PARALLAX
// ========================================
const bgTextKennedy = document.querySelector('.bg-text__name--kennedy');
const bgTextJoy = document.querySelector('.bg-text__name--joy');

if (bgTextKennedy && bgTextJoy) {
  gsap.to(bgTextKennedy, {
    xPercent: -5,
    ease: 'none',
    scrollTrigger: {
      trigger: 'body',
      start: 'top top',
      end: 'bottom bottom',
      scrub: 0.5
    }
  });
  
  gsap.to(bgTextJoy, {
    xPercent: 5,
    ease: 'none',
    scrollTrigger: {
      trigger: 'body',
      start: 'top top',
      end: 'bottom bottom',
      scrub: 0.5
    }
  });
}

// ========================================
// PAGE: ABOUT (Timeline)
// ========================================
const timelineItems = document.querySelectorAll('.timeline__item');

timelineItems.forEach((item, i) => {
  gsap.to(item, {
    opacity: 1,
    x: 0,
    duration: 0.8,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: item,
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    },
    delay: i * 0.2
  });
});

// Quote section reveal
const quoteSection = document.querySelector('.quote-section');
if (quoteSection) {
  gsap.from(quoteSection, {
    opacity: 0,
    y: 40,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: quoteSection,
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    }
  });
}

// ========================================
// PAGE: PROFILES (Bento Grid)
// ========================================
const bentoCards = document.querySelectorAll('.bento-card');

bentoCards.forEach((card, i) => {
  gsap.from(card, {
    opacity: 0,
    y: 50,
    scale: 0.95,
    duration: 0.8,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: card,
      start: 'top 85%',
      toggleActions: 'play none none reverse'
    },
    delay: i * 0.1
  });
});

// Scroll skew effect on bento images
bentoCards.forEach(card => {
  const img = card.querySelector('.bento-card__image img');
  if (img) {
    ScrollTrigger.create({
      trigger: card,
      start: 'top bottom',
      end: 'bottom top',
      onUpdate: (self) => {
        const skew = self.getVelocity() / -300;
        gsap.to(img, { skewX: skew, duration: 0.1, ease: 'power1.out' });
      }
    });
  }
});

// ========================================
// PHOTO UPLOAD FUNCTIONALITY
// ========================================
document.querySelectorAll('input[type="file"]').forEach(input => {
  input.addEventListener('change', function() {
    if (!this.files[0]) return;
    
    const reader = new FileReader();
    reader.onload = (e) => {
      const targetId = this.dataset.target || this.id.replace('upload', 'photo');
      const img = document.getElementById(targetId);
      
      if (img) {
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.4s ease';
        
        setTimeout(() => {
          img.src = e.target.result;
          img.style.opacity = '1';
        }, 200);
      }
    };
    
    reader.readAsDataURL(this.files[0]);
  });
});

// ========================================
// PAGE: MEMORIES (Horizontal Scroll)
// ========================================
const horizontalSection = document.getElementById('horizontalScroll');
const horizontalInner = document.querySelector('.horizontal-scroll__inner');

if (horizontalSection && horizontalInner) {
  gsap.to(horizontalInner, {
    x: () => -(horizontalInner.scrollWidth - window.innerWidth + 100),
    ease: 'none',
    scrollTrigger: {
      trigger: horizontalSection,
      start: 'top top',
      end: () => '+=' + horizontalInner.scrollWidth,
      pin: true,
      scrub: 1,
      invalidateOnRefresh: true
    }
  });
}

// Memory cards stagger reveal
const memoryCards = document.querySelectorAll('.memory-card');
memoryCards.forEach((card, i) => {
  gsap.from(card, {
    opacity: 0,
    scale: 0.9,
    duration: 0.6,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: card,
      start: 'top 90%',
      toggleActions: 'play none none reverse'
    },
    delay: i * 0.1
  });
});

// ========================================
// PAGE: MUSIC (Player + Playlist)
// ========================================
const vinyl = document.getElementById('vinyl');
const musicToggle = document.getElementById('musicToggle');
const currentSong = document.getElementById('currentSong');
const currentArtist = document.getElementById('currentArtist');
const playlistInner = document.getElementById('playlistInner');
const btnPrev = document.getElementById('btnPrev');
const btnNext = document.getElementById('btnNext');

// Playlist Data
const playlistData = [
  { title: 'Perfect', artist: 'Ed Sheeran', duration: '4:23', emoji: '🌹', videoId: '2Vv-BfVoq4g' },
  { title: 'All of Me', artist: 'John Legend', duration: '4:29', emoji: '💛', videoId: '450p7goxZqg' },
  { title: 'A Thousand Years', artist: 'Christina Perri', duration: '4:45', emoji: '🕊️', videoId: 'rtOvBOTyX00' },
  { title: "Can't Help Falling in Love", artist: 'Elvis Presley', duration: '3:00', emoji: '✨', videoId: 'vGJTaP6anOU' },
  { title: 'Make You Feel My Love', artist: 'Adele', duration: '3:32', emoji: '🌙', videoId: '0put0_a--Ng' },
  { title: 'Thinking Out Loud', artist: 'Ed Sheeran', duration: '4:41', emoji: '🍂', videoId: 'lp-EO5I60KA' },
  { title: 'At Last', artist: 'Etta James', duration: '3:02', emoji: '🌅', videoId: 'S-cPpFh8K40' },
  { title: 'Endless Love', artist: 'Diana Ross & Lionel Richie', duration: '4:27', emoji: '♾️', videoId: 'h9ZGKALMMuc' },
];

let currentTrackIndex = 0;
let musicPlaying = false;
let ytPlayer;

// Build Playlist
if (playlistInner) {
  playlistData.forEach((track, i) => {
    const item = document.createElement('div');
    item.className = 'playlist-item' + (i === 0 ? ' is-active' : '');
    item.dataset.index = i;
    item.innerHTML = `
      <span class="playlist-item__emoji">${track.emoji}</span>
      <div class="playlist-item__info">
        <span class="playlist-item__title">${track.title}</span>
        <span class="playlist-item__artist">${track.artist}</span>
      </div>
      <span class="playlist-item__duration">${track.duration}</span>
    `;
    
    item.addEventListener('click', () => {
      loadTrack(i);
      playMusic();
    });
    
    playlistInner.appendChild(item);
  });
}

// Load YouTube API
function loadYouTubeAPI() {
  if (window.YT) {
    initYouTubePlayer();
  } else {
    const script = document.createElement('script');
    script.src = 'https://www.youtube.com/iframe_api';
    script.onload = initYouTubePlayer;
    document.head.appendChild(script);
  }
}

function initYouTubePlayer() {
  ytPlayer = new YT.Player('yt-player', {
    videoId: playlistData[0].videoId,
    playerVars: {
      autoplay: 0,
      mute: 0,
      loop: 0,
      controls: 0,
      showinfo: 0,
      rel: 0,
      modestbranding: 1,
      playsinline: 1
    },
    events: {
      onReady: () => console.log('YouTube player ready'),
      onStateChange: (e) => {
        if (e.data === YT.PlayerState.ENDED) {
          // Auto-play next track
          if (currentTrackIndex < playlistData.length - 1) {
            loadTrack(currentTrackIndex + 1);
            playMusic();
          }
        }
      }
    }
  });
}

function loadTrack(index) {
  currentTrackIndex = index;
  const track = playlistData[index];
  
  // Update player info
  if (currentSong) currentSong.textContent = track.title;
  if (currentArtist) currentArtist.textContent = track.artist;
  
  // Update playlist active state
  document.querySelectorAll('.playlist-item').forEach((item, i) => {
    item.classList.toggle('is-active', i === index);
  });
  
  // Load new video
  if (ytPlayer && typeof ytPlayer.loadVideoById === 'function') {
    ytPlayer.loadVideoById(track.videoId);
  }
}

function playMusic() {
  if (!ytPlayer) return;
  ytPlayer.playVideo();
  ytPlayer.unMute();
  ytPlayer.setVolume(40);
  musicPlaying = true;
  
  if (vinyl) vinyl.classList.add('is-playing');
  if (musicToggle) {
    musicToggle.querySelector('.icon-play').style.display = 'none';
    musicToggle.querySelector('.icon-pause').style.display = 'block';
  }
}

function pauseMusic() {
  if (!ytPlayer) return;
  ytPlayer.pauseVideo();
  musicPlaying = false;
  
  if (vinyl) vinyl.classList.remove('is-playing');
  if (musicToggle) {
    musicToggle.querySelector('.icon-play').style.display = 'block';
    musicToggle.querySelector('.icon-pause').style.display = 'none';
  }
}

// Toggle button
if (musicToggle) {
  musicToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    if (!ytPlayer) loadYouTubeAPI();
    musicPlaying ? pauseMusic() : playMusic();
  });
}

// Previous button
if (btnPrev) {
  btnPrev.addEventListener('click', () => {
    if (currentTrackIndex > 0) {
      loadTrack(currentTrackIndex - 1);
      playMusic();
    }
  });
}

// Next button
if (btnNext) {
  btnNext.addEventListener('click', () => {
    if (currentTrackIndex < playlistData.length - 1) {
      loadTrack(currentTrackIndex + 1);
      playMusic();
    }
  });
}

// Initialize YouTube on first interaction
let musicInitialized = false;
document.addEventListener('click', function initMusic() {
  if (!musicInitialized && musicToggle) {
    loadYouTubeAPI();
    musicInitialized = true;
  }
}, { once: true });

// ========================================
// PAGE TRANSITIONS (Optional Enhancement)
// ========================================
// Add fade-out effect when clicking internal links
document.querySelectorAll('a[href^="http"], a[href^="/"], a[href*=".html"]').forEach(link => {
  if (link.hostname === window.location.hostname || link.getAttribute('href').endsWith('.html')) {
    link.addEventListener('click', function(e) {
      // Only for internal navigation
      if (this.getAttribute('href') !== window.location.pathname) {
        gsap.to('body', {
          opacity: 0,
          duration: 0.3,
          onComplete: () => {
            window.location.href = this.href;
          }
        });
        e.preventDefault();
      }
    });
  }
});

// Fade in on page load
gsap.from('body', {
  opacity: 0,
  duration: 0.5,
  delay: 0.1
});

// ========================================
// REDUCED MOTION SUPPORT
// ========================================
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (prefersReducedMotion.matches) {
  gsap.globalTimeline.timeScale(0.01);
  document.querySelectorAll('.hero__img, .bento-card__image img, .memory-card img').forEach(img => {
    img.style.transform = 'none';
  });
}

// ========================================
// CONSOLE WELCOME MESSAGE
// ========================================
console.log('%c💛 Kennedy & Joy Cecilia', 'font-size: 20px; font-weight: bold; color: #c9a84c;');
console.log('%cWritten in the stars, sealed with a heartbeat.', 'font-size: 12px; color: #b8a8d4;');
console.log('%cBuilt with love + GSAP', 'font-size: 10px; color: #6e5f8a;');