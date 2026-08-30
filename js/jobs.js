function renderJobs(){
 let k=(qs('#jobSearch')?.value||'').toLowerCase(), loc=qs('#jobLocation')?.value||'', type=qs('#jobType')?.value||'';
 let ex=[...document.querySelectorAll('.expFilter:checked')].map(x=>x.value), modes=[...document.querySelectorAll('.modeFilter:checked')].map(x=>x.value);
 let list=JOBS.filter(j=>(!k||(j.title+' '+j.company+' '+j.skills.join(' ')).toLowerCase().includes(k))&&(!loc||j.location===loc)&&(!type||j.type===type)&&(!ex.length||ex.includes(j.experience))&&(!modes.length||modes.includes(j.mode)));
 if(qs('#sortJobs').value==='salary')list.sort((a,b)=>b.salary-a.salary); else list.sort((a,b)=>a.posted-b.posted);
 qs('#resultCount').textContent=list.length+' jobs found';qs('#jobList').innerHTML=list.length?list.map(jobCard).join(''):'<div class="info-card"><h3>No jobs found</h3><p>Try changing your search or filters.</p></div>';
}
function clearFilters(){qs('#jobSearch').value='';qs('#jobLocation').value='';qs('#jobType').value='';document.querySelectorAll('.expFilter,.modeFilter').forEach(x=>x.checked=false);renderJobs()}
document.addEventListener('DOMContentLoaded',()=>{let p=new URLSearchParams(location.search);qs('#jobSearch').value=p.get('keyword')||'';qs('#jobLocation').value=p.get('location')||'';let type=p.get('type');if(type==='fresher')qs('#jobType').value='Fresher';if(type==='internship')qs('#jobType').value='Internship';renderJobs()});
