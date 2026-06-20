/* =============================================
   AniStream — Application Logic
   ============================================= */

// ==================== DATA ====================
const animeDatabase = [
    {
        id: 'demon-slayer',
        title: 'Demon Slayer',
        subtitle: 'Infinity Castle Arc',
        desc: 'Tanjiro ve arkadaşları, iblislerin gizli kalesi Sonsuzluk Kalesi\'ne giriş yapıyor.',
        rating: 9.2,
        episodes: 24,
        year: 2026,
        categories: ['aksiyon', 'fantastik'],
        badge: 'new',
        color: '#2dd4bf',
        gradient: 'linear-gradient(135deg, #1a0533 0%, #0d1b3e 50%, #0a2540 100%)'
    },
    {
        id: 'jujutsu-kaisen',
        title: 'Jujutsu Kaisen',
        subtitle: 'Shinjuku Showdown',
        desc: 'Gojo ile Sukuna arasındaki destansı savaş başlıyor. Tüm büyücüler son mücadele için hazır.',
        rating: 9.5,
        episodes: 26,
        year: 2026,
        categories: ['aksiyon', 'fantastik'],
        badge: 'new',
        color: '#818cf8',
        gradient: 'linear-gradient(135deg, #1e1145 0%, #2d1b69 50%, #0f172a 100%)'
    },
    {
        id: 'one-piece',
        title: 'One Piece',
        subtitle: 'Elbaf Arc',
        desc: 'Hasırşapka mürettebatı devlerin diyarı Elbaf\'a varıyor. Usopp\'un çocukluk hayali gerçek oluyor.',
        rating: 9.0,
        episodes: 1120,
        year: 2025,
        categories: ['aksiyon', 'komedi'],
        badge: 'sub',
        color: '#f59e0b',
        gradient: 'linear-gradient(135deg, #451a03 0%, #78350f 50%, #1c1917 100%)'
    },
    {
        id: 'solo-leveling',
        title: 'Solo Leveling',
        subtitle: 'Arise from the Shadow',
        desc: 'Sung Jin-Woo gölge ordusunu büyütmeye devam ediyor. Yeni tehditler beliriyor.',
        rating: 8.8,
        episodes: 13,
        year: 2026,
        categories: ['aksiyon', 'isekai'],
        badge: 'premium-only',
        color: '#a78bfa',
        gradient: 'linear-gradient(135deg, #0c0a1a 0%, #1a103d 50%, #0d0d1a 100%)'
    },
    {
        id: 'spy-x-family',
        title: 'Spy x Family',
        subtitle: 'Season 3',
        desc: 'Forger ailesi yeni görevlerle karşılaşıyor. Anya okuldaki maceralara devam ediyor.',
        rating: 8.7,
        episodes: 12,
        year: 2026,
        categories: ['komedi', 'aksiyon'],
        badge: 'new',
        color: '#f472b6',
        gradient: 'linear-gradient(135deg, #4a1942 0%, #2d1b3d 50%, #1a0a2e 100%)'
    },
    {
        id: 'attack-on-titan',
        title: 'Attack on Titan',
        subtitle: 'The Final Chapters',
        desc: 'İnsanlığın son savaşı. Eren\'in gerçek amacı nihayet ortaya çıkıyor.',
        rating: 9.8,
        episodes: 87,
        year: 2024,
        categories: ['aksiyon', 'korku'],
        badge: 'sub',
        color: '#ef4444',
        gradient: 'linear-gradient(135deg, #450a0a 0%, #7f1d1d 50%, #1c1917 100%)'
    },
    {
        id: 'my-hero-academia',
        title: 'My Hero Academia',
        subtitle: 'Final War',
        desc: 'Deku ve kahramanlar, kötülere karşı son savaşa başlıyor.',
        rating: 8.5,
        episodes: 25,
        year: 2025,
        categories: ['aksiyon', 'komedi'],
        badge: 'sub',
        color: '#22d3ee',
        gradient: 'linear-gradient(135deg, #042f2e 0%, #134e4a 50%, #0c0a09 100%)'
    },
    {
        id: 'vinland-saga',
        title: 'Vinland Saga',
        subtitle: 'Season 3',
        desc: 'Thorfinn barışçıl yolculuğuna devam ederken, yeni savaşlar kapıya dayanıyor.',
        rating: 9.1,
        episodes: 24,
        year: 2026,
        categories: ['aksiyon', 'korku'],
        badge: 'new',
        color: '#84cc16',
        gradient: 'linear-gradient(135deg, #1a2e05 0%, #365314 50%, #171717 100%)'
    },
    {
        id: 'frieren',
        title: 'Frieren',
        subtitle: 'Sousou no Frieren',
        desc: 'Elf büyücü Frieren, kahraman partisinin ölümünden sonra insanları anlamaya çalışıyor.',
        rating: 9.3,
        episodes: 28,
        year: 2025,
        categories: ['fantastik', 'romantik'],
        badge: 'sub',
        color: '#c084fc',
        gradient: 'linear-gradient(135deg, #2e1065 0%, #4c1d95 50%, #0f172a 100%)'
    },
    {
        id: 'blue-lock',
        title: 'Blue Lock',
        subtitle: 'Season 2',
        desc: 'Japonya\'nın en iyi forvetini yaratmak için tasarlanmış acımasız program devam ediyor.',
        rating: 8.4,
        episodes: 24,
        year: 2025,
        categories: ['spor', 'aksiyon'],
        badge: 'sub',
        color: '#3b82f6',
        gradient: 'linear-gradient(135deg, #0c1a3d 0%, #1e3a5f 50%, #0a0a0f 100%)'
    },
    {
        id: 'chainsaw-man',
        title: 'Chainsaw Man',
        subtitle: 'Season 2',
        desc: 'Denji\'nin Chainsaw Man olarak karanlık maceraları ikinci sezonda devam ediyor.',
        rating: 8.9,
        episodes: 12,
        year: 2026,
        categories: ['aksiyon', 'korku'],
        badge: 'premium-only',
        color: '#fb923c',
        gradient: 'linear-gradient(135deg, #431407 0%, #7c2d12 50%, #0c0a09 100%)'
    },
    {
        id: 'your-name',
        title: 'Your Name',
        subtitle: 'Kimi no Na wa',
        desc: 'İki gencin beden değiştirmesiyle başlayan büyüleyici aşk hikayesi.',
        rating: 9.4,
        episodes: 1,
        year: 2016,
        categories: ['romantik'],
        badge: 'sub',
        color: '#e879f9',
        gradient: 'linear-gradient(135deg, #4a1d96 0%, #6d28d9 50%, #1e1b4b 100%)'
    },
    {
        id: 'steins-gate',
        title: 'Steins;Gate',
        subtitle: 'El Psy Kongroo',
        desc: 'Okabe Rintaro kazara zaman makinesini icat eder ve sonuçları felaket olur.',
        rating: 9.6,
        episodes: 25,
        year: 2011,
        categories: ['bilimkurgu'],
        badge: 'sub',
        color: '#06b6d4',
        gradient: 'linear-gradient(135deg, #042f2e 0%, #164e63 50%, #0a0a0f 100%)'
    },
    {
        id: 'neon-genesis',
        title: 'Neon Genesis Evangelion',
        subtitle: 'Rebuild',
        desc: 'Dev robotlarla meleklere karşı savaşan gençlerin psikolojik dramı.',
        rating: 8.6,
        episodes: 26,
        year: 1995,
        categories: ['bilimkurgu', 'aksiyon'],
        badge: 'sub',
        color: '#a3e635',
        gradient: 'linear-gradient(135deg, #1a2e05 0%, #4d7c0f 50%, #0a0a0f 100%)'
    },
    {
        id: 'haikyuu',
        title: 'Haikyuu!!',
        subtitle: 'Garbage Dump Battle',
        desc: 'Karasuno voleybol takımı, ulusal turnuvada rakiplerle mücadele ediyor.',
        rating: 8.9,
        episodes: 85,
        year: 2024,
        categories: ['spor', 'komedi'],
        badge: 'sub',
        color: '#fb923c',
        gradient: 'linear-gradient(135deg, #431407 0%, #9a3412 50%, #0c0a09 100%)'
    },
    {
        id: 'dandadan',
        title: 'Dandadan',
        subtitle: 'Season 1',
        desc: 'Uzaylılar ve hayaletler arasında sıkışmış iki lise öğrencisinin çılgın macerası.',
        rating: 8.7,
        episodes: 12,
        year: 2025,
        categories: ['aksiyon', 'komedi'],
        badge: 'new',
        color: '#14b8a6',
        gradient: 'linear-gradient(135deg, #042f2e 0%, #115e59 50%, #0a0a0f 100%)'
    }
];

