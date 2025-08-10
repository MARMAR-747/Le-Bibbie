---
layout: default
title: Ingegneria Del Software
nav_exclude: true
---

<div class="nav-buttons">
  <a href="/Bibbie/Elettronica/" class="nav-button left">⬅️ Elettronica</a>
  <a href="/Bibbie/Elettrotecnica/" class="nav-button right">➡️ BHO</a>
</div>

<br>

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

# 📘 Ingegneria Del Software 
---

## Overview:

<table>
  <tr>
    <td><strong>Descrizione</strong></td>
    <td>
      Teoria dei Segnali è, per antonomasia, la materia scoglio di Ingegneria Informatica a uniPa. Il programma è estremamente vasto e complesso, nonostante i soli 9 CFU assegnati. A rendere il tutto più impegnativo, il professore Garbo non è noto per la sua magnanimità in sede d’esame.
      <br><br>
      Per lo studio teorico, è consigliata la lettura delle dispense del professore, ma tutti gli argomenti critici richiesti all’orale sono raccolti in un unico file fondamentale: il <strong>BLOCCO TEOREMI ENHANCED</strong>, che contiene 37 teoremi con relative dimostrazioni. È disponibile anche un file riassuntivo con le principali formule e concetti teorici utili per la risoluzione degli esercizi, ovvero il <strong>BLOCCO UTILITIES ENHANCED</strong>.
      <br><br>
      Per quanto riguarda gli esercizi, si consiglia vivamente di seguire le esercitazioni del professor Mangione. Inoltre, i file <strong>BLOCCO TELECOM ENHANCED</strong> e <strong>ESERCIZIARIO DI TDS ENHANCED</strong> offrono un’ottima panoramica di ciò che può essere richiesto rispettivamente allo scritto e alla lavagna. Attenzione: il Blocco Telecom contiene anche alcuni esercizi che, secondo segnalazioni recenti, potrebbero essere stati rimossi dal pool ufficiale. Pertanto, è possibile che venga aggiornato nel tempo per riflettere al meglio le reali richieste d’esame.
    </td>
  </tr>
  <tr>
    <td><strong>Modalità d'esame</strong></td>
    <td>
      Il <strong>progetto</strong> consta di tre corposi file da redigere: il RAD (Requirements Analysis Document), l'ODD (Object Design Document) e l'SDD (System Design Document).  
      <br><br>
      L'<strong>orale</strong> consiste nella maggior parte dei casi in una discussione del progetto svolto (specialmente se svolto adeguatamente). E' possibile, talvolta, che la professoressa faccia qualche domanda di teoria (stando attenti a lezione potrete capire quali sono le domande più frequenti).
    </td>
  </tr>
  <tr>
    <td><strong>Difficoltà</strong></td>
    <td>🔺 Medio-Alta 💀💀💀💀⚪</td>
  </tr>
  <tr>
    <td><strong>Domande frequenti</strong></td>
    <td><strong>Teoremi:</strong>
    <br><br>
      <strong>Esercizi:</strong>
    </td>
  </tr>
  <tr>
    <td><strong>Tips</strong></td>
    <td>Leggere le dispense del professore Garbo e consultare parallelamente il <strong>BLOCCO TEOREMI ENHANCED</strong> e il <strong>BLOCCO UTILITIES ENHANCED</strong>. Si consiglia di svolgere le esercitazioni del professore Mangione parallelamente allo studio teorico, per fissare bene i concetti studiati.</td>
  </tr>
  <tr>
    <td><strong>Menzioni speciali</strong></td>
    <td>Si ringraziano in modo speciale gli altri tre eroi che hanno costituito il gruppo del progetto di Ingegneria Del Software:
    - Francesco Fausto Franchina (anche detto Cicerone), signore dei flussi e dei DB.
    - Diego Lo Voi (anche detto Diegheone), signore assoluto dei Mock-up e del supporto psicologico avanzato.
    - Giovanni Dolcemascolo (anche detto Giova), colui che mi ha assistito (non senza crolli nervosi e con imprecazioni di livello astrale) nel redigere i famigerati Sequence/Object Diagrams.  </td>
  </tr>
