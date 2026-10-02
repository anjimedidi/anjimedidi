const menuButton = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('#mobile-nav');
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  mobileNav.hidden = !open;
});
mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  mobileNav.hidden = true;
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open navigation');
}));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && !mobileNav.hidden) {
    mobileNav.hidden = true;
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation');
    menuButton.focus();
  }
});
document.querySelector('#year').textContent = new Date().getFullYear();
const projects = {
  release: {
    label: 'RTL IP RELEASE QUALITY', title: 'From results to release readiness.',
    intro: 'My work involves quality analysis and review around PCIe RTL IP controller and subsystem releases.',
    items: ['Review simulation results, performance tests, and known failures.', 'Review lint, CDC, synthesis, and equivalence status.', 'Check delivery contents and technical documentation.', 'Bring findings, limitations, and pending checks into release notes and review discussions.'],
    note: 'This is an overview of my engineering responsibilities. Customer-specific material is not included.'
  },
  debug: {
    label: 'SIMULATION & INVESTIGATION', title: 'Following the failure.',
    intro: 'I use simulation output, waveforms, assertions, and tool logs to investigate testbench failures and unexpected behaviour.',
    items: ['Identify the first useful failure rather than its downstream symptoms.', 'Compare expected activity with observed signal behaviour.', 'Investigate assertion conditions, progress, and timeout behaviour.', 'Summarize the evidence so the next debug step is clear.'],
    note: 'Tools in my workflow include Xcelium, SimVision, and VCS.'
  },
  automation: {
    label: 'TOOLS & PROJECTS IN DEVELOPMENT', title: 'Making the workflow repeatable.',
    intro: 'I develop engineering utilities and explore tools that reduce manual work around release and regression flows.',
    items: ['Python and Shell utilities for setup, checks, and reporting.', 'PyQt5 interfaces for running scripts and reviewing results.', 'Release dashboard and regression manager projects.', 'Peer-review automation and document RAG assistant concepts.'],
    note: 'The dashboard, regression manager, and AI assistant concepts are at different stages of development; this page does not present them as finished products.'
  }
};
const dialog = document.querySelector('#project-dialog');
document.querySelectorAll('[data-project]').forEach(button => button.addEventListener('click', () => {
  const project = projects[button.dataset.project];
  document.querySelector('#dialog-label').textContent = project.label;
  document.querySelector('#dialog-title').textContent = project.title;
  document.querySelector('#dialog-intro').textContent = project.intro;
  document.querySelector('#dialog-note').textContent = project.note;
  const list = document.querySelector('#dialog-list');
  list.replaceChildren(...project.items.map(text => { const li = document.createElement('li'); li.textContent = text; return li; }));
  dialog.showModal();
}));
document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) { const r=dialog.getBoundingClientRect(); if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom) dialog.close(); } });
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
  }), {threshold: .08});
  document.querySelectorAll('.section-heading, .work-card, .paper, .timeline article, .tool-grid article, .writing-layout').forEach(element => { element.classList.add('reveal'); observer.observe(element); });
}
