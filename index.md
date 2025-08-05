---
layout: default
title: Home
nav_order: 1
---

<h2>📘 <span id="typed"></span></h2>

<script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>
<script>
  document.addEventListener('DOMContentLoaded', function () {
    new Typed('#typed', {
      strings: [
        'Le Bibbie di Ingegneria Informatica',
        'Appunti universitari in versione digitale',
        'Università degli Studi di Palermo'
      ],
      typeSpeed: 50,
      backSpeed: 25,
      loop: true
    });
  });
</script>

<!-- CANVAS DI SFONDO -->
<style>
  #background-canvas {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 0; /* dietro al contenuto */
    width: 100vw;
    height: 100vh;
    pointer-events: none; /* disattiva clic sul canvas */
  }

  .page-content {
    position: relative;
    z-index: 1; /* sopra al canvas */
    background-color: transparent;
  }
</style>

<canvas id="background-canvas"></canvas>

<div class="page-content">
---
Quella di **Ingegneria Informatica** è universalmente riconosciuta come una delle **facoltà più complesse** da affrontare.
Ogni giorno ci si confronta con problemi di **notevole difficoltà** — uno tra tutti: l’esame di **Teoria dei Segnali**.

Ma cosa succede se non si ha a disposizione del **buon materiale per studiare**?

Ho iniziato a scrivere appunti **per me stesso**, come esercizio di memoria e per allenarmi a scrivere al PC (soprattutto su Word).
Con il tempo, però, mi sono reso conto che **ore e ore di lavoro** non potevano essere lasciate in un cassetto: avevo trovato un nuovo scopo, ovvero
**aiutare chi, come me, trovava difficoltà a orientarsi tra le dispense dei docenti**.

**Chiariamoci**: non considero i miei appunti "migliori" rispetto a quelli ufficiali.
Credo però che, nell’eccessivo formalismo accademico, si perda talvolta il contatto concreto con gli studenti.

### 📖 Perché “Le Bibbie”?  
Perché anche le materie da **6 CFU**, all’apparenza innocue, possono nascondere **programmi vastissimi**. Il nome è ironico, ma anche 
simbolico: questi appunti sono diventati per me — e spero anche per voi — **una guida completa e affidabile**.

Di seguito troverete infatti **tutto il materiale** da me prodotto durante la **triennale in Ingegneria Informatica** all’**Università degli Studi di Palermo**, 
raccolto **per anno e per materia**.

## 📂 Materie
---
### ➀ Primo anno

- [Algebra](Algebra/) (6 CFU)

### ➁ Secondo anno

- [Teoria dei segnali](Teoria Dei Segnali/) (9 CFU)
- [Elettrotecnica](Elettrotecnica/) (6 CFU)
- [Metodi matematici e numerici] (9 CFU)

### ➂ Terzo anno

- [Reti di calcolatori] (9 CFU)
- [Elettronica](Elettronica/) (9 CFU)

---
🔒 Tutto il materiale è rilasciato sotto licenza [CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/).  
🔗 Ultimo aggiornamento: {{ site.time | date: "%d/%m/%Y" }}

</div>

<script>
const canvas = document.getElementById('background-canvas');
const ctx = canvas.getContext('2d');
let width, height;
let points = [];

function resize() {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
  points = Array.from({ length: 100 }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * 1.5,
    vy: (Math.random() - 0.5) * 1.5
  }));
}
resize();
window.addEventListener('resize', resize);

function draw() {
  ctx.clearRect(0, 0, width, height);
  points.forEach(p => {
    p.x += p.vx;
    p.y += p.vy;
    if (p.x < 0 || p.x > width) p.vx *= -1;
    if (p.y < 0 || p.y > height) p.vy *= -1;

    ctx.beginPath();
    ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
    ctx.fillStyle = '#1a73e8';
    ctx.fill();
  });

  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      const dx = points[i].x - points[j].x;
      const dy = points[i].y - points[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 100) {
        ctx.beginPath();
        ctx.moveTo(points[i].x, points[i].y);
        ctx.lineTo(points[j].x, points[j].y);
        ctx.strokeStyle = 'rgba(26, 115, 232, ' + (1 - dist / 100) + ')';
        ctx.stroke();
      }
    }
  }

  requestAnimationFrame(draw);
}
draw();
</script>