const heroSlides = [0, 1, 3, 5]; // indices into animeDatabase for hero carousel

const continueWatching = [
    { animeId: 'jujutsu-kaisen', episode: 14, progress: 65, epTitle: 'Sonsuz Boşluk' },
    { animeId: 'one-piece', episode: 1118, progress: 32, epTitle: 'Devlerin Kapısı' },
    { animeId: 'solo-leveling', episode: 8, progress: 88, epTitle: 'Gölge Ordusu' },
    { animeId: 'frieren', episode: 22, progress: 45, epTitle: 'Büyücülerin Sınavı' },
    { animeId: 'blue-lock', episode: 20, progress: 12, epTitle: 'Ego\'nun Planı' }
];

const scheduleData = [
    { animeId: 'demon-slayer', day: 'PAZ', dayNum: 22, episode: 3, time: '20:00' },
    { animeId: 'jujutsu-kaisen', day: 'PZT', dayNum: 23, episode: 15, time: '19:30' },
    { animeId: 'spy-x-family', day: 'SAL', dayNum: 24, episode: 5, time: '21:00' },
    { animeId: 'chainsaw-man', day: 'ÇAR', dayNum: 25, episode: 4, time: '20:00' },
    { animeId: 'vinland-saga', day: 'PER', dayNum: 26, episode: 7, time: '22:00' },
    { animeId: 'dandadan', day: 'CUM', dayNum: 27, episode: 9, time: '19:00' }
];

