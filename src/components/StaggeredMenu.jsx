import React, { useCallback, useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import MenuSwitcher from './MenuSwitcher';
import './StaggeredMenu.css';

export const StaggeredMenu = ({
  position = 'right',
  colors = ['#C01014', '#FE7102', '#FDDA04'], // Gabis: Red, Orange, Gold
  items = [
    { label: "Inicio", link: "/" },
    { label: "Menú", link: "/menu-manana" },
    { label: "Eventos", link: "/eventos" },
    { label: "Ubicación", link: "/ubicacion" },
    { label: "FAQ", link: "/faq" }
  ],
  socialItems = [
    { label: "WhatsApp", link: "https://wa.me/525660299028" },
    { label: "contacto@gabis.com.mx", link: "mailto:contacto@gabis.com.mx" }
  ],
  displaySocials = true,
  displayItemNumbering = true,
  className = '',
  logoContent = <span className="text-2xl font-stardom text-[#C01014]">GABIS</span>,
  menuButtonColor = '#F9F7F2',
  openMenuButtonColor = '#F9F7F2',
  accentColor = '#FDDA04',
  changeMenuColorOnOpen = false,
  isFixed = true,
  closeOnClickAway = true,
  onMenuOpen = () => { },
  onMenuClose = () => { },
  forceVisible = false
}) => {
  const [open, setOpen] = useState(false);
  const openRef = useRef(false);
  const panelRef = useRef(null);
  const preLayersRef = useRef(null);
  const preLayerElsRef = useRef([]);
  const plusHRef = useRef(null);
  const plusVRef = useRef(null);
  const iconRef = useRef(null);
  const textInnerRef = useRef(null);
  const textWrapRef = useRef(null);
  const [textLines, setTextLines] = useState(['Menú', 'Cerrar']);

  // Theme State
  const [themeMode, setThemeMode] = useState('morning');
  const isDay = themeMode === 'morning';

  // Dynamic Styles based on Theme
  // Logo: Uses standard SVG/Text logic but user asked to remove "other logo" and fix colors
  // We use simple text for now to match the request "ni blanco con rojo" issue
  const currentLogo = isDay
    ? <span className="text-3xl font-stardom text-gabis-red">GABIS</span>
    : <span className="text-3xl font-tanker text-gabis-orange tracking-wide">GABIS</span>;

  // Colors for Layers (Animation)
  // User request: "Animation must show yellow, orange and red"
  // We use these for the 'prelayers' that slide in before the main panel.
  const currentColors = ['#FDDA04', '#FE7102', '#C01014']; // Yellow -> Orange -> Red sequence

  const panelBg = isDay ? '#F9F7F2' : '#141414';
  const textColor = isDay ? '#141414' : '#F9F7F2';
  const hoverColor = isDay ? '#C01014' : '#FE7102';
  const numberFont = isDay ? 'Stardom' : 'Tanker';
  const numberColor = isDay ? '#C01014' : '#FE7102';

  // Listener for Theme Change
  React.useEffect(() => {
    const handleTheme = (e) => {
      if (e.detail && e.detail.mode) {
        setThemeMode(e.detail.mode);
      }
    };
    if (typeof window !== 'undefined') {
      window.addEventListener('theme-change', handleTheme);
    }
    return () => {
      if (typeof window !== 'undefined') window.removeEventListener('theme-change', handleTheme);
    };
  }, []);

  // Update CSS variable directly for performance (avoid react re-renders on drag)
  // --slider-percent: 0.0 to 1.0
  React.useEffect(() => {
    const handlePos = (e) => {
      const pct = e.detail / 100;
      document.documentElement.style.setProperty('--slider-percent', pct);
    };
    if (typeof window !== 'undefined') {
      window.addEventListener('hero-slider-position', handlePos);
      // Init center
      document.documentElement.style.setProperty('--slider-percent', 0.5);
    }
    return () => {
      if (typeof window !== 'undefined') window.removeEventListener('hero-slider-position', handlePos);
    };
  }, []);

  const openTlRef = useRef(null);
  const closeTweenRef = useRef(null);
  const spinTweenRef = useRef(null);
  const textCycleAnimRef = useRef(null);
  const colorTweenRef = useRef(null);
  const toggleBtnRef = useRef(null);
  const itemEntranceTweenRef = useRef(null);

  useLayoutEffect(() => {
    // Basic context for cleanup, but let CSS handle initial position if possible to avoid conflicts
    const ctx = gsap.context(() => {
      // We can ensure the panel is initially hidden/offscreen here if CSS fails, 
      // but StaggeredMenu.css should handle translateX(100%).
      // If we want to be safe, we can set it:
      const panel = panelRef.current;
      const preLayers = preLayerElsRef.current;
      const offscreen = position === 'left' ? -100 : 100;
      if (panel) gsap.set(panel, { xPercent: offscreen });
      // IMPORTANT: Ensure layers start offscreen by GSAP too
      if (preLayers && preLayers.length) gsap.set(preLayers, { xPercent: offscreen });
    });
    return () => ctx.revert();
  }, [position]);

  const buildOpenTimeline = useCallback(() => {
    const panel = panelRef.current;
    // Fix: select actual .sm-prelayer children, NOT the container
    // previous: preLayerElsRef.current referred to container with layers?
    // Let's check where preLayerElsRef is assigned.
    // It is assigned in the render: <div ref={preLayersRef}... > ... children </div>
    // Wait, preLayersRef is the container. 
    // We need the CHILDREN for the animation.
    const layers = preLayersRef.current ? Array.from(preLayersRef.current.children) : [];

    // Safety check
    if (!panel) return null;

    openTlRef.current?.kill();
    if (closeTweenRef.current) {
      closeTweenRef.current.kill();
      closeTweenRef.current = null;
    }
    itemEntranceTweenRef.current?.kill();

    const itemEls = Array.from(panel.querySelectorAll('.sm-panel-itemLabel'));
    const numberEls = Array.from(panel.querySelectorAll('.sm-panel-list[data-numbering] .sm-panel-item'));
    const socialTitle = panel.querySelector('.sm-socials-title');
    const socialLinks = Array.from(panel.querySelectorAll('.sm-socials-link'));

    const offscreen = position === 'left' ? -100 : 100;

    // Reset Elements state for animation
    if (itemEls.length) gsap.set(itemEls, { yPercent: 140, rotate: 10 });
    if (numberEls.length) gsap.set(numberEls, { '--sm-num-opacity': 0 });
    if (socialTitle) gsap.set(socialTitle, { opacity: 0 });
    if (socialLinks.length) gsap.set(socialLinks, { y: 25, opacity: 0 });

    const tl = gsap.timeline({ paused: true });

    // 1. Layers Animation
    if (layers && layers.length) {
      // Ensure they start offscreen (Re-enforce just in case)
      gsap.set(layers, { xPercent: offscreen });

      layers.forEach((el, i) => {
        tl.to(el, { xPercent: 0, duration: 0.5, ease: 'power4.out' }, i * 0.07);
      });
    }

    const lastLayerTime = (layers && layers.length) ? (layers.length - 1) * 0.07 : 0;
    const panelInsertTime = lastLayerTime + ((layers && layers.length) ? 0.05 : 0);
    const panelDuration = 0.65;

    // 2. Panel Animation
    console.log("StaggeredMenu: Building Open Timeline via SET -> TO", { offscreen, panelInsertTime });

    // Explicitly set start state
    gsap.set(panel, { xPercent: offscreen, backgroundColor: panelBg, display: 'flex' });

    // Animate to 0
    tl.to(
      panel,
      { xPercent: 0, duration: panelDuration, ease: 'power4.out' },
      panelInsertTime
    );

    // 3. Content Entrance (Items)
    if (itemEls.length) {
      const itemsStartRatio = 0.3;
      const itemsStart = panelInsertTime + panelDuration * itemsStartRatio;

      tl.to(
        itemEls,
        {
          yPercent: 0,
          rotate: 0,
          duration: 1,
          ease: 'power4.out',
          stagger: { each: 0.1, from: 'start' }
        },
        itemsStart
      );

      // Numbering fade-in
      if (numberEls.length) {
        tl.to(
          numberEls,
          {
            duration: 0.6,
            ease: 'power2.out',
            '--sm-num-opacity': 1,
            stagger: { each: 0.08, from: 'start' }
          },
          itemsStart + 0.1
        );
      }
    }

    // 4. Socials Entrance
    if (socialTitle || socialLinks.length) {
      const socialsStart = panelInsertTime + panelDuration * 0.45;

      if (socialTitle) {
        tl.to(
          socialTitle,
          { opacity: 1, duration: 0.5, ease: 'power2.out' },
          socialsStart
        );
      }

      if (socialLinks.length) {
        tl.to(
          socialLinks,
          {
            y: 0,
            opacity: 1,
            duration: 0.55,
            ease: 'power3.out',
            stagger: { each: 0.08, from: 'start' },
            onComplete: () => {
              gsap.set(socialLinks, { clearProps: 'opacity' });
            }
          },
          socialsStart + 0.05
        );
      }
    }

    openTlRef.current = tl;
    return tl;
  }, [panelBg]);

  const playOpen = useCallback(() => {
    const tl = buildOpenTimeline();
    if (tl) {
      tl.play(0);
    }
  }, [buildOpenTimeline]);

  const playClose = useCallback(() => {
    openTlRef.current?.kill();
    openTlRef.current = null;
    itemEntranceTweenRef.current?.kill();

    const panel = panelRef.current;
    const layers = preLayerElsRef.current;
    if (!panel) return;

    const all = [...layers, panel];
    closeTweenRef.current?.kill();
    const offscreen = position === 'left' ? -100 : 100;
    closeTweenRef.current = gsap.to(all, {
      xPercent: offscreen,
      duration: 0.32,
      ease: 'power3.in',
      overwrite: 'auto',
      onComplete: () => {
        const itemEls = Array.from(panel.querySelectorAll('.sm-panel-itemLabel'));
        if (itemEls.length) {
          gsap.set(itemEls, { yPercent: 140, rotate: 10 });
        }
        const numberEls = Array.from(panel.querySelectorAll('.sm-panel-list[data-numbering] .sm-panel-item'));
        if (numberEls.length) {
          gsap.set(numberEls, { '--sm-num-opacity': 0 });
        }
        const socialTitle = panel.querySelector('.sm-socials-title');
        const socialLinks = Array.from(panel.querySelectorAll('.sm-socials-link'));
        if (socialTitle) gsap.set(socialTitle, { opacity: 0 });
        if (socialLinks.length) gsap.set(socialLinks, { y: 25, opacity: 0 });

        // Ensure overflow is reset
        document.body.style.overflow = "auto";
      }
    });

    // Reset overflow
    document.body.style.overflow = "auto";
  }, [position]);

  const toggleMenu = useCallback(() => {
    const target = !openRef.current;
    openRef.current = target;
    setOpen(target);

    // Toggle body overflow
    document.body.style.overflow = target ? "hidden" : "auto";

    if (target) {
      onMenuOpen?.();
      playOpen();
    } else {
      onMenuClose?.();
      playClose();
    }
  }, [playOpen, playClose, onMenuOpen, onMenuClose]);

  // -- EVENT LISTENER FOR EXTERNAL TOGGLE --
  React.useEffect(() => {
    const handleToggle = () => toggleMenu();
    if (typeof window !== 'undefined') {
      window.addEventListener('menu-toggle', handleToggle);
    }
    return () => {
      if (typeof window !== 'undefined') window.removeEventListener('menu-toggle', handleToggle);
    };
  }, [toggleMenu]);

  const closeMenu = useCallback(() => {
    if (openRef.current) {
      openRef.current = false;
      setOpen(false);
      onMenuClose?.();
      playClose();
    }
  }, [playClose, onMenuClose]);

  React.useEffect(() => {
    if (!closeOnClickAway || !open) return;

    const handleClickOutside = event => {
      if (
        panelRef.current &&
        !panelRef.current.contains(event.target) &&
        toggleBtnRef.current &&
        !toggleBtnRef.current.contains(event.target)
      ) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [closeOnClickAway, open, closeMenu]);

  // Handle Link Click to Close Menu
  const handleLinkClick = (e, link) => {
    if (link.startsWith('#')) {
      e.preventDefault();
      const targetUserElement = document.querySelector(link);
      if (targetUserElement) {
        closeMenu();
        // Smooth scroll after a small delay to allow menu closing (optional)
        setTimeout(() => {
          targetUserElement.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      }
    } else {
      // External link
      closeMenu();
    }
  };

  // Scroll Listener for Stable Sticky Behavior (No Jitter)
  const headerRef = useRef(null);

  React.useEffect(() => {
    const handleScroll = () => {
      if (!headerRef.current) return;

      const heroHeight = window.innerHeight;
      const isPastHero = window.scrollY >= heroHeight;

      // Force fixed if menu is open OR forceVisible is true
      if (openRef.current || forceVisible) {
        headerRef.current.style.position = 'fixed';
        headerRef.current.style.top = '0px';
        return;
      }

      if (isPastHero) {
        // STICKY STATE
        headerRef.current.style.position = 'fixed';
        headerRef.current.style.top = '0px';
      } else {
        // WAITING STATE (Absolute at bottom of previous section)
        headerRef.current.style.position = 'absolute';
        headerRef.current.style.top = '100vh';
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll, { passive: true });
      window.addEventListener('resize', handleScroll);
      // Initial check
      handleScroll();
    }
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', handleScroll);
      }
    };
  }, [open, forceVisible]);

  return (
    <div
      className={(className ? className + ' ' : '') + 'staggered-menu-wrapper'}
      style={accentColor ? { ['--sm-accent']: accentColor } : undefined}
      data-position={position}
      data-open={open || undefined}
    >
      <div ref={preLayersRef} className="sm-prelayers" aria-hidden="true">
        {(() => {
          // Use dynamic currentColors
          let arr = [...currentColors];
          return arr.map((c, i) => <div key={i} className="sm-prelayer" style={{ background: c }} />);
        })()}
      </div>
      <header
        ref={headerRef}
        className="staggered-menu-header"
        aria-label="Main navigation header"
        style={{
          position: 'absolute', // Default start state
          left: 0,
          width: '100%',
          zIndex: 9999,
          willChange: 'position, top',
          top: '100vh'
        }}
      >
        {/* LOGO SECTION (Icon + Text) */}
        <a href="/" className="sm-logo flex items-end gap-3 transition-opacity duration-300 hover:opacity-80" aria-label="Volver al inicio">
          <div
            className="w-10 h-10 bg-current transition-colors duration-500"
            style={{
              backgroundColor: isDay ? '#C01014' : '#FE7102',
              maskImage: 'url(/images/gabisNoF.svg)',
              WebkitMaskImage: 'url(/images/gabisNoF.svg)',
              maskSize: 'contain',
              WebkitMaskSize: 'contain',
              maskRepeat: 'no-repeat',
              WebkitMaskRepeat: 'no-repeat',
              maskPosition: 'center',
              WebkitMaskPosition: 'center'
            }}
          />
          <span
            className={`text-3xl leading-none transition-colors duration-500 ${isDay ? 'font-stardom text-gabis-red' : 'font-tanker text-gabis-orange'}`}
            style={{ color: isDay ? '#C01014' : '#FE7102' }}
          >
            GABIS
          </span>
        </a>

        {/* THEME SWITCHER (Center - Absolute to stay centered regardless of side width) */}
        <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[10000]">
          <MenuSwitcher />
        </div>

        {/* MENU TOGGLE BUTTON (Ghost Style) */}
        <button
          ref={toggleBtnRef}
          onClick={toggleMenu}
          className={`flex items-center gap-3 px-4 py-2 rounded-full border transition-all duration-300 group`}
          style={{
            borderColor: isDay ? 'rgba(192, 16, 20, 0.2)' : 'rgba(254, 113, 2, 0.2)',
            backgroundColor: isDay ? 'rgba(192, 16, 20, 0.05)' : 'rgba(254, 113, 2, 0.05)',
            cursor: 'pointer'
          }}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <span
            className={`text-xl tracking-wider pt-[2px] transition-colors duration-500 group-hover:opacity-80 ${isDay ? 'font-stardom' : 'font-tanker'}`}
            style={{ color: isDay ? '#C01014' : '#FE7102' }}
          >
            MENÚ
          </span>
          {/* Animated Hamburger/X Icon */}
          <div className="relative w-6 h-4">
            <span
              className="absolute top-0 left-0 w-full h-[2px] rounded-full transition-all duration-300"
              style={{
                backgroundColor: isDay ? '#C01014' : '#FE7102',
                transform: open ? 'translateY(7px) rotate(45deg)' : 'translateY(0) rotate(0)',
                transformOrigin: 'center'
              }}
            />
            <span
              className="absolute top-1/2 left-0 w-full h-[2px] rounded-full transition-all duration-300 -translate-y-1/2"
              style={{
                backgroundColor: isDay ? '#C01014' : '#FE7102',
                opacity: open ? 0 : 1,
                transform: open ? 'scaleX(0)' : 'scaleX(1)'
              }}
            />
            <span
              className="absolute bottom-0 left-0 w-full h-[2px] rounded-full transition-all duration-300"
              style={{
                backgroundColor: isDay ? '#C01014' : '#FE7102',
                transform: open ? 'translateY(-7px) rotate(-45deg)' : 'translateY(0) rotate(0)',
                transformOrigin: 'center'
              }}
            />
          </div>
        </button>
      </header>

      <aside
        id="staggered-menu-panel"
        ref={panelRef}
        className="staggered-menu-panel"
        aria-hidden={!open}
        style={{ backgroundColor: panelBg }}
      >
        <div className="sm-panel-inner">
          <ul
            className="sm-panel-list"
            role="list"
            data-numbering={displayItemNumbering || undefined}
            style={{
              '--sm-num-font': numberFont,
              '--sm-num-color': numberColor
            }}
          >
            {items && items.length ? (
              items.map((it, idx) => (
                <li className="sm-panel-itemWrap" key={it.label + idx}>
                  <a
                    className="sm-panel-item"
                    href={it.link}
                    aria-label={it.ariaLabel || it.label}
                    data-index={idx + 1}
                    onClick={(e) => handleLinkClick(e, it.link)}
                    style={{ color: textColor }}
                    onMouseEnter={(e) => e.currentTarget.style.color = hoverColor}
                    onMouseLeave={(e) => e.currentTarget.style.color = textColor}
                  >
                    <span className="sm-panel-itemLabel" style={{ fontFamily: isDay ? 'Stardom' : 'Tanker', letterSpacing: isDay ? 'normal' : '0.05em' }}>
                      {it.label}
                    </span>
                  </a>
                </li>
              ))
            ) : (
              <li className="sm-panel-itemWrap" aria-hidden="true">
                <span className="sm-panel-item">
                  <span className="sm-panel-itemLabel">No items</span>
                </span>
              </li>
            )}
          </ul>
          {displaySocials && socialItems && socialItems.length > 0 && (
            <div className="sm-socials" aria-label="Social links">
              <h3 className="sm-socials-title" style={{ color: hoverColor, fontFamily: isDay ? 'Stardom' : 'Tanker' }}>
                Contáctanos
              </h3>
              <ul className="sm-socials-list" role="list">
                {socialItems.map((s, i) => (
                  <React.Fragment key={s.label + i}>
                    <li className="sm-socials-item">
                      <a
                        href={s.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="sm-socials-link"
                        style={{
                          color: textColor,
                          fontFamily: isDay ? 'Stardom' : 'Tanker',
                          fontSize: '1.25rem',
                          letterSpacing: isDay ? 'normal' : '0.05em'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.color = hoverColor}
                        onMouseLeave={(e) => e.currentTarget.style.color = textColor}
                      >
                        {s.label}
                      </a>
                    </li>
                    {i < socialItems.length - 1 && (
                      <li className="sm-socials-separator" aria-hidden="true" style={{ display: 'flex', alignItems: 'center' }}>
                        <div style={{ width: '1px', height: '1.2em', backgroundColor: textColor, opacity: 0.3 }}></div>
                      </li>
                    )}
                  </React.Fragment>
                ))}
              </ul>
            </div>
          )}
        </div>
      </aside>
    </div>
  );
};

export default StaggeredMenu;
