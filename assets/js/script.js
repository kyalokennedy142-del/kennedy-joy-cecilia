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
// PAGE: MUSIC (COMPACT - Mercy Style)
// ========================================

const youtubeFrameWrapper = document.getElementById('youtubeFrameWrapper');
const ytCompactPlayer = document.getElementById('yt-compact-player');
const compactCurrentSong = document.getElementById('compactCurrentSong');
const compactCurrentArtist = document.getElementById('compactCurrentArtist');
const playlistCompactInner = document.getElementById('playlistCompactInner');
const compactBtnPrev = document.getElementById('compactBtnPrev');
const compactBtnNext = document.getElementById('compactBtnNext');
const compactBtnPlay = document.getElementById('compactBtnPlay');
const compactVolumeSlider = document.getElementById('compactVolumeSlider');

// YOUR 10 REAL SONGS
const playlistData = [
  { title: 'Your Song Title', artist: 'Artist Name', duration: '—', emoji: '🌹', videoId: 'caoP4dj2oro' },
  { title: 'Song 2', artist: 'Artist', duration: '—', emoji: '💛', videoId: 'Qk-ROQkkloE' },
  { title: 'Song 3', artist: 'Artist', duration: '—', emoji: '🕊️', videoId: '5mxT40MnNi0' },
  { title: 'Song 4', artist: 'Artist', duration: '—', emoji: '✨', videoId: 'Wkn2hqIo0iE' },
  { title: 'Song 5', artist: 'Artist', duration: '—', emoji: '🌙', videoId: 'C-YGWocw2TU' },
  { title: 'Song 6', artist: 'Artist', duration: '—', emoji: '🍂', videoId: 'RxctxSFp180' },
  { title: 'Song 7', artist: 'Artist', duration: '—', emoji: '🌅', videoId: 'dPaTTIgcuho' },
  { title: 'Song 8', artist: 'Artist', duration: '—', emoji: '⭐', videoId: '6mSaM5R0jao' },
  { title: 'Song 9', artist: 'Artist', duration: '—', emoji: '🎶', videoId: 'jlAQYRHggg4' },
  { title: 'Song 10', artist: 'Artist', duration: '—', emoji: '💫', videoId: '59Vf7oQV9pg' },
];

let currentTrackIndex = 0;
let musicPlaying = false;
let currentVolume = 70;
let ytPlayerCompact;

// Build Playlist
if (playlistCompactInner) {
  playlistData.forEach((track, i) => {
    const item = document.createElement('div');
    item.className = 'playlist-item-compact' + (i === 0 ? ' is-active' : '');
    item.dataset.index = i;
    
    item.innerHTML = `
      <span class="playlist-item-compact__emoji">${track.emoji}</span>
      <div class="playlist-item-compact__info">
        <span class="playlist-item-compact__title">${track.title}</span>
        <span class="playlist-item-compact__artist">${track.artist}</span>
      </div>
      <span class="playlist-item-compact__duration">${track.duration}</span>
      <button class="playlist-item-compact__watch" data-video="${track.videoId}" data-title="${track.title}">
        ▶ Watch
      </button>
    `;
    
    // Click on row to play
    item.addEventListener('click', (e) => {
      if (!e.target.classList.contains('playlist-item-compact__watch')) {
        loadCompactTrack(i);
        playCompactMusic();
      }
    });
    
    playlistCompactInner.appendChild(item);
  });
  
  // Watch button functionality
  document.querySelectorAll('.playlist-item-compact__watch').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const videoId = btn.dataset.video;
      const parentItem = btn.closest('.playlist-item-compact');
      toggleInlineVideo(parentItem, videoId);
    });
  });
}

// Load YouTube API
function loadCompactYouTubeAPI() {
  if (window.YT) {
    initCompactYouTubePlayer();
  } else {
    const script = document.createElement('script');
    script.src = 'https://www.youtube.com/iframe_api';
    script.onload = initCompactYouTubePlayer;
    document.head.appendChild(script);
  }
}