// ==================== COLOR UTILITIES ====================
function generatePosterGradient(color) {
    return `linear-gradient(145deg, ${color}22 0%, ${color}44 40%, ${color}66 70%, ${color}88 100%)`;
}

function generatePosterSVG(title, color) {
    const initials = title.split(' ').map(w => w[0]).join('').substring(0, 2).toUpperCase();
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="400" viewBox="0 0 300 400">
        <defs>
            <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:${color};stop-opacity:0.2"/>
                <stop offset="100%" style="stop-color:${color};stop-opacity:0.6"/>
            </linearGradient>
            <linearGradient id="shine" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:white;stop-opacity:0.08"/>
                <stop offset="50%" style="stop-color:white;stop-opacity:0"/>
                <stop offset="100%" style="stop-color:white;stop-opacity:0.04"/>
            </linearGradient>
        </defs>
        <rect width="300" height="400" fill="url(#bg)"/>
        <rect width="300" height="400" fill="url(#shine)"/>
        <text x="150" y="190" font-family="Outfit, sans-serif" font-size="64" font-weight="900" fill="${color}" text-anchor="middle" dominant-baseline="central" opacity="0.7">${initials}</text>
        <text x="150" y="260" font-family="Inter, sans-serif" font-size="14" fill="white" text-anchor="middle" opacity="0.5">${title}</text>
    </svg>`;
    return 'data:image/svg+xml,' + encodeURIComponent(svg);
}

function generateThumbSVG(title, color) {
    const initials = title.split(' ').map(w => w[0]).join('').substring(0, 3).toUpperCase();
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="225" viewBox="0 0 400 225">
        <defs>
            <linearGradient id="tbg" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:${color};stop-opacity:0.15"/>
                <stop offset="100%" style="stop-color:${color};stop-opacity:0.45"/>
            </linearGradient>
        </defs>
        <rect width="400" height="225" fill="url(#tbg)"/>
        <text x="200" y="105" font-family="Outfit, sans-serif" font-size="48" font-weight="800" fill="${color}" text-anchor="middle" dominant-baseline="central" opacity="0.6">${initials}</text>
        <text x="200" y="155" font-family="Inter, sans-serif" font-size="12" fill="white" text-anchor="middle" opacity="0.4">${title}</text>
    </svg>`;
    return 'data:image/svg+xml,' + encodeURIComponent(svg);
}