</table>

## Materiale disponibile:

<img src="{{ '/assets/images/CopertinaRAD.png' | relative_url }}" width="80">
<img src="{{ '/assets/images/CopertinaODD.png' | relative_url }}" width="80">
<img src="{{ '/assets/images/CopertinaSDD.png' | relative_url }}" width="80">

<table>
  <thead>
    <tr>
      <th style="width: 69%; text-align: center;">Titolo</th>
      <th style="width: 2%; text-align: center;">Tipologia</th>
      <th style="width: 2%; text-align: center;">Pagine</th>
      <th style="width: 2%; text-align: center;">Status</th>
      <th style="width: 25%; text-align: center;">Score</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <a href="../Teoria Dei Segnali/BLOCCO TEOREMI ENHANCED.pdf" target="_blank">BLOCCO TEOREMI ENHANCED</a>
      </td>
      <td style="text-align: center;">Teoria</td>
      <td style="text-align: center;">69</td>
      <td style="text-align: center;">✅</td>
      <td style="text-align: center;">⭐⭐⭐⭐⭐ (1)</td>
    </tr>
    <tr>
      <td>
        <a href="../Teoria Dei Segnali/BLOCCO UTILITIES ENHANCED.pdf" target="_blank">BLOCCO UTILITIES ENHANCED</a>
      </td>
      <td style="text-align: center;">Teoria</td>
      <td style="text-align: center;">73</td>
      <td>🔄 (26/07/25)</td>
      <td style="text-align: center;">☆☆☆☆☆ (0)</td>
    </tr>
    <tr>
      <td>
        <a href="../Teoria Dei Segnali/BLOCCO TELECOM ENHANCED.pdf" target="_blank">BLOCCO TELECOM ENHANCED</a>
      </td>
      <td style="text-align: center;">Esercizi</td>
      <td style="text-align: center;">89</td>
      <td>🔄 (29/07/25)</td>
      <td style="text-align: center;">☆☆☆☆☆ (0)</td>
    </tr>
    <tr>
      <td>
        <a href="../Teoria Dei Segnali/ESERCIZIARIO DI TDS ENHANCED.pdf" target="_blank">ESERCIZIARIO DI TDS ENHANCED</a>
      </td>
      <td style="text-align: center;">Esercizi</td>
      <td style="text-align: center;">119</td>
      <td>🔄 (23/07/25)</td>
      <td style="text-align: center;">☆☆☆☆☆ (0)</td>
    </tr>
  </tbody>
</table>

<a href="https://docs.google.com/forms/d/e/1FAIpQLSdtodu3VPHwG825FNluwVazuPSc_mzX1lgQC1v22RndIOVhaQ/viewform" target="_blank" rel="noopener noreferrer">
  Valuta il materiale di Teoria Dei Segnali ⭐
</a> <br><br>

📬 Per segnalazione di eventuali errori:  
&emsp;&nbsp;&nbsp;[marcomarino.ci@gmail.com](mailto:marcomarino.ci@gmail.com)

---
🔒 Questo materiale è rilasciato sotto licenza [CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/).  
🔗 Ultimo aggiornamento: {{ site.time | date: "%d/%m/%Y" }}

{% assign ordine = site.materie_order %}
{% assign idx = page.order_index | plus: 0 %}

<div style="margin-top: 3rem; display: flex; justify-content: space-between; font-weight: bold;">
  {% if idx > 0 %}
    {% assign precedente = ordine[idx | minus: 1] %}
    <a href="/{{ precedente | replace: ' ', '%20' }}/">⟵ {{ precedente }}</a>
  {% else %}
    <span></span>
  {% endif %}

  {% if idx < ordine.size | minus: 1 %}
    {% assign successiva = ordine[idx | plus: 1] %}
    <a href="/{{ successiva | replace: ' ', '%20' }}/">{{ successiva }} ⟶</a>
  {% else %}
    <span></span>
  {% endif %}
</div>
