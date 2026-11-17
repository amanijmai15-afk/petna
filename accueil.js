// Page d'accueil / répertoire : les liens HTML sont déclarés dans accueil.html.
document.addEventListener('DOMContentLoaded',()=>{const n=document.querySelectorAll('.cards .tile').length;
    const c=document.getElementById('page-count');if(c)c.textContent=n+' rubriques';});
