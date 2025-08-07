// Global variables
let currentColorScheme = 'brown-cream';
let isNavOpen = false;
let activeSection = 'home';

// Projects data
const projects = [
  {
    id: 1,
    title: "LinkedIn User Study",
    description: "In-depth qualitative research to uncover user pain points and opportunities on LinkedIn's platform.",
    image: "/placeholder.svg?height=300&width=400",
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800"
    ],
    tags: ["User Research", "Data Analysis", "Usability Testing", "Thematic Analysis"],
    category: "research",
    problem: "LinkedIn users were experiencing difficulties with content discovery and professional networking efficiency. The goal was to identify specific pain points and propose evidence-based improvements to enhance user experience.",
    process: [
      "Literature Review",
      "User Interviews (n=12)",
      "Usability Testing",
      "Thematic Analysis",
      "Findings Synthesis",
      "Recommendations"
    ],
    role: "Lead UX Researcher - Conducted interviews, analyzed data, and presented findings to stakeholders.",
    outcome: "Identified 5 key pain points affecting 80% of users, leading to actionable recommendations that could improve user engagement by an estimated 35%.",
    learnings: [
      "Importance of diverse participant recruitment for comprehensive insights",
      "How to balance user needs with business objectives in research findings",
      "Effective techniques for conducting remote user interviews"
    ],
    fullDescription: "A comprehensive user research study examining LinkedIn's user experience through qualitative methods including user interviews and usability testing.",
    figmaLink: "https://figma.com/linkedin-study",
    pdfReport: "https://example.com/linkedin-report.pdf",
    hasCaseStudy: true
  },
  {
    id: 2,
    title: "Headspace App Redesign",
    description: "Rethinking the meditation experience with a focus on accessibility and modern UI principles.",
    image: "/placeholder.svg?height=300&width=400",
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800"
    ],
    tags: ["UX/UI Design", "Prototyping", "Accessibility", "User Flows"],
    category: "design",
    problem: "The existing Headspace app had accessibility issues and outdated visual design that didn't align with modern design principles. Users reported difficulty navigating meditation content and customizing their experience.",
    process: [
      "Competitive Analysis",
      "User Journey Mapping",
      "Wireframing",
      "Visual Design",
      "Prototyping",
      "Usability Testing"
    ],
    role: "UX/UI Designer - Led the complete redesign process from research to high-fidelity prototypes.",
    outcome: "Created a more accessible and visually appealing interface that improved task completion rates by 40% and received positive feedback from accessibility experts.",
    learnings: [
      "How to balance aesthetic appeal with accessibility requirements",
      "The importance of consistent design systems in mobile applications",
      "Effective prototyping techniques for testing complex user flows"
    ],
    fullDescription: "A complete redesign of the Headspace meditation app focusing on improved accessibility, modern visual design, and enhanced user experience.",
    figmaLink: "https://figma.com/headspace-redesign",
    liveDemo: "https://headspace-redesign.example.com",
    hasCaseStudy: true
  },
  {
    id: 3,
    title: "Wellnesstowork App Concept",
    description: "Ideation and design of a mobile application connecting workplace wellness with productivity.",
    image: "/placeholder.svg?height=300&width=400",
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800"
    ],
    tags: ["App Design", "User Stories", "Prototyping", "Concept Development"],
    category: "concept",
    problem: "Remote workers struggle to maintain work-life balance and wellness routines. There was a need for an integrated solution that promotes wellness while enhancing productivity in remote work environments.",
    process: ["Market Research", "User Personas", "Feature Ideation", "User Stories", "Wireframing", "Visual Design"],
    role: "Product Designer - Conceptualized the app from initial idea through high-fidelity designs and user flows.",
    outcome: "Developed a comprehensive app concept with 15+ core features, validated through user feedback sessions with 20+ remote workers.",
    learnings: [
      "How to validate app concepts before development",
      "The importance of understanding target audience pain points deeply",
      "Balancing feature richness with simplicity in mobile design"
    ],
    fullDescription: "A conceptual mobile application designed to help remote workers integrate wellness practices into their daily work routines.",
    figmaLink: "https://figma.com/wellnesstowork-concept",
    hasCaseStudy: true
  },
  {
    id: 4,
    title: "KALMONT Web Design & Development",
    description: "Full-stack web design and development for a modern business website with focus on user experience.",
    image: "/placeholder.svg?height=300&width=400",
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800"
    ],
    tags: ["React", "Tailwind CSS", "Web Design", "Frontend Development"],
    category: "development",
    problem: "KALMONT needed a modern, responsive website that would effectively communicate their brand values while providing an excellent user experience across all devices.",
    process: [
      "Client Requirements",
      "Design System",
      "Responsive Design",
      "React Development",
      "Performance Optimization",
      "Testing & Launch"
    ],
    role: "Full-Stack Designer & Developer - Handled complete project from initial design concepts to final deployment.",
    outcome: "Delivered a high-performance website with 95+ Lighthouse scores, resulting in 60% increase in user engagement and 40% improvement in conversion rates.",
    learnings: [
      "How to balance client requirements with best UX practices",
      "Advanced React patterns for scalable web applications",
      "Performance optimization techniques for modern web development"
    ],
    fullDescription: "A complete web design and development project showcasing modern frontend technologies and user-centered design principles.",
    liveDemo: "https://kalmont.example.com",
    githubRepo: "https://github.com/mishagholami/kalmont-website",
    hasCaseStudy: true
  },
  {
    id: 5,
    title: "Granville Island Redesign Research",
    description: "User research and interviewing study for reimagining Granville Island's public space experience.",
    image: "/placeholder.svg?height=300&width=400",
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800"
    ],
    tags: ["User Research", "Public Space Design", "Ethnographic Study", "Community Engagement"],
    category: "research",
    problem: "Granville Island needed insights into how visitors and locals use the space to inform future development and improve the overall public experience.",
    process: [
      "Stakeholder Interviews",
      "Observational Studies",
      "Visitor Surveys",
      "Data Analysis",
      "Concept Development",
      "Presentation"
    ],
    role: "Lead Researcher - Designed and executed comprehensive research methodology, analyzed findings, and presented recommendations.",
    outcome: "Generated actionable insights from 50+ interviews and observations, leading to 8 key recommendations for improving public space utilization and visitor experience.",
    learnings: [
      "How to conduct ethical research in public spaces",
      "Techniques for engaging diverse community stakeholders",
      "Methods for translating research insights into design recommendations"
    ],
    fullDescription: "A comprehensive user research study examining how people interact with Granville Island's public spaces to inform future design decisions.",
    pdfReport: "https://example.com/granville-island-research.pdf",
    hasCaseStudy: true
  }
];

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
});

