document.addEventListener('DOMContentLoaded', () => {

  const form = document.getElementById('contactForm');
  const msg = document.getElementById('formMessage');
  const btnTop = document.getElementById('btnTop');

  /* -------- FORMULARIO -------- */
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.querySelector('#nombre').value.trim();
    const email = form.querySelector('#email').value.trim();
    const mensaje = form.querySelector('#mensaje').value.trim();

    // Limpiar estados anteriores
    msg.classList.remove('error', 'success');

    // Validación básica
    if (!name || !email || !mensaje) {
      msg.textContent = "Por favor, completa todos los campos.";
      msg.classList.add('error');
      return;
    }

    // Validación simple de email
    if (!email.includes('@')) {
      msg.textContent = "Introduce un correo electrónico válido.";
      msg.classList.add('error');
      return;
    }

    // Mensaje de éxito
    msg.textContent = `Gracias, ${name}. Tu mensaje ha sido enviado.`;
    msg.classList.add('success');

    form.reset();

    // Limpiar mensaje después de unos segundos
    setTimeout(() => {
      msg.textContent = "";
      msg.classList.remove('success');
    }, 4000);
  });

  /* -------- BOTÓN VOLVER ARRIBA -------- */

  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        btnTop.classList.toggle('visible', window.scrollY > 300);
        ticking = false;
      });
      ticking = true;
    }
  });

  btnTop.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

});