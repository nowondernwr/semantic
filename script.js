document.getElementById('year').textContent = new Date().getFullYear();

const topbar = document.querySelector('.topbar');
let previous = window.scrollY;
window.addEventListener('scroll', () => {
  const now = window.scrollY;
  topbar.style.opacity = (now > previous && now > 160) ? '.72' : '1';
  previous = now;
}, {passive:true});
