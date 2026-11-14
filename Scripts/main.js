// Minimal JavaScript for The Agentic State website
document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;
  
  // Mobile menu toggle
  const modalToggle = document.querySelector('.modal-toggle');
  if (modalToggle) {
    modalToggle.addEventListener('click', function() {
      body.classList.toggle('is-modal-open');
    });
  }
  
    // Scroll to top button (if you add one with class .up)
    const upButton = document.querySelector('.up');
    if (upButton) {
      upButton.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  
    // Show/hide scroll to top button
    let isScrolledDown = false;
    window.addEventListener('scroll', function() {
      const scrolled = window.pageYOffset > 100;
      if (scrolled !== isScrolledDown) {
        isScrolledDown = scrolled;
        body.classList.toggle('is-scrolled-down', scrolled);
      }
    });
  
    // Landing page: header switches from accent to white once the hero is passed
    const accentHero = document.querySelector('.lp-hero');
    if (accentHero && body.classList.contains('has-accent-hero')) {
      const updateHeader = function() {
        const headerH = document.querySelector('.header').offsetHeight;
        body.classList.toggle('is-past-hero', accentHero.getBoundingClientRect().bottom <= headerH);
      };
      window.addEventListener('scroll', updateHeader, { passive: true });
      window.addEventListener('resize', updateHeader);
      updateHeader();
    }

    // Our Work page: filter project rows by line of work (#research, #government, #field)
    const filterButtons = document.querySelectorAll('.work-filter__btn');
    if (filterButtons.length) {
      const rows = document.querySelectorAll('.project-row[data-tags]');
      const applyFilter = function(key) {
        if (!['research', 'government', 'field'].includes(key)) key = 'all';
        filterButtons.forEach(b => b.classList.toggle('is-active', b.dataset.filter === key));
        rows.forEach(r => r.classList.toggle('is-hidden', key !== 'all' && !r.dataset.tags.split(' ').includes(key)));
      };
      filterButtons.forEach(b => b.addEventListener('click', function() {
        const key = b.dataset.filter;
        history.replaceState(null, '', key === 'all' ? location.pathname : '#' + key);
        applyFilter(key);
      }));
      applyFilter(location.hash.slice(1));
      window.addEventListener('hashchange', () => applyFilter(location.hash.slice(1)));
    }

    // Landing hero: halftone sphere in white dots, with a slowly moving light
    const halftone = document.querySelector('.lp-halftone');
    if (halftone && halftone.getContext) {
      const ctx = halftone.getContext('2d');
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const hero = halftone.closest('.lp-hero');
      let W = 0, H = 0, dpr = 1, visible = true, last = 0;

      // Small value-noise field for texture around the sphere
      const perm = new Uint8Array(512);
      for (let i = 0; i < 256; i++) perm[i] = i;
      for (let i = 255; i > 0; i--) { const k = (i * 73 + 41) % (i + 1); const t = perm[i]; perm[i] = perm[k]; perm[k] = t; }
      for (let i = 0; i < 256; i++) perm[i + 256] = perm[i];
      const fade = t => t * t * (3 - 2 * t);
      const hash = (x, y) => perm[(perm[x & 255] + y) & 255] / 255;
      const noise = (x, y) => {
        const xi = Math.floor(x), yi = Math.floor(y), xf = x - xi, yf = y - yi;
        const a = hash(xi, yi), b = hash(xi + 1, yi), c = hash(xi, yi + 1), d = hash(xi + 1, yi + 1);
        const u = fade(xf), v = fade(yf);
        return a + (b - a) * u + (c - a) * v + (a - b - c + d) * u * v;
      };

      const resize = function() {
        const r = halftone.getBoundingClientRect();
        dpr = Math.min(window.devicePixelRatio || 1, 2);
        W = r.width; H = r.height;
        halftone.width = Math.round(W * dpr); halftone.height = Math.round(H * dpr);
      };

      const draw = function(t) {
        const mobile = W < 769;
        const step = mobile ? 8 : 10;
        const cx = mobile ? W * 0.62 : W * 0.76;
        const cy = mobile ? H * 0.26 : H * 0.42;
        const R = mobile ? W * 0.36 : Math.min(W * 0.2, H * 0.34);
        const a = t * 0.0004;                                  // light angle: one turn in about 16s
        const lx = Math.cos(a) * 0.6, ly = -0.45 + Math.sin(a) * 0.25, lz = 0.65;
        const ll = Math.hypot(lx, ly, lz);
        const drift = t * 0.0001;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        ctx.clearRect(0, 0, W, H);
        ctx.fillStyle = 'rgba(255,255,255,0.9)';
        ctx.beginPath();
        for (let y = step / 2; y < H; y += step) {
          for (let x = step / 2; x < W; x += step) {
            const dx = (x - cx) / R, dy = (y - cy) / R, d2 = dx * dx + dy * dy;
            let v;
            if (d2 < 1) {
              const dz = Math.sqrt(1 - d2);
              const lambert = Math.max(0, (dx * lx + dy * ly + dz * lz) / ll);
              v = 0.08 + 0.92 * Math.pow(lambert, 1.4);
              v *= 0.85 + 0.3 * noise(x / 46 + drift, y / 46);
            } else {
              const fall = Math.exp(-(Math.sqrt(d2) - 1) * 2.2);
              v = fall * 0.32 * noise(x / 70 - drift, y / 70 + drift);
            }
            const rad = step * 0.5 * Math.min(1, v);
            if (rad < 0.45) continue;
            ctx.moveTo(x + rad, y);
            ctx.arc(x, y, rad, 0, Math.PI * 2);
          }
        }
        ctx.fill();
      };

      const loop = function(t) {
        if (visible && t - last > 50) { draw(t); last = t; }
        requestAnimationFrame(loop);
      };

      resize();
      draw(0);
      window.addEventListener('resize', () => { resize(); draw(reduceMotion ? 0 : last); });
      // The canvas is fixed to the viewport, so scrolling needs no redraw. Once the
      // white page has scrolled up behind the whole sphere (white dots on white),
      // hide it so it never shows over the grey band or footer further down.
      const updateVisibility = function() {
        // hidden once the hero and the fade below it have both scrolled above the canvas top
        const fadeH = hero ? parseFloat(getComputedStyle(hero, '::after').height) || 0 : 0;
        const gone = hero && hero.getBoundingClientRect().bottom + fadeH < halftone.getBoundingClientRect().top;
        visible = !gone;
        halftone.classList.toggle('is-gone', gone);
      };
      window.addEventListener('scroll', updateVisibility, { passive: true });
      updateVisibility();
      if (!reduceMotion) requestAnimationFrame(loop);
    }

    // ===== Whitepaper Reader: Bootstrap Scrollspy init =====
    const headerHeight = parseInt(getComputedStyle(document.documentElement)
      .getPropertyValue('--headerHeight')) || 64;
  
    const scrollbox = document.getElementById('wp-scrollbox');
    if (scrollbox && window.bootstrap) {
      // Initialize / reinitialize Scrollspy tied to the scrollbox
      const instance = bootstrap.ScrollSpy.getOrCreateInstance(scrollbox, {
        target: '#wp-navbar',
        offset: headerHeight + 16
      });
  
      // Smooth-scroll when choosing a chapter; close dropdown afterward
      document.querySelectorAll('#wp-navbar .dropdown-item').forEach(a => {
        a.addEventListener('click', (e) => {
          const id = a.getAttribute('href');
          if (id && id.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(id);
            if (target) {
              target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
            const dd = a.closest('.dropdown');
            if (dd) {
              const toggle = dd.querySelector('[data-bs-toggle="dropdown"]');
              if (toggle) bootstrap.Dropdown.getOrCreateInstance(toggle).hide();
            }
          }
        });
      });
  
      // Recalculate on content/size changes
      window.addEventListener('resize', () => instance.refresh());
    }
  
    // Add JS-enabled class
    body.classList.add('is-js');
  });
  