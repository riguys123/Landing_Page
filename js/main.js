/**
 * StockMaster Pro - Main JavaScript
 * Interacciones UI, ScrollSpy, Animaciones y Funcionalidades Vanilla JS
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // -------------------------------------------------------------------------
  // 1. Elementos Clave del DOM
  // -------------------------------------------------------------------------
  const navbar = document.querySelector('.navbar-custom');
  const navLinks = document.querySelectorAll('.navbar-custom .nav-link');
  const navbarCollapse = document.querySelector('.navbar-collapse');
  const backToTopBtn = document.getElementById('btnBackToTop');
  const sections = document.querySelectorAll('section[id], header[id]');
  const revealElements = document.querySelectorAll('.reveal-item');

  // -------------------------------------------------------------------------
  // 2. Efecto Glassmorphism & Sombra en Navbar al hacer Scroll
  // -------------------------------------------------------------------------
  const handleNavbarScroll = () => {
    if (!navbar) return;
    if (window.scrollY > 40) {
      navbar.classList.add('navbar-scrolled');
    } else {
      navbar.classList.remove('navbar-scrolled');
    }
  };

  window.addEventListener('scroll', handleNavbarScroll, { passive: true });
  handleNavbarScroll(); // Comprobar estado inicial al cargar

  // -------------------------------------------------------------------------
  // 3. Cerrar automáticamente el menú móvil al hacer clic en un enlace
  // -------------------------------------------------------------------------
  if (navbarCollapse) {
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (navbarCollapse.classList.contains('show')) {
          // Usar la API de Bootstrap si está cargada
          const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
          if (bsCollapse) {
            bsCollapse.hide();
          } else {
            navbarCollapse.classList.remove('show');
          }
        }
      });
    });
  }

  // -------------------------------------------------------------------------
  // 4. ScrollSpy Dinámico (Destacar enlace activo según sección visible)
  // -------------------------------------------------------------------------
  const handleScrollSpy = () => {
    const scrollPosition = window.scrollY + 120; // Offset para la barra superior

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  };

  window.addEventListener('scroll', handleScrollSpy, { passive: true });

  // -------------------------------------------------------------------------
  // 5. Botón "Volver Arriba" (Back To Top)
  // -------------------------------------------------------------------------
  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 350) {
        backToTopBtn.classList.add('active');
      } else {
        backToTopBtn.classList.remove('active');
      }
    }, { passive: true });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // -------------------------------------------------------------------------
  // 6. Animaciones de Entrada Suave al Hacer Scroll (Intersection Observer)
  // -------------------------------------------------------------------------
  if ('IntersectionObserver' in window && revealElements.length > 0) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // Añadir retraso escalonado sutil para elementos contiguos
          setTimeout(() => {
            entry.target.classList.add('revealed');
          }, index * 40);
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    // Respaldo para navegadores antiguos: mostrar directamente
    revealElements.forEach(el => el.classList.add('revealed'));
  }

  // -------------------------------------------------------------------------
  // 7. Simulación Interactiva en el Mockup / Modal de Demostración
  // -------------------------------------------------------------------------
  const mockupSearchInput = document.getElementById('mockupSearchInput');
  const mockupRows = document.querySelectorAll('.mockup-table tbody tr');

  if (mockupSearchInput && mockupRows.length > 0) {
    mockupSearchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      mockupRows.forEach(row => {
        const text = row.innerText.toLowerCase();
        if (text.includes(query)) {
          row.style.display = '';
        } else {
          row.style.display = 'none';
        }
      });
    });
  }

  // Alertas sutiles al pulsar botones de acciones en la demo
  window.triggerMockupAction = (actionName, itemName) => {
    const feedbackToast = document.getElementById('demoToastFeedback');
    const toastMessage = document.getElementById('demoToastMessage');
    
    if (feedbackToast && toastMessage && window.bootstrap) {
      toastMessage.textContent = `Acción simulada: "${actionName}" sobre "${itemName}" registrada con éxito.`;
      const toastInstance = new bootstrap.Toast(feedbackToast, { delay: 2800 });
      toastInstance.show();
    } else {
      alert(`[Modo Demo] Acción: ${actionName} en ${itemName}`);
    }
  };

  // -------------------------------------------------------------------------
  // 8. Log de inicialización en consola
  // -------------------------------------------------------------------------
  console.log('%cStockMaster Pro Landing Page %c🚀 Inicializada con éxito', 
    'background: #2563eb; color: #fff; padding: 4px 8px; border-radius: 4px; font-weight: bold;',
    'color: #0f172a; font-weight: 500;'
  );
});