// Initialize application
function initializeApp() {
  setupEventListeners();
  loadProjects();
  setupIntersectionObserver();
  setupSkillAnimations();
  loadColorScheme();
  setupScrollEffects();
}

// Event Listeners
function setupEventListeners() {
  // Navigation toggle
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  
  navToggle.addEventListener('click', function() {
    isNavOpen = !isNavOpen;
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
  });

  // Color scheme selector
  const colorSchemeToggle = document.getElementById('colorSchemeToggle');
  const colorSchemePanel = document.getElementById('colorSchemePanel');
  
  colorSchemeToggle.addEventListener('click', function(e) {
    e.stopPropagation();
    colorSchemePanel.classList.toggle('active');
  });

  // Close color scheme panel when clicking outside
  document.addEventListener('click', function(e) {
    if (!colorSchemePanel.contains(e.target) && !colorSchemeToggle.contains(e.target)) {
      colorSchemePanel.classList.remove('active');
    }
  });

  // Color scheme options
  const schemeOptions = document.querySelectorAll('.scheme-option');
  schemeOptions.forEach(option => {
    option.addEventListener('click', function() {
      const scheme = this.dataset.scheme;
      changeColorScheme(scheme);
      
      // Update active state
      schemeOptions.forEach(opt => opt.classList.remove('active'));
      this.classList.add('active');
      
      // Close panel
      colorSchemePanel.classList.remove('active');
    });
  });

  // Contact form
  const contactForm = document.getElementById('contactForm');
  contactForm.addEventListener('submit', handleContactForm);

  // Modal close
  const modal = document.getElementById('projectModal');
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Scroll events
  window.addEventListener('scroll', handleScroll);
  
  // Resize events
  window.addEventListener('resize', handleResize);
}

// Scroll handling
function handleScroll() {
  const navbar = document.getElementById('navbar');
  const scrolled = window.scrollY > 50;
  
  if (scrolled) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
  
  updateActiveNavLink();
}

