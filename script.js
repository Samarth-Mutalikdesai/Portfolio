// Typing effect
const roles = ['ML models','computer vision systems','explainable AI','clean web interfaces'];
const el = document.getElementById('typed');
let r = 0, c = 0, del = false;
function type(){
  const word = roles[r];
  el.textContent = word.slice(0, c);
  if(!del && c++ === word.length){ del = true; return setTimeout(type, 1400); }
  if(del && c-- === 0){ del = false; r = (r + 1) % roles.length; }
  setTimeout(type, del ? 40 : 80);
}
type();

// Scroll reveal
const io = new IntersectionObserver(es => es.forEach(e => {
  if(e.isIntersecting) e.target.classList.add('show');
}), {threshold: .12});
document.querySelectorAll('.reveal').forEach(s => io.observe(s));