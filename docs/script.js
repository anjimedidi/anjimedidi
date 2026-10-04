'use strict';
const menu = document.querySelector('#menu');
const nav = document.querySelector('#nav');
menu.addEventListener('click', () => { const open = menu.getAttribute('aria-expanded') !== 'true'; menu.setAttribute('aria-expanded', String(open)); nav.classList.toggle('open', open); });
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {nav.classList.remove('open');menu.setAttribute('aria-expanded','false');}));
document.querySelector('#year').textContent = new Date().getFullYear();
const observer = new IntersectionObserver(entries => { entries.forEach(entry => {if(entry.isIntersecting){nav.querySelectorAll('a').forEach(link => link.classList.toggle('active',link.hash === '#' + entry.target.id));}});},{rootMargin:'-15% 0px -60% 0px'});
document.querySelectorAll('main section').forEach(section => observer.observe(section));
const records = {
 synthesis: {id:'RTL_SYS_001 / IN DEVELOPMENT',title:'RTL-to-gates synthesis flow',content:'<h3>Objective</h3><p>Make a personal RTL synthesis flow easier to configure, run and review across public technology libraries.</p><h3>Workflow</h3><p>RTL and configuration feed the synthesis flow. Technology selection chooses the corresponding SKY130 or Nangate45 library target. Reports provide the evidence for reviewing each run.</p><h3>Current focus</h3><p>Configuration and execution scripts, technology selection, and useful reporting. Measured area, timing and cell results will be added once reproducible public runs are available.</p>'},
 automation: {id:'AUTO_SYS_002 / DEVELOPMENT DIRECTION',title:'Engineering automation',content:'<h3>Objective</h3><p>Reduce repetitive engineering work and make run status and results easier to understand.</p><h3>Areas of exploration</h3><p>Python and Shell utilities, regression interfaces, checklist workflows and report generation.</p><h3>Evidence to publish</h3><p>Independent source code, example inputs, screenshots and a reproducible usage guide as public implementations become available.</p>'},
 verification: {id:'VERIFY_SYS_003 / LEARNING DIRECTION',title:'Protocol & verification lab',content:'<h3>Objective</h3><p>Connect protocol theory with practical design and verification, one well-understood block at a time.</p><h3>Areas of study</h3><p>Digital logic, SystemVerilog testbenches, assertions, APB and AXI protocol behavior, and waveform debugging.</p><h3>Evidence to publish</h3><p>Small RTL designs, test scenarios and explanations of the bugs and corner cases they expose. This record describes a learning direction rather than a completed verification environment.</p>'}
};
const dialog = document.querySelector('#project-dialog');
document.querySelectorAll('[data-project]').forEach(button => button.addEventListener('click', () => {const record=records[button.dataset.project];document.querySelector('#dialog-id').textContent=record.id;document.querySelector('#dialog-title').textContent=record.title;document.querySelector('#dialog-content').innerHTML=record.content;dialog.showModal();}));
dialog.querySelector('.close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();}});