// ==================== NAVBAR ====================
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

// ==================== HERO CAROUSEL ====================
let currentHeroIndex = 0;
const indicators = document.querySelectorAll('.indicator');

function updateHero(index) {
    const anime = animeDatabase[heroSlides[index]];
    const heroTitle = document.getElementById('heroTitle');
    const heroSubtitle = document.getElementById('heroSubtitle');
    const heroDesc = document.getElementById('heroDesc');
    const heroBackdrop = document.getElementById('heroBackdrop');
    const heroContent = document.querySelector('.hero-content');

    // Fade out
    heroContent.style.opacity = '0';
    heroContent.style.transform = 'translateY(20px)';

    setTimeout(() => {
        heroTitle.textContent = anime.title;
        heroSubtitle.textContent = anime.subtitle;
        heroDesc.textContent = anime.desc;
        heroBackdrop.style.backgroundImage = anime.gradient;

        // Update meta
        const heroMeta = document.getElementById('heroMeta');
        heroMeta.innerHTML = `
            <span class="meta-item"><span class="meta-icon">⭐</span> ${anime.rating}</span>
            <span class="meta-item"><span class="meta-icon">📺</span> ${anime.episodes} Bölüm</span>
            <span class="meta-item"><span class="meta-icon">📅</span> ${anime.year}</span>
            ${anime.categories.map(c => `<span class="meta-item tag">${c.charAt(0).toUpperCase() + c.slice(1)}</span>`).join('')}
        `;

        // Fade in
        heroContent.style.opacity = '1';
        heroContent.style.transform = 'translateY(0)';
    }, 300);

    indicators.forEach((ind, i) => {
        ind.classList.toggle('active', i === index);
    });

    currentHeroIndex = index;
}

indicators.forEach(ind => {
    ind.addEventListener('click', () => {
        updateHero(parseInt(ind.dataset.index));
    });
});

// Auto-rotate hero
setInterval(() => {
    const next = (currentHeroIndex + 1) % heroSlides.length;
    updateHero(next);
}, 7000);

// Add transition to hero-content
const heroContentEl = document.querySelector('.hero-content');
heroContentEl.style.transition = 'opacity 0.4s ease, transform 0.4s ease';

// ==================== RENDER FUNCTIONS ====================

function createAnimeCard(anime) {
    const poster = generatePosterSVG(anime.title, anime.color);
    const badgeLabels = { 'new': 'YENİ', 'sub': 'ALTYAZILI', 'premium-only': '★ PREMİUM' };

    return `
        <div class="anime-card" onclick="openPlayer('${anime.id}')" data-categories='${JSON.stringify(anime.categories)}'>
            <div class="card-poster">
                <img class="card-poster-img" src="${poster}" alt="${anime.title}" loading="lazy">
                <div class="card-overlay">
                    <div class="card-play-btn">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="white"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                    </div>
                </div>
                <span class="card-badge ${anime.badge}">${badgeLabels[anime.badge]}</span>
                <span class="card-rating">⭐ ${anime.rating}</span>
            </div>
            <div class="card-info">
                <h3 class="card-title">${anime.title}</h3>
                <p class="card-meta">
                    <span>${anime.year}</span>
                    <span>·</span>
                    <span>${anime.episodes} Bölüm</span>
                </p>
            </div>
        </div>
    `;
}

function createContinueCard(item) {
    const anime = animeDatabase.find(a => a.id === item.animeId);
    if (!anime) return '';
    const thumb = generateThumbSVG(anime.title, anime.color);

    return `
        <div class="continue-card" onclick="openPlayer('${anime.id}')">
            <div class="continue-thumb">
                <img class="continue-thumb-img" src="${thumb}" alt="${anime.title}" loading="lazy">
                <div class="continue-progress">
                    <div class="continue-progress-fill" style="width: ${item.progress}%"></div>
                </div>
                <div class="continue-play-overlay">
                    <div class="card-play-btn">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="white"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                    </div>
                </div>
            </div>
            <div class="continue-info">
                <h3 class="continue-title">${anime.title}</h3>
                <p class="continue-ep">Bölüm ${item.episode} — ${item.epTitle}</p>
            </div>
        </div>
    `;
}

