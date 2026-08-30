document.addEventListener('DOMContentLoaded',()=>{let el=qs('#featuredJobs');if(el)el.innerHTML=JOBS.slice(0,6).map(jobCard).join('')});
function searchFromHome(){let k=qs('#homeKeyword').value.trim(),l=qs('#homeLocation').value.trim();location.href='jobs.html?keyword='+encodeURIComponent(k)+'&location='+encodeURIComponent(l)}
function quickSearch(k){location.href='jobs.html?keyword='+encodeURIComponent(k)}