function initCompactYouTubePlayer() {
  ytPlayerCompact = new YT.Player('yt-compact-player', {
    videoId: playlistData[0].videoId,
    playerVars: {
      autoplay: 1,
      mute: 0,
      controls: 1,
      rel: 0,
      modestbranding: 1
    },
    events: {
      onReady: (e) => {
        e.target.setVolume(currentVolume);
        updateCompactNowPlaying(0);
        musicPlaying = true;
        updateCompactPlayButton();
      },
      onStateChange: (e) => {
        if (e.data === YT.PlayerState.PLAYING) {
          musicPlaying = true;
          updateCompactPlayButton();
        } else if (e.data === YT.PlayerState.PAUSED) {
          musicPlaying = false;
          updateCompactPlayButton();
        } else if (e.data === YT.PlayerState.ENDED) {
          // Auto-play next
          if (currentTrackIndex < playlistData.length - 1) {
            loadCompactTrack(currentTrackIndex + 1);
            playCompactMusic();
          }
        }
      }
    }
  });
}

function loadCompactTrack(index) {
  currentTrackIndex = index;
  const track = playlistData[index];
  
  // Update playlist active state
  document.querySelectorAll('.playlist-item-compact').forEach((item, i) => {
    item.classList.toggle('is-active', i === index);
  });
  
  // Load video
  if (ytPlayerCompact && typeof ytPlayerCompact.loadVideoById === 'function') {
    ytPlayerCompact.loadVideoById(track.videoId);
    ytPlayerCompact.setVolume(currentVolume);
  }
  
  updateCompactNowPlaying(index);
}

function updateCompactNowPlaying(index) {
  const track = playlistData[index];
  if (compactCurrentSong) compactCurrentSong.textContent = track.title;
  if (compactCurrentArtist) compactCurrentArtist.textContent = track.artist;
}

function playCompactMusic() {
  if (!ytPlayerCompact) return;
  ytPlayerCompact.playVideo();
  ytPlayerCompact.unMute();
  musicPlaying = true;
  updateCompactPlayButton();
}

function pauseCompactMusic() {
  if (!ytPlayerCompact) return;
  ytPlayerCompact.pauseVideo();
  musicPlaying = false;
  updateCompactPlayButton();
}

function updateCompactPlayButton() {
  if (!compactBtnPlay) return;
  const playIcon = compactBtnPlay.querySelector('.icon-play');
  const pauseIcon = compactBtnPlay.querySelector('.icon-pause');
  
  if (musicPlaying) {
    playIcon.style.display = 'none';
    pauseIcon.style.display = 'block';
  } else {
    playIcon.style.display = 'block';
    pauseIcon.style.display = 'none';
  }
}

// Toggle inline video
function toggleInlineVideo(parentItem, videoId) {
  let container = parentItem.querySelector('.inline-video-container');
  
  if (container && container.classList.contains('is-visible')) {
    // Close video
    container.classList.remove('is-visible');
    setTimeout(() => container.remove(), 300);
  } else {
    // Remove other open videos
    document.querySelectorAll('.inline-video-container.is-visible').forEach(el => {
      el.classList.remove('is-visible');
      setTimeout(() => el.remove(), 300);
    });
    
    // Create new video container
    container = document.createElement('div');
    container.className = 'inline-video-container';
    container.innerHTML = `
      <div class="inline-video-wrapper">
        <iframe 
          src="https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen
        ></iframe>
        <button class="inline-video-close">&times;</button>
      </div>
    `;
    
    parentItem.appendChild(container);
    
    // Trigger animation
    setTimeout(() => container.classList.add('is-visible'), 10);
    
    // Close button
    container.querySelector('.inline-video-close').addEventListener('click', () => {
      container.classList.remove('is-visible');
      setTimeout(() => container.remove(), 300);
    });
  }
}

// Event Listeners
if (compactBtnPlay) {
  compactBtnPlay.addEventListener('click', () => {
    if (!ytPlayerCompact) loadCompactYouTubeAPI();
    musicPlaying ? pauseCompactMusic() : playCompactMusic();
  });
}

if (compactBtnPrev) {
  compactBtnPrev.addEventListener('click', () => {
    if (currentTrackIndex > 0) {
      loadCompactTrack(currentTrackIndex - 1);
      playCompactMusic();
    }
  });
}

if (compactBtnNext) {
  compactBtnNext.addEventListener('click', () => {
    if (currentTrackIndex < playlistData.length - 1) {
      loadCompactTrack(currentTrackIndex + 1);
      playCompactMusic();
    }
  });
}

// Volume Control
if (compactVolumeSlider) {
  compactVolumeSlider.addEventListener('input', (e) => {
    currentVolume = parseInt(e.target.value);
    if (ytPlayerCompact && typeof ytPlayerCompact.setVolume === 'function') {
      ytPlayerCompact.setVolume(currentVolume);
    }
  });
}

// Initialize on page load
if (ytCompactPlayer) {
  loadCompactYouTubeAPI();
}