function createScheduleItem(item) {
    const anime = animeDatabase.find(a => a.id === item.animeId);
    if (!anime) return '';

    return `
        <div class="schedule-item" onclick="openPlayer('${anime.id}')">
            <div class="schedule-day">
                <span class="schedule-day-name">${item.day}</span>
                <span class="schedule-day-num">${item.dayNum}</span>
            </div>
            <div class="schedule-info">
                <h4>${anime.title}</h4>
                <p>Bölüm ${item.episode} · <span class="schedule-time">${item.time}</span></p>
            </div>
        </div>
    `;
}

function createTop10Item(anime, rank) {
    const poster = generatePosterSVG(anime.title, anime.color);

    return `
        <div class="top10-item" onclick="openPlayer('${anime.id}')">
            <span class="top10-rank">${rank}</span>
            <div class="top10-poster">
                <img src="${poster}" alt="${anime.title}">
            </div>
            <div class="top10-info">
                <h4 class="top10-title">${anime.title}</h4>
                <p class="top10-meta">${anime.categories.map(c => c.charAt(0).toUpperCase() + c.slice(1)).join(', ')}</p>
            </div>
            <span class="top10-score">⭐ ${anime.rating}</span>
        </div>
    `;
}

function createEpisodeItem(epNum, title, duration, isActive) {
    return `
        <div class="episode-item ${isActive ? 'active' : ''}" onclick="selectEpisode(${epNum})">
            <span class="ep-number">${epNum}</span>
            <div class="ep-info">
                <p class="ep-title">${title}</p>
                <p class="ep-duration">${duration} dk</p>
            </div>
        </div>
    `;
}

// ==================== RENDER ALL SECTIONS ====================

function renderAll() {
    // Continue Watching
    const continueRow = document.getElementById('continueRow');
    continueRow.innerHTML = continueWatching.map(createContinueCard).join('');

    // Trending
    const trendingGrid = document.getElementById('trendingGrid');
    const trending = [...animeDatabase].sort((a, b) => b.rating - a.rating).slice(0, 8);
    trendingGrid.innerHTML = trending.map(createAnimeCard).join('');

    // Category Grid (all)
    renderCategoryGrid('all');

    // Schedule
    const scheduleGrid = document.getElementById('scheduleGrid');
    scheduleGrid.innerHTML = scheduleData.map(createScheduleItem).join('');

    // Top 10
    const top10List = document.getElementById('top10List');
    const top10 = [...animeDatabase].sort((a, b) => b.rating - a.rating).slice(0, 10);
    top10List.innerHTML = top10.map((a, i) => createTop10Item(a, i + 1)).join('');
}

function renderCategoryGrid(category) {
    const grid = document.getElementById('categoryGrid');
    let filtered = animeDatabase;
    if (category !== 'all') {
        filtered = animeDatabase.filter(a => a.categories.includes(category));
    }
    grid.innerHTML = filtered.map(createAnimeCard).join('');

    // Animate cards in
    const cards = grid.querySelectorAll('.anime-card');
    cards.forEach((card, i) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        setTimeout(() => {
            card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, i * 60);
    });
}

// Category tab click
const categoryTabs = document.getElementById('categoryTabs');
categoryTabs.addEventListener('click', (e) => {
    if (e.target.classList.contains('cat-tab')) {
        categoryTabs.querySelectorAll('.cat-tab').forEach(t => t.classList.remove('active'));
        e.target.classList.add('active');
        renderCategoryGrid(e.target.dataset.category);
    }
});

// ==================== SEARCH ====================
const searchInput = document.getElementById('searchInput');
let searchTimeout;

