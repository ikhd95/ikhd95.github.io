// Menu toggle (mobile)
document.addEventListener('DOMContentLoaded', function(){
  const btn = document.getElementById('navToggle');
  const btn2 = document.getElementById('navToggle2');
  function toggle(){
    const links = document.querySelector('.nav-links');
    if(!links) return;
    if(links.style.display === 'flex'){ links.style.display = 'none' }
    else { links.style.display = 'flex'; links.style.flexDirection = 'column'; links.style.gap='12px'; links.style.position='absolute'; links.style.top='64px'; links.style.right='20px'; links.style.background='#fff'; links.style.padding='12px'; links.style.boxShadow='0 6px 20px rgba(0,0,0,0.08)'; links.style.borderRadius='8px' }
  }
  if(btn) btn.addEventListener('click', toggle);
  if(btn2) btn2.addEventListener('click', toggle);

  // simple contact form handler
  const form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      alert("Merci — le formulaire a été simulé ici. Configure un backend ou un service (Formspree, Netlify) pour l'envoyer réellement.");
      form.reset();
    });
  }
});
