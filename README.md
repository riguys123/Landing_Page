# StockMaster Pro - Landing Page

Landing Page moderna, responsiva y profesional para la presentación de la aplicación web full-stack de **Gestión de Productos y Categorías**, desarrollada con **Spring Boot 3, SQLite, Thymeleaf y Bootstrap 5**.

---

## 🚀 Características Principales

- **Diseño Mobile-First**: Adaptabilidad en smartphones, tablets y pantallas de escritorio.
- **Estética SaaS Corporativa**: Paleta de colores en tonos azul/gris tech (`#2563eb`, `#0f172a`), tipografía *Plus Jakarta Sans* y componentes con micro-interacciones.
- **Mockup Estilizado**: Representación visual de la interfaz de la aplicación con tabla de productos, indicadores de inventario y barra de búsqueda interactiva.
- **ScrollSpy & Smooth Scroll**: Navegación fluida entre secciones con detección de posición activa en el Navbar.
- **Navbar Glassmorphism**: Efecto de desenfoque translúcido y elevación con sombra al scrollear.
- **Animaciones Sutiles**: Efectos de revelado con `IntersectionObserver` y elementos flotantes animados en CSS puro.
- **Modal de Demostración**: Modal interactivo que describe los módulos de Productos, Categorías y Persistencia SQLite.

---

## 📂 Estructura del Proyecto

```text
lab8-Landing Page/
├── index.html          # Código HTML5 semántico con las 6 secciones requeridas
├── css/
│   └── styles.css      # Reglas CSS3, variables globales y estilos del mockup
├── js/
│   └── main.js         # Lógica Vanilla JS para scroll, animaciones y eventos interactivos
└── README.md           # Documentación del proyecto
```

---

## 🛠️ Tecnologías Empleadas

- **HTML5 Semántico**: Estructuración accesible con etiquetas nativas (`header`, `nav`, `main`, `section`, `footer`).
- **Bootstrap 5.3.3**: Sistema de rejilla flexible, utilidades responsivas y componentes interactivos (Navbar, Modal, Pills, Toasts).
- **Bootstrap Icons 1.11.3**: Iconografía vectorial nítida y ligera.
- **CSS3 Personalizado**: Variables CSS, gradientes sutiles y animación `floatSlow`.
- **Vanilla JavaScript**: Lógica sin librerías pesadas para máxima velocidad de carga.

---

## 🌐 Cómo Visualizar y Desplegar

### 1. Vista previa local rápida
Puedes abrir directamente el archivo `index.html` en cualquier navegador web moderno (Google Chrome, Edge, Firefox, Safari).

Alternativamente, si usas VS Code o cualquier servidor local:
```bash
# Con extensión Live Server en VS Code o usando un servidor HTTP simple de Python:
python -m http.server 8000
```
Luego abre `http://localhost:8000` en tu navegador.

### 2. Despliegue en GitHub Pages (Sitio Estático)
1. Sube este repositorio a tu cuenta de GitHub.
2. Dirígete a **Settings > Pages**.
3. En **Branch**, selecciona `main` (o `master`) y la carpeta `/ (root)`.
4. Haz clic en **Save** y tu landing page estará disponible públicamente en la URL proporcionada.

---

*Proyecto desarrollado para la asignatura de Desarrollo de Software (Laboratorio 8).*
