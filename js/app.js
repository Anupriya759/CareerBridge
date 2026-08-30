const JOBS=[
{id:1,title:'Java Developer - Fresher',company:'TechNova Solutions',location:'Chennai',type:'Fresher',mode:'On-site',experience:'Fresher',salary:5.2,skills:['Java','Spring Boot','MySQL'],posted:1,desc:'Build and maintain Java applications with a collaborative engineering team.'},
{id:2,title:'Frontend Developer Intern',company:'PixelCraft',location:'Bangalore',type:'Internship',mode:'On-site',experience:'Fresher',salary:3.0,skills:['HTML','CSS','JavaScript'],posted:2,desc:'Work on responsive web interfaces and learn modern frontend development.'},
{id:3,title:'Python Developer',company:'DataSphere',location:'Hyderabad',type:'Full Time',mode:'Remote',experience:'1-2 years',salary:7.5,skills:['Python','Django','SQL'],posted:3,desc:'Develop backend services and data-driven applications using Python.'},
{id:4,title:'Data Analyst - Fresher',company:'InsightWorks',location:'Remote',type:'Fresher',mode:'Remote',experience:'Fresher',salary:5.8,skills:['Excel','SQL','Power BI'],posted:4,desc:'Analyze business data and create dashboards that support decisions.'},
{id:5,title:'Software Engineer',company:'CloudCore',location:'Bangalore',type:'Full Time',mode:'On-site',experience:'1-2 years',salary:8.8,skills:['Java','AWS','SQL'],posted:5,desc:'Design scalable services and contribute to cloud-based products.'},
{id:6,title:'UI/UX Design Intern',company:'DesignHub',location:'Chennai',type:'Internship',mode:'Remote',experience:'Fresher',salary:2.5,skills:['Figma','UI Design','Prototyping'],posted:6,desc:'Create user-friendly designs and prototypes for digital products.'},
{id:7,title:'React Developer - Fresher',company:'WebWorks',location:'Madurai',type:'Fresher',mode:'On-site',experience:'Fresher',salary:4.8,skills:['React','JavaScript','CSS'],posted:7,desc:'Build modern frontend features using React and JavaScript.'},
{id:8,title:'QA Engineer',company:'QualityFirst',location:'Hyderabad',type:'Full Time',mode:'Remote',experience:'1-2 years',salary:6.4,skills:['Testing','Selenium','Java'],posted:8,desc:'Create test cases and automate web application testing.'}
];
const COMPANIES=[
{name:'TechNova Solutions',city:'Chennai',icon:'TN',about:'Technology company building enterprise software and digital solutions.',jobs:2},
{name:'PixelCraft',city:'Bangalore',icon:'PC',about:'Creative technology team focused on modern web experiences.',jobs:1},
{name:'DataSphere',city:'Hyderabad',icon:'DS',about:'Data and software company helping businesses use data effectively.',jobs:1},
{name:'InsightWorks',city:'Remote',icon:'IW',about:'Analytics-focused organization building data products.',jobs:1},
{name:'CloudCore',city:'Bangalore',icon:'CC',about:'Cloud engineering team delivering scalable software platforms.',jobs:1},
{name:'DesignHub',city:'Chennai',icon:'DH',about:'Design-led digital product studio.',jobs:1},
{name:'WebWorks',city:'Madurai',icon:'WW',about:'Web development company creating responsive business applications.',jobs:1},
{name:'QualityFirst',city:'Hyderabad',icon:'QF',about:'Quality engineering and software testing organization.',jobs:1}
];
function qs(s){return document.querySelector(s)}
function getSaved(){return JSON.parse(localStorage.getItem('careerbridge_saved')||'[]')}
function setSaved(a){localStorage.setItem('careerbridge_saved',JSON.stringify(a))}
function isSaved(id){return getSaved().includes(Number(id))}
function toggleSave(id){id=Number(id);let a=getSaved();a=a.includes(id)?a.filter(x=>x!==id):[...a,id];setSaved(a);showToast(a.includes(id)?'Job saved!':'Job removed from saved jobs.'); if(window.renderJobs) renderJobs(); if(window.renderSaved) renderSaved()}
function showToast(text){let t=document.createElement('div');t.className='toast';t.textContent=text;document.body.appendChild(t);setTimeout(()=>t.remove(),2200)}
function jobCard(j){return `<article class="job-card"><div><span class="tag">${j.type}</span><span class="tag">${j.mode}</span></div><h3><a href="job.html?id=${j.id}">${j.title}</a></h3><p><strong>${j.company}</strong> · ${j.location}</p><div class="job-meta">${j.skills.map(s=>`<span class="tag">${s}</span>`).join('')}</div><div class="job-footer"><span class="salary">₹${j.salary} LPA</span><button class="save-btn ${isSaved(j.id)?'saved':''}" onclick="toggleSave(${j.id})">${isSaved(j.id)?'★ Saved':'☆ Save'}</button></div></article>`}
function companyCard(c){return `<article class="company-card"><div class="company-logo">${c.icon}</div><h3>${c.name}</h3><p>📍 ${c.city}</p><p style="margin-top:8px">${c.about}</p><a class="btn btn-outline" href="company.html?name=${encodeURIComponent(c.name)}">View company</a></article>`}
function getCurrentUser(){return JSON.parse(localStorage.getItem('careerbridge_user')||'null')}
function logout(){localStorage.removeItem('careerbridge_user');location.href='index.html'}
