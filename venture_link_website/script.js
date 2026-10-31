const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});
document.querySelectorAll('.main-nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  });
});
document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const data = new FormData(this);
  const subject = encodeURIComponent('Website enquiry – Venture Link');
  const body = encodeURIComponent(
    `Name: ${data.get('name')}\nEmail: ${data.get('email')}\nArea of interest: ${data.get('interest')}\n\nMessage:\n${data.get('message') || 'No additional details provided.'}`
  );
  document.getElementById('formStatus').textContent = 'Opening your email application…';
  window.location.href = `mailto:ekazintwali@gmail.com?subject=${subject}&body=${body}`;
});
