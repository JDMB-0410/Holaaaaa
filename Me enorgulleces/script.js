// La historia paso a paso en 12 mensajes, vinculada a tus imágenes en la carpeta img/
const story = [
    { text: "Hola, mi hermosa Nena...💕", image: "img/Inicial.jpg" }, // El sobre para empezar
    { text: "Sé que este semestre no ha sido nada fácil y te ha puesto a prueba...", image: "img/Gato2.jpg" },
    { text: "Estudiar Ingeniería Química es un reto enorme, y verte enfrentarlo me llena de admiración.", image: "img/Gato9.jpg" }, // Matraz morado
    { text: "No cualquiera tiene esa mente tan brillante y lista como la tuya para lograrlo.", image: "img/Gato10.jpg" }, // Hello Kitty científica
    { text: "Pero más allá de tu inteligencia, me maravilla lo amable, agradable y especial que eres con todos.", image: "img/Gato4.jpg" },
    { text: "Eres una mujer verdaderamente única. ✨", image: "img/Gato11.jpg" }, // Gatito guiñando el ojo
    { text: "Y si algo me has demostrado en este tiempo, es la inmensa resiliencia que te caracteriza.", image: "img/Gato7.jpg" }, 
    { text: "Esa fuerza tuya fue lo que te hizo sobreponerte a cada obstáculo de la escuela y de la vida.", image: "img/Gato8.jpg" }, 
    { text: "Quería hacer esto para decirte que estoy increíblemente orgulloso de la mujer tan bella y fuerte que eres.", image: "img/Gato3.jpg" },
    { text: "Para mí, sin duda alguna, eres la mejor pareja de todo el mundo.", image: "img/Gato6.jpg" },
    { text: "Siempre estaré aquí para aplaudir tus victorias, mi ingeniera favorita.", image: "img/Gato1.jpg" },
    { text: "Te amo muchísimo. ❤️", image: "img/Gato5.gif" } // Explosión de corazones al final
];

// El índice empieza en 0 porque el primer mensaje ya está cargado en el HTML
let currentIndex = 0;
const imageElement = document.getElementById('cat-gif');
const textElement = document.getElementById('message');

// Escucha cada vez que ella toca la pantalla
document.addEventListener('click', (e) => {
    // 1. Crear el corazón animado donde hizo click
    const heart = document.createElement('div');
    heart.innerHTML = '💖';
    heart.className = 'click-heart';
    heart.style.left = e.clientX + 'px';
    heart.style.top = e.clientY + 'px';
    document.body.appendChild(heart);
    
    // Eliminar el corazón después de 800ms
    setTimeout(() => heart.remove(), 800);

    // 2. Avanzar en la historia
    currentIndex++;
    
    if (currentIndex < story.length) {
        // Desvanecer contenido actual
        imageElement.style.opacity = 0;
        textElement.style.opacity = 0;
        
        // Cambiar texto e imagen, y volver a aparecer suavemente
        setTimeout(() => {
            imageElement.src = story[currentIndex].image;
            textElement.textContent = story[currentIndex].text;
            
            imageElement.style.opacity = 1;
            textElement.style.opacity = 1;
        }, 400); 
    } else {
        // Si ya terminaron los mensajes, lanzar confeti infinito
        launchConfetti();
    }
});

// Generar partículas flotantes en el fondo
function createFloatingItem() {
    const items = ['🐾', '✨', '💕', '🌸', '😻', '🧪']; 
    const item = document.createElement('div');
    item.className = 'floating-item';
    item.innerHTML = items[Math.floor(Math.random() * items.length)];
    
    item.style.left = Math.random() * 100 + 'vw';
    item.style.fontSize = (Math.random() * 20 + 15) + 'px';
    item.style.animationDuration = (Math.random() * 4 + 5) + 's'; 
    
    document.getElementById('background-effects').appendChild(item);
    setTimeout(() => item.remove(), 9000);
}

setInterval(createFloatingItem, 1000);

// Efecto final sorpresa
function launchConfetti() {
    for (let i = 0; i < 25; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.innerHTML = ['💖', '🎉', '🌟', '🥰', '👩‍🔬'][Math.floor(Math.random() * 5)]; 
            heart.className = 'click-heart';
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.top = Math.random() * 100 + 'vh';
            document.body.appendChild(heart);
            setTimeout(() => heart.remove(), 800);
        }, i * 60); 
    }
}