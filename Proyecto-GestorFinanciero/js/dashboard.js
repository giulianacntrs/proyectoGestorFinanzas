document.addEventListener('DOMContentLoaded', event => {

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

});



/******************************** Navbar dashboard ********************************/

document.getElementById("nav").innerHTML = `<nav class="sb-topnav navbar navbar-expand navbar bg navbar-custom">
            <a class="navbar-brand ps-3" href="/index.html"><img src="/img/Logo.png" alt="logo-glow-up"
                width="100px"></a>
    <button class="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!"><i
            class="fas fa-bars"></i></button>
    <!-- Navbar-->
        <ul class="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown"
                    aria-expanded="false"><i class="fas fa-user fa-fw"></i></a>
                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                    <li><a class="dropdown-item" href="#!">Perfil</a></li>
                    <li>
                        <hr class="dropdown-divider" />
                    </li>
                    <li><a class="dropdown-item" href="#!">Cerrar sesión</a></li>
                </ul>
            </li>
        </ul>
                                    <ul>
        <div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" id="SwitchDarkMode">
  <label class="form-check-label" for="flexSwitchCheckDefault">Modo Oscuro</label>
</div>
</ul>
</nav>`;

/********************************Sidebar********************************/

document.getElementById("sidebar").innerHTML = `<div id="layoutSidenav_nav">
            <nav class="sb-sidenav accordion sb-sidenav sidebar-costum" id="sidenavAccordion">
                <div class="sb-sidenav-menu">
                    <div class="nav">
                        <a class="nav-link" href="/dashboard.html">
                            <div class="sb-nav-link-icon"><i class="fas fa-tachometer-alt"></i></div>
                            Resumen
                        </a>
                        <a class="nav-link collapsed" href="#" data-bs-toggle="collapse"
                            data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                            <div class="sb-nav-link-icon"><i class="fas fa-columns"></i></div>
                            Presupuesto
                            <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                        </a>
                        <div class="collapse" id="collapseLayouts" aria-labelledby="headingOne"
                            data-bs-parent="#sidenavAccordion">
                            <nav class="sb-sidenav-menu-nested nav">
                                <a class="nav-link" href="/paginas/agregar.html">Agregar tarjeta</a>
                                <a class="nav-link" href="/paginas/metas.html">Metas</a>
                                <a class="nav-link" href="/paginas/necesidades.html">Necesidades</a>
                                <a class="nav-link" href="/paginas/ahorros.html">Ahorros</a>
                                <a class="nav-link" href="/paginas/inversiones.html">Inversiones</a>

                            </nav>
                        </div>
                    </div>
                </div>
                <div class="sidebar-footer">
                    <div class="user-info">
                        <img src="/img/dashboard/perfil.png" alt="User Avatar" class="user-avatar">
                        <p class="user-name">John Doe</p>
                    </div>
                    <button class="btn-logout">Cerrar sesión</button>
                </div>
            </nav>
          </div>

`;

/********************************Footer********************************/

document.getElementById("footer").innerHTML = `<footer class="py-4 bg-light mt-auto">
        <div class="container-fluid px-4">
            <div class="d-flex align-items-center justify-content-between small">
                <div class="text-muted">Copyright &copy; Your Website 2023</div>
                <div>
                    <a href="#">Privacy Policy</a>
                    &middot;
                    <a href="#">Terms &amp; Conditions</a>
                </div>
            </div>
        </div>
    </footer>`;

document.addEventListener("DOMContentLoaded", function () {
    const darkModeEnabled = localStorage.getItem('darkMode') === 'true';

    if (darkModeEnabled) {
        document.body.classList.add('dark-mode');
        document.getElementById('SwitchDarkMode').checked = true;
    }

    const switchButton = document.getElementById('SwitchDarkMode');
    switchButton.addEventListener('change', function () {
        if (switchButton.checked) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('darkMode', 'true');
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('darkMode', 'false');
        }
    });
});


/********************************Agregar Cards ********************************/
document.addEventListener("DOMContentLoaded", function () {
    if (!localStorage.getItem("cards")) {
        const cards = [
            {
                "nombre": "Comprar comida",
                "monto": 50,
                "fechaLimite": "2024-12-20",
                "categoria": "necesidades"
            },
            {
                "nombre": "Invertir en acciones",
                "monto": 1000,
                "fechaLimite": "2025-01-15",
                "categoria": "inversiones"
            },
            {
                "nombre": "Ahorrar para vacaciones",
                "monto": 2000,
                "fechaLimite": "2025-06-01",
                "categoria": "ahorros"
            },
            {
                "nombre": "Comprar un coche",
                "monto": 15000,
                "fechaLimite": "2026-05-10",
                "categoria": "metas"
            }
        ];

        localStorage.setItem("cards", JSON.stringify(cards));
    }

    cargarCards();
});

function cargarCards() {
    const categoria = document.body.id;

    let cards = JSON.parse(localStorage.getItem("cards")) || [];

    const categoriaContainer = document.getElementById(categoria + '-container');
    categoriaContainer.innerHTML = `<h1>${categoria.charAt(0).toUpperCase() + categoria.slice(1)}</h1>`;

    const tarjetasCategoria = cards.filter(card => card.categoria === categoria);

    tarjetasCategoria.forEach(card => {
        agregarCardElement(card, categoriaContainer);
    });
}

