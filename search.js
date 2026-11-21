function normalizeSearch(value){return String(value).normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[’']/g,'').replace(/[^a-z0-9\u1780-\u17ff]+/g,' ').trim()}
function matchesProject(project,query,category,location){
 const haystack=normalizeSearch([project.name,project.place,project.category,project.scope,project.story,window.i18n?i18n.searchText(project):''].join(' '));
 const words=normalizeSearch(query).split(' ').filter(Boolean);
 return words.every(word=>haystack.includes(word))&&(category==='all'||project.category===category)&&(location==='all'||normalizeSearch(project.place).includes(normalizeSearch(location)));
}
