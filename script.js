const el = document.getElementById('data');
if(el){
    const d = new Date();
    const pad = n => String(n).padStart(2,'0');
    el.textContent = `${pad(d.getDate())}/${pad(d.getMonth()+1)}/${d.getFullYear()}`;
}