searchInput.addEventListener('input', () => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
        const query = searchInput.value.toLowerCase().trim();
        if (query.length === 0) {
            renderCategoryGrid('all');
            return;
        }
        const results = animeDatabase.filter(a =>
            a.title.toLowerCase().includes(query) ||
            a.subtitle.toLowerCase().includes(query) ||
            a.categories.some(c => c.includes(query))
        );
        const grid = document.getElementById('categoryGrid');
        grid.innerHTML = results.length > 0
            ? results.map(createAnimeCard).join('')
            : '<p style="color: var(--text-muted); grid-column: 1 / -1; text-align: center; padding: 40px;">Sonuç bulunamadı.</p>';

        // Reset category tabs
        categoryTabs.querySelectorAll('.cat-tab').forEach(t => t.classList.remove('active'));
        categoryTabs.querySelector('[data-category="all"]').classList.add('active');

        // Scroll to categories
        document.getElementById('categoriesSection').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 300);
});

// ==================== VIDEO PLAYER ====================
const playerModal = document.getElementById('playerModal');
const playerClose = document.getElementById('playerClose');
const videoPlayer = document.getElementById('videoPlayer');
const playerOverlay = document.getElementById('playerOverlay');
const playBtnBig = document.getElementById('playBtnBig');
const playPauseBtn = document.getElementById('playPauseBtn');
const progressBar = document.getElementById('progressBar');
const progressFill = document.getElementById('progressFill');
const timeDisplay = document.getElementById('timeDisplay');
const volumeSlider = document.getElementById('volumeSlider');
const fullscreenBtn = document.getElementById('fullscreenBtn');

let currentAnime = null;

const episodeTitles = [
    'Başlangıç', 'Karanlıkta Bir Işık', 'Eski Düşman', 'Gizli Güç',
    'Savaşın Eşiğinde', 'Kayıp Hafıza', 'Yeni Müttefik', 'İhanet',
    'Son Tren', 'Rüzgarın Şarkısı', 'Alev ve Buz', 'Sonsuz Gece',
    'Şafak Sökerken', 'Gölgelerin Dansı', 'Kılıcın Sırrı', 'Uyanış',
    'Fırtına Öncesi', 'Kader Kapısı', 'Ölümsüz Savaşçı', 'Son Nefes',
    'Yeniden Doğuş', 'Kıyamet Günü', 'Zafer ve Kayıp', 'Final'
];

function openPlayer(animeId) {
    currentAnime = animeDatabase.find(a => a.id === animeId);
    if (!currentAnime) return;

    document.getElementById('playerAnimeTitle').textContent = currentAnime.title;
    document.getElementById('playerEpTitle').textContent = `Bölüm 1 — ${episodeTitles[0]}`;

    // Generate episode list
    const episodesScroll = document.getElementById('episodesScroll');
    const epCount = Math.min(currentAnime.episodes, 24);
    let epsHtml = '';
    for (let i = 1; i <= epCount; i++) {
        const title = episodeTitles[(i - 1) % episodeTitles.length];
        const duration = Math.floor(Math.random() * 5) + 22;
        epsHtml += createEpisodeItem(i, title, duration, i === 1);
    }
    episodesScroll.innerHTML = epsHtml;

    playerModal.classList.add('open');
    document.body.style.overflow = 'hidden';

    // Reset player state
    playerOverlay.classList.remove('hidden');
    progressFill.style.width = '0%';
    timeDisplay.textContent = '0:00 / 24:00';
}

function selectEpisode(epNum) {
    const title = episodeTitles[(epNum - 1) % episodeTitles.length];
    document.getElementById('playerEpTitle').textContent = `Bölüm ${epNum} — ${title}`;

    const items = document.querySelectorAll('.episode-item');
    items.forEach((item, i) => {
        item.classList.toggle('active', i === epNum - 1);
    });

    // Reset progress
    progressFill.style.width = '0%';
    simulatedTime = 0;
}

playerClose.addEventListener('click', () => {
    playerModal.classList.remove('open');
    document.body.style.overflow = '';
    clearInterval(playbackInterval);
    isPlaying = false;
});

// Simulated playback
let isPlaying = false;
let playbackInterval;
let simulatedTime = 0;
const simulatedDuration = 1440; // 24 minutes in seconds