function agregarCardElement(card) {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card', 'col-md-4');
    cardElement.innerHTML = `
        <div class="card-body">
            <h5 class="card-title">${card.nombre}</h5>
            <p class="card-text">
                <strong>Monto: </strong>$${card.monto}<br>
                <strong>Fecha Límite: </strong>${new Date(card.fechaLimite).toLocaleDateString()}
            </p>
            <div class="progress">
                <div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <p class="mt-2">Te falta <strong>100%</strong> para llegar al 100%.</p>
            <!-- Botones de Editar y Eliminar -->
                            <a href="agregar.html?nombre=${encodeURIComponent(card.nombre)}" class="btn btn-warning">Editar</a>
            <button class="btn btn-danger btn-sm" onclick="eliminarCard('${card.nombre}')">Eliminar</button>
        </div>
    `;

    const categoriaContainer = document.getElementById(card.categoria + '-container');
    categoriaContainer.appendChild(cardElement);
}

function eliminarCard(nombreCard) {
    let cards = JSON.parse(localStorage.getItem("cards")) || [];

    cards = cards.filter(card => card.nombre !== nombreCard);

    localStorage.setItem("cards", JSON.stringify(cards));

    cargarCards();
}

function editarCard(nombreCard) {
    let cards = JSON.parse(localStorage.getItem("cards")) || [];

    const cardToEdit = cards.find(card => card.nombre === nombreCard);

    if (cardToEdit) {
        document.getElementById("nombre").value = cardToEdit.nombre;
        document.getElementById("monto").value = cardToEdit.monto;
        document.getElementById("fechaLimite").value = cardToEdit.fechaLimite;
        document.getElementById("categoria").value = cardToEdit.categoria;

        const agregarBtn = document.getElementById("AgregarCards");
        agregarBtn.innerText = "Guardar cambios";
        agregarBtn.onclick = function () {
            cardToEdit.nombre = document.getElementById("nombre").value;
            cardToEdit.monto = document.getElementById("monto").value;
            cardToEdit.fechaLimite = document.getElementById("fechaLimite").value;
            cardToEdit.categoria = document.getElementById("categoria").value;

            cards = cards.map(card => card.nombre === nombreCard ? cardToEdit : card);
            localStorage.setItem("cards", JSON.stringify(cards));

            document.getElementById("nombre").value = "";
            document.getElementById("monto").value = "";
            document.getElementById("fechaLimite").value = "";
            document.getElementById("categoria").value = "";
            agregarBtn.innerText = "Agregar tarjeta";
            agregarBtn.onclick = agregarTarjeta;

            cargarCards();
        };
    }
}
let tarjetaEditando = null;

document.addEventListener("DOMContentLoaded", function () {
    const queryParams = new URLSearchParams(window.location.search);
    const nombreCard = queryParams.get('nombre'); 

    if (nombreCard) {
        tarjetaEditando = nombreCard;
        cargarDatosEdicion(tarjetaEditando);
    }

    document.getElementById("AgregarCards").addEventListener("click", agregarTarjeta);
});

function cargarDatosEdicion(nombreTarjeta) {
    let cards = JSON.parse(localStorage.getItem("cards")) || [];

    const tarjeta = cards.find(card => card.nombre === nombreTarjeta);

    if (tarjeta) {
        document.getElementById("nombre").value = tarjeta.nombre;
        document.getElementById("monto").value = tarjeta.monto;
        document.getElementById("fechaLimite").value = tarjeta.fechaLimite;
        document.getElementById("categoria").value = tarjeta.categoria;

        document.getElementById("AgregarCards").innerText = "Guardar cambios";
    }
}

function agregarTarjeta() {
    const nombre = document.getElementById("nombre").value;
    const monto = document.getElementById("monto").value;
    const fechaLimite = document.getElementById("fechaLimite").value;
    const categoria = document.getElementById("categoria").value;

    if (nombre && monto && fechaLimite && categoria) {
        const nuevaTarjeta = {
            nombre: nombre,
            monto: monto,
            fechaLimite: fechaLimite,
            categoria: categoria
        };

        let cards = JSON.parse(localStorage.getItem("cards")) || [];

        if (tarjetaEditando) {
            // Editar la tarjeta existente
            cards = cards.map(card => card.nombre === tarjetaEditando ? nuevaTarjeta : card);
            // Limpiar la variable de edición
            localStorage.removeItem('tarjetaEditando');
        } else {
            // Agregar una nueva tarjeta
            cards.push(nuevaTarjeta);
        }

        // Guardar las tarjetas actualizadas en localStorage
        localStorage.setItem("cards", JSON.stringify(cards));

        // Limpiar los campos del formulario
        document.getElementById("nombre").value = "";
        document.getElementById("monto").value = "";
        document.getElementById("fechaLimite").value = "";
        document.getElementById("categoria").value = "";

        // Recargar las tarjetas
        cargarCards();

        // Cambiar el texto del botón de agregar a su estado inicial
        document.getElementById("AgregarCards").innerText = "Agregar tarjeta";
    } else {
        alert("Por favor, complete todos los campos.");
    }
}
