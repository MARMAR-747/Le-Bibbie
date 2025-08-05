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

## 📊 Statistiche del sito
---
<div class="counter-container">
  <div class="counter-box">
    <span id="pdf-count">0</span>
    <p>📚 PDF disponibili</p>
  </div>
  <div class="counter-box">
    <span id="visitor-count" data-id="TUO-CounterID">0</span>
    <p>👁️ Visitatori unici</p>
  </div>
</div>

<style>
.counter-container {
  display: flex; flex-wrap: wrap; justify-content: center; gap: 30px; margin-top: 2rem;
}
.counter-box {
  text-align: center; background: #f8f9fa; padding: 20px 30px; border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}
.counter-box p { margin: 0.5rem 0 0; }
.counter { font-size: 2.5rem; font-weight: bold; color: #1a73e8; display: block; }
</style>

<script>
// 1. Contatore PDF via GitHub API
(async function(){
  const folders = ["Teoria%20Dei%20Segnali", "Reti%20di%20calcolatori", "Elettrotecnica", "Elettronica"];
  const repo = "MARMAR-747/Bibbie";
  let total = 0;
  for(let folder of folders){
    const res = await fetch(`https://api.github.com/repos/${repo}/contents/${folder}`);
    if(res.ok){
      const list = await res.json();
      total += list.filter(f => f.name.toLowerCase().endsWith(".pdf")).length;
    }
  }
  document.getElementById("pdf-count").innerText = total;
})();
</script>

<script src="https://counter.dev/script.js" async data-id="034d69c8-e18d-474d-a527-c0416749534b"></script>
<script>
// 2. Aggiorna contatore visitatori da Counter.dev
window.addEventListener('DOMContentLoaded', () => {
  const el = document.getElementById("visitor-count");
  const id = el.getAttribute("data-id");
  fetch(`https://counter.dev/api/stat/${id}`)
    .then(res => res.json())
    .then(json => { el.innerText = json.total; });
});
</script

<script src="https://cdn.counter.dev/script.js" data-id="034d69c8-e18d-474d-a527-c0416749534b" data-utcoffset="2"></script>
---
🔒 Tutto il materiale è rilasciato sotto licenza [CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/).  
🔗 Ultimo aggiornamento: {{ site.time | date: "%d/%m/%Y" }}
