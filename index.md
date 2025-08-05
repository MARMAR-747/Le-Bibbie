---
layout: default
title: Home
nav_order: 1
---

<script>
  document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('theme-toggle');
    const saved = localStorage.getItem('theme');
    if (saved) {
      jtd.setTheme(saved);
      if (btn) btn.textContent = saved === 'dark' ? '☀️' : '🌙';
    }
    if (btn) {
      btn.addEventListener('click', () => {
        const curr = jtd.getTheme();
        const next = curr === 'dark' ? 'light' : 'dark';
        jtd.setTheme(next);
        localStorage.setItem('theme', next);
        btn.textContent = next === 'dark' ? '☀️' : '🌙';
      });
    }
  });
</script>

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
---
Quella di **Ingegneria Informatica** è universalmente riconosciuta come una delle **facoltà più complesse** da affrontare.
Ogni giorno ci si confronta con problemi di **notevole difficoltà** — uno tra tutti: l’esame di **Teoria dei Segnali**.

Ma cosa succede se non si ha a disposizione del **buon materiale per studiare**?

Ho iniziato a scrivere appunti **per me stesso**, come esercizio di memoria e per allenarmi a scrivere al PC (soprattutto su Word).
Con il tempo, però, mi sono reso conto che **ore e ore di lavoro** non potevano essere lasciate in un cassetto: avevo trovato un nuovo scopo, ovvero
**aiutare chi, come me, trovava difficoltà a orientarsi tra le dispense dei docenti**.

**Chiariamoci**: non considero i miei appunti "migliori" rispetto a quelli ufficiali.
Credo però che, nell’eccessivo formalismo accademico, si perda talvolta il contatto concreto con gli studenti.

### 📖 Perché “Le Bibbie”? <br>
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

<div class="counter-container">
  <div class="counter-box">
    <span id="pdf-count" class="counter" data-target="7">0</span>
    <p>📚 PDF disponibili</p>
  </div>
</div>

<style>
.counter-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  margin-top: 2rem;
}
.counter-box {
  text-align: center;
  background-color: var(--card-background-color, var(--body-background-color));
  padding: 20px 30px;
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  transition: background-color 0.3s ease;
}
.counter-box p {
  margin: 0.5rem 0 0;
  color: var(--body-text-color);
}
.counter {
  font-size: 2.5rem;
  font-weight: bold;
  color: var(--link-color);
  display: block;
}
</style>

<script>
document.addEventListener('DOMContentLoaded', () => {
  const counters = document.querySelectorAll('.counter');

  const animateCount = (el) => {
    const target = parseInt(el.dataset.target);
    let count = 0;
    const step = Math.ceil(target / 40);
    const update = () => {
      count += step;
      if (count >= target) {
        el.textContent = target;
      } else {
        el.textContent = count;
        requestAnimationFrame(update);
      }
    };
    requestAnimationFrame(update);
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCount(entry.target);
        observer.unobserve(entry.target); // Conta solo una volta
      }
    });
  }, { threshold: 0.6 });

  counters.forEach(counter => {
    observer.observe(counter);
  });
});
</script>

---
🔒 Tutto il materiale è rilasciato sotto licenza [CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/).  
🔗 Ultimo aggiornamento: {{ site.time | date: "%d/%m/%Y" }}
