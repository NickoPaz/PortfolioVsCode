const pantalla = document.getElementById("pantalla");
const btnPerfil = document.getElementById("btn-perfil");
const btnHabilidades = document.getElementById("btn-habilidades");
const btnProyectos = document.getElementById("btn-proyectos");

console.log(pantalla);

const contenidoPerfil = `
    <h1>Nicolas Paz</h1>
    <p class="comentario"> Desarrollador Web Full Stack</p>
    <p>📍 Santiago del Estero, Arg</p>
    
    <button onclick="window.open('https://github.com/NickoPaz', '_blank')">
        Ver mi GitHub
    </button>
`;

const contenidoHabilidades = `
    <h1>Habilidades.css</h1>
    <p>body {</p>
    <p>&nbsp;&nbsp;lenguajes: "HTML", "CSS", "JS";</p>
    <p>&nbsp;&nbsp;nivel: "Aprendiendo a full";</p>
    <p>}</p>
`;

const contenidoProyectos = `
    <h1>Proyectos.js</h1>
    <p>const proyectos = [</p>
    <p>&nbsp;&nbsp;"Portfolio VS Code",</p>
    <p>&nbsp;&nbsp;"Sistema de Gestión IPVU"</p>
    <p>];</p>
`;

// --- EVENTOS DE LOS BOTONES ---

btnPerfil.addEventListener("click", function () {
    pantalla.innerHTML = contenidoPerfil;
});

btnHabilidades.addEventListener("click", function () {
    pantalla.innerHTML = contenidoHabilidades;
});

btnProyectos.addEventListener("click", function () {
    pantalla.innerHTML = contenidoProyectos;
});