function formatTime(seconds) {
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m}:${s.toString().padStart(2, '0')}`;
}

function togglePlay() {
    isPlaying = !isPlaying;
    const playIcon = playPauseBtn.querySelector('.play-icon');
    const pauseIcon = playPauseBtn.querySelector('.pause-icon');

    if (isPlaying) {
        playIcon.style.display = 'none';
        pauseIcon.style.display = 'block';
        playerOverlay.classList.add('hidden');

        playbackInterval = setInterval(() => {
            simulatedTime += 1;
            if (simulatedTime >= simulatedDuration) {
                simulatedTime = 0;
                isPlaying = false;
                playIcon.style.display = 'block';
                pauseIcon.style.display = 'none';
                playerOverlay.classList.remove('hidden');
                clearInterval(playbackInterval);
            }
            const progress = (simulatedTime / simulatedDuration) * 100;
            progressFill.style.width = progress + '%';
            timeDisplay.textContent = `${formatTime(simulatedTime)} / ${formatTime(simulatedDuration)}`;
        }, 1000);
    } else {
        playIcon.style.display = 'block';
        pauseIcon.style.display = 'none';
        clearInterval(playbackInterval);
    }
}

playBtnBig.addEventListener('click', togglePlay);
playPauseBtn.addEventListener('click', togglePlay);

playerOverlay.addEventListener('click', (e) => {
    if (e.target === playerOverlay) togglePlay();
});

// Progress bar click
progressBar.addEventListener('click', (e) => {
    const rect = progressBar.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const pct = x / rect.width;
    simulatedTime = Math.floor(pct * simulatedDuration);
    progressFill.style.width = (pct * 100) + '%';
    timeDisplay.textContent = `${formatTime(simulatedTime)} / ${formatTime(simulatedDuration)}`;
});

// Skip buttons
document.getElementById('skipBackBtn').addEventListener('click', () => {
    simulatedTime = Math.max(0, simulatedTime - 10);
    progressFill.style.width = ((simulatedTime / simulatedDuration) * 100) + '%';
    timeDisplay.textContent = `${formatTime(simulatedTime)} / ${formatTime(simulatedDuration)}`;
});

document.getElementById('skipFwdBtn').addEventListener('click', () => {
    simulatedTime = Math.min(simulatedDuration, simulatedTime + 10);
    progressFill.style.width = ((simulatedTime / simulatedDuration) * 100) + '%';
    timeDisplay.textContent = `${formatTime(simulatedTime)} / ${formatTime(simulatedDuration)}`;
});

// Fullscreen
fullscreenBtn.addEventListener('click', () => {
    const wrapper = document.querySelector('.player-wrapper');
    if (document.fullscreenElement) {
        document.exitFullscreen();
    } else {
        wrapper.requestFullscreen();
    }
});

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    if (!playerModal.classList.contains('open')) return;

    switch (e.key) {
        case ' ':
        case 'k':
            e.preventDefault();
            togglePlay();
            break;
        case 'Escape':
            playerModal.classList.remove('open');
            document.body.style.overflow = '';
            clearInterval(playbackInterval);
            isPlaying = false;
            break;
        case 'ArrowLeft':
            simulatedTime = Math.max(0, simulatedTime - 5);
            break;
        case 'ArrowRight':
            simulatedTime = Math.min(simulatedDuration, simulatedTime + 5);
            break;
        case 'f':
            fullscreenBtn.click();
            break;
    }
});

// ==================== PREMIUM MODAL ====================
const premiumBtn = document.getElementById('premiumBtn');
const premiumModal = document.getElementById('premiumModal');
const premiumClose = document.getElementById('premiumClose');

premiumBtn.addEventListener('click', () => {
    premiumModal.classList.add('open');
});

premiumClose.addEventListener('click', () => {
    premiumModal.classList.remove('open');
});

premiumModal.addEventListener('click', (e) => {
    if (e.target === premiumModal) {
        premiumModal.classList.remove('open');
    }
});

// ==================== INTERSECTION OBSERVER (Animate on scroll) ====================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

function observeSections() {
    document.querySelectorAll('.content-section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
}

// ==================== INIT ====================
document.addEventListener('DOMContentLoaded', () => {
    renderAll();
    observeSections();
    updateHero(0);
});