// Update active navigation link
function updateActiveNavLink() {
  const sections = ['home', 'about', 'skills', 'projects', 'contact'];
  const navLinks = document.querySelectorAll('.nav-link');
  
  let currentSection = 'home';
  
  sections.forEach(sectionId => {
    const element = document.getElementById(sectionId);
    if (element) {
      const rect = element.getBoundingClientRect();
      if (rect.top <= 100 && rect.bottom >= 100) {
        currentSection = sectionId;
      }
    }
  });
  
  if (currentSection !== activeSection) {
    activeSection = currentSection;
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.dataset.section === currentSection) {
        link.classList.add('active');
      }
    });
  }
}

// Smooth scroll to section
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    const offsetTop = element.offsetTop - 80;
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
  }
  
  // Close mobile menu if open
  if (isNavOpen) {
    const navMenu = document.getElementById('navMenu');
    const navToggle = document.getElementById('navToggle');
    navMenu.classList.remove('active');
    navToggle.classList.remove('active');
    isNavOpen = false;
  }
}

// Scroll to top
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Color scheme management
function changeColorScheme(scheme) {
  currentColorScheme = scheme;
  document.documentElement.setAttribute('data-theme', scheme);
  localStorage.setItem('portfolio-color-scheme', scheme);
}

function loadColorScheme() {
  const saved = localStorage.getItem('portfolio-color-scheme');
  if (saved && ['brown-cream', 'sage-mint', 'navy-gold'].includes(saved)) {
    changeColorScheme(saved);
    
    // Update active option
    const schemeOptions = document.querySelectorAll('.scheme-option');
    schemeOptions.forEach(option => {
      option.classList.remove('active');
      if (option.dataset.scheme === saved) {
        option.classList.add('active');
      }
    });
  }
}

// Load projects
function loadProjects() {
  const projectsGrid = document.getElementById('projectsGrid');
  projectsGrid.innerHTML = '';
  
  projects.forEach((project, index) => {
    const projectCard = createProjectCard(project, index);
    projectsGrid.appendChild(projectCard);
  });
}

// Create project card
function createProjectCard(project, index) {
  const card = document.createElement('div');
  card.className = 'project-card';
  card.style.animationDelay = `${index * 0.1}s`;
  
  const categoryColors = {
    research: 'research',
    design: 'design',
    development: 'development',
    concept: 'concept'
  };
  
  const caseStudyColors = {
    1: 'purple',
    2: 'purple', 
    3: 'green',
    4: 'blue',
    5: 'teal'
  };
  
  card.innerHTML = `
    <div class="project-image">
      <img src="${project.image}" alt="${project.title}">
      <div class="project-overlay"></div>
      <div class="project-category ${categoryColors[project.category]}">
        <i class="fas fa-${getCategoryIcon(project.category)}"></i>
        ${project.category.charAt(0).toUpperCase() + project.category.slice(1)}
      </div>
      ${project.hasCaseStudy ? `
        <div class="case-study-badge ${caseStudyColors[project.id]}">
          Case Study Available
        </div>
      ` : ''}
    </div>
    <div class="project-content">
      <h3 class="project-title">${project.title}</h3>
      <p class="project-description">${project.description}</p>
      <div class="project-tags">
        ${project.tags.slice(0, 3).map(tag => `<span class="project-tag">${tag}</span>`).join('')}
        ${project.tags.length > 3 ? `<span class="project-tag extra">+${project.tags.length - 3}</span>` : ''}
      </div>
      <div class="project-footer">
        <span class="project-role">${project.role}</span>
        <div class="project-actions">
          ${project.hasCaseStudy ? `
            <button class="project-action case-study ${caseStudyColors[project.id]}" onclick="openCaseStudy(${project.id})" title="View detailed case study">
              <i class="fas fa-eye"></i>
            </button>
          ` : ''}
          <button class="project-action details" onclick="openProjectModal(${project.id})" title="View project details">
            <i class="fas fa-external-link-alt"></i>
          </button>
        </div>
      </div>
    </div>
  `;
  
  return card;
}

// Get category icon
function getCategoryIcon(category) {
  const icons = {
    research: 'search',
    design: 'palette',
    development: 'code',
    concept: 'lightbulb'
  };
  return icons[category] || 'circle';
}

// Open case study (placeholder - would navigate to case study pages)
function openCaseStudy(projectId) {
  // In a real implementation, this would navigate to the case study page
  console.log(`Opening case study for project ${projectId}`);
  alert(`Case study for project ${projectId} would open here. In the React version, this navigates to detailed case study pages.`);
}

