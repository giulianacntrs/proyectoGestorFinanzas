document.getElementById("header").innerHTML = `
<header>
  <nav>
    <a href="index.html"><img src="./img/Logo.png" alt="logo-glow-up" width="100px"></a>
    <ul><button class="btn"><a href="./iniciosesion.html">Conoce la app</a></button></ul>
  </nav>
</header>
`;

document.getElementById("footer").innerHTML = `
  <footer>
      <div class="columna1">
        <h2>Sobre</h2>
        <p class="texto">GLOW UP FINANCIERO es un gestor de finanzas para clientes<br> particulares para ayudarlos a tener
          mayor control de sus<br> finanzas en general para facilitar el control de estás.</p>
      </div>
      <div class="columna2">
        <h2>Categorias</h2>
        <ul class="links-footer">
          <li> <a href="#seccion1">Inicio</a>
          </li>
          <li><a href="#seccion2">Conocenos</a></li>
          <li><a href="#seccion3">Servicios</a></li>
        </ul>
      </div>
      <div class="columna3">
        <h2>Contacto</h2>
        <ul>
          <li>
            123-456-7890
          </li>
          <li>glowupfinancieroweb@gmail.com
          </li>
          <li><a href="">@glowupfinanciero</a></li>
        </ul>
      </div>
  </footer>


`;

document.getElementById("mode-toggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const toggleButton = document.getElementById("mode-toggle");
  toggleButton.textContent = 
    document.body.classList.contains("dark-mode") ? "Modo Claro" : "Modo Oscuro";
});