// Open project modal
function openProjectModal(projectId) {
  const project = projects.find(p => p.id === projectId);
  if (!project) return;
  
  const modal = document.getElementById('projectModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalDescription = document.getElementById('modalDescription');
  const modalBody = document.getElementById('modalBody');
  
  modalTitle.textContent = project.title;
  modalDescription.textContent = project.description;
  
  modalBody.innerHTML = `
    <div style="display: grid; gap: 2rem;">
      <!-- Image Gallery -->
      <div>
        <h3 style="font-size: 1.5rem; font-weight: 700; color: var(--accent-800); margin-bottom: 1rem;">Project Visuals</h3>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1rem;">
          ${project.images.map((image, index) => `
            <div style="border-radius: 0.75rem; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
              <img src="${image}" alt="${project.title} visual ${index + 1}" style="width: 100%; height: 16rem; object-fit: cover;">
            </div>
          `).join('')}
        </div>
      </div>
      
      <!-- Project Details -->
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem;">
        <div style="background: var(--primary-100); padding: 1.5rem; border-radius: 0.75rem;">
          <div style="display: flex; align-items: center; margin-bottom: 1rem;">
            <i class="fas fa-target" style="color: var(--accent-600); margin-right: 0.75rem;"></i>
            <h4 style="font-size: 1.25rem; font-weight: 700; color: var(--accent-800);">Problem & Goals</h4>
          </div>
          <p style="color: var(--accent-700); line-height: 1.6;">${project.problem}</p>
        </div>
        
        <div style="background: var(--primary-100); padding: 1.5rem; border-radius: 0.75rem;">
          <div style="display: flex; align-items: center; margin-bottom: 1rem;">
            <i class="fas fa-users" style="color: var(--accent-600); margin-right: 0.75rem;"></i>
            <h4 style="font-size: 1.25rem; font-weight: 700; color: var(--accent-800);">My Role</h4>
          </div>
          <p style="color: var(--accent-700); line-height: 1.6;">${project.role}</p>
        </div>
      </div>
      
      <!-- Process -->
      <div style="background: var(--primary-100); padding: 1.5rem; border-radius: 0.75rem;">
        <h4 style="font-size: 1.25rem; font-weight: 700; color: var(--accent-800); margin-bottom: 1rem;">Design Process</h4>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem;">
          ${project.process.map((step, index) => `
            <div style="background: var(--primary-50); padding: 1rem; border-radius: 0.5rem; border: 1px solid var(--accent-200);">
              <div style="display: flex; align-items: center; margin-bottom: 0.5rem;">
                <span style="width: 1.5rem; height: 1.5rem; background: var(--accent-300); color: var(--accent-800); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.875rem; font-weight: 700; margin-right: 0.75rem;">${index + 1}</span>
                <span style="font-weight: 500; color: var(--accent-800);">${step}</span>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
      
      <!-- Outcome & Learnings -->
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem;">
        <div style="background: var(--primary-100); padding: 1.5rem; border-radius: 0.75rem;">
          <div style="display: flex; align-items: center; margin-bottom: 1rem;">
            <i class="fas fa-check-circle" style="color: var(--accent-600); margin-right: 0.75rem;"></i>
            <h4 style="font-size: 1.25rem; font-weight: 700; color: var(--accent-800);">Outcome</h4>
          </div>
          <p style="color: var(--accent-700); line-height: 1.6;">${project.outcome}</p>
        </div>
        
        <div style="background: var(--primary-100); padding: 1.5rem; border-radius: 0.75rem;">
          <div style="display: flex; align-items: center; margin-bottom: 1rem;">
            <i class="fas fa-lightbulb" style="color: var(--accent-600); margin-right: 0.75rem;"></i>
            <h4 style="font-size: 1.25rem; font-weight: 700; color: var(--accent-800);">Key Learnings</h4>
          </div>
          <ul style="list-style: none; padding: 0;">
            ${project.learnings.map(learning => `
              <li style="display: flex; align-items: flex-start; color: var(--accent-700); margin-bottom: 0.5rem;">
                <span style="width: 0.5rem; height: 0.5rem; background: var(--accent-400); border-radius: 50%; margin-top: 0.5rem; margin-right: 0.75rem; flex-shrink: 0;"></span>
                ${learning}
              </li>
            `).join('')}
          </ul>
        </div>
      </div>
      
      <!-- Technologies -->
      <div>
        <h4 style="font-size: 1.25rem; font-weight: 700; color: var(--accent-800); margin-bottom: 1rem;">Methods & Technologies</h4>
        <div style="display: flex; flex-wrap: wrap; gap: 0.75rem;">
          ${project.tags.map(tag => `
            <span style="padding: 0.5rem 1rem; background: var(--accent-200); color: var(--accent-700); border-radius: 9999px; font-weight: 500;">${tag}</span>
          `).join('')}
        </div>
      </div>
      
      <!-- Links -->
      <div style="display: flex; flex-wrap: wrap; gap: 1rem; padding-top: 1rem; border-top: 1px solid var(--accent-200);">
        ${project.liveDemo ? `
          <a href="${project.liveDemo}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
            <i class="fas fa-external-link-alt"></i>
            Live Demo
          </a>
        ` : ''}
        ${project.figmaLink ? `
          <a href="${project.figmaLink}" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.75rem 1.5rem; background: #8b5cf6; color: white; border-radius: 9999px; font-weight: 500; text-decoration: none; transition: all 0.3s ease;">
            <i class="fab fa-figma"></i>
            Figma Prototype
          </a>
        ` : ''}
        ${project.githubRepo ? `
          <a href="${project.githubRepo}" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.75rem 1.5rem; background: #1f2937; color: white; border-radius: 9999px; font-weight: 500; text-decoration: none; transition: all 0.3s ease;">
            <i class="fab fa-github"></i>
            View Code
          </a>
        ` : ''}
        ${project.pdfReport ? `
          <a href="${project.pdfReport}" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.75rem 1.5rem; background: #dc2626; color: white; border-radius: 9999px; font-weight: 500; text-decoration: none; transition: all 0.3s ease;">
            <i class="fas fa-file-text"></i>
            Research Report
          </a>
        ` : ''}
      </div>
    </div>
  `;
  
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal() {
  const modal = document.getElementById('projectModal');
  modal.classList.remove('active');
  document.body.style.overflow = 'auto';
}

// Handle contact form
function handleContactForm(e) {
  e.preventDefault();
  
  const formData = new FormData(e.target);
  const data = {
    firstName: formData.get('firstName'),
    lastName: formData.get('lastName'),
    email: formData.get('email'),
    subject: formData.get('subject'),
    message: formData.get('message')
  };
  
  // Simulate form submission
  console.log('Form submitted:', data);
  alert('Thank you for your message! I\'ll get back to you soon.');
  
  // Reset form
  e.target.reset();
}

// Setup intersection observer for animations
function setupIntersectionObserver() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in-up');
      }
    });
  }, observerOptions);
  
  // Observe sections
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    observer.observe(section);
  });
  
  // Observe cards and items
  const cards = document.querySelectorAll('.project-card, .skill-category, .interest-item');
  cards.forEach(card => {
    observer.observe(card);
  });
}

// Setup skill animations
function setupSkillAnimations() {
  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const skillBars = entry.target.querySelectorAll('.skill-progress');
        skillBars.forEach(bar => {
          const level = bar.dataset.level;
          setTimeout(() => {
            bar.style.width = level + '%';
          }, 300);
        });
      }
    });
  }, { threshold: 0.5 });
  
  const skillsSection = document.getElementById('skills');
  if (skillsSection) {
    skillObserver.observe(skillsSection);
  }
}

// Setup scroll effects
function setupScrollEffects() {
  // Parallax effect for hero decorations
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const decorations = document.querySelectorAll('.decoration-circle, .decoration-dot');
    
    decorations.forEach((decoration, index) => {
      const speed = 0.5 + (index * 0.1);
      const yPos = -(scrolled * speed);
      decoration.style.transform = `translateY(${yPos}px)`;
    });
  });
}

// Handle resize
function handleResize() {
  // Close mobile menu on resize to desktop
  if (window.innerWidth > 768 && isNavOpen) {
    const navMenu = document.getElementById('navMenu');
    const navToggle = document.getElementById('navToggle');
    navMenu.classList.remove('active');
    navToggle.classList.remove('active');
    isNavOpen = false;
  }
}

// Utility functions
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

function throttle(func, limit) {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  }
}

// Export functions for global access
window.scrollToSection = scrollToSection;
window.scrollToTop = scrollToTop;
window.openProjectModal = openProjectModal;
window.openCaseStudy = openCaseStudy;
window.closeModal = closeModal;
