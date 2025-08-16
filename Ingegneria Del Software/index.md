---
layout: default
title: Ingegneria Del Software
nav_exclude: true
---

<div class="nav-buttons">
  <a href="/Bibbie/Controlli Automatici/" class="nav-button left">⬅️ Controlli Automatici</a>
  <a href="/Bibbie/Controlli Automatici/" class="nav-button right">➡️ BHO</a>
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
    <td><strong>Menzioni speciali</strong></td>
    <td>Si ringraziano in modo speciale gli altri tre eroi che hanno costituito il gruppo del progetto di Ingegneria Del Software:<br>
    - <strong>Francesco Fausto Franchina</strong> (anche detto <strong>Cicerone</strong>), signore dei flussi e dei DB.<br>
    - <strong>Diego Lo Voi</strong> (anche detto <strong>Diegheone</strong>), signore assoluto dei Mock-up e del supporto psicologico avanzato.<br>
    - <strong>Giovanni Dolcemascolo</strong> (anche detto <strong>Giova</strong>), colui che mi ha assistito (non senza crolli nervosi e con imprecazioni di livello astrale) nel redigere i famigerati Sequence/Object Diagrams.</td>
  </tr>
  <tr>
    <td><strong>Descrizione</strong></td>
    <td>
      
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
    <td>
      
    </td>
  </tr>
  <tr>
    <td><strong>Tips</strong></td>
    <td>
      
    </td>
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
        <a href="../Ingegneria Del Software/RAD.pdf" target="_blank">RAD</a>
      </td>
      <td style="text-align: center;">Progetto</td>
      <td style="text-align: center;">193</td>
      <td style="text-align: center;">✅</td>
      <td style="text-align: center;">☆☆☆☆☆ (0)</td>
    </tr>
    <tr>
      <td>
        <a href="../Ingegneria Del Software/ODD.pdf" target="_blank">ODD</a>
      </td>
      <td style="text-align: center;">Progetto</td>
      <td style="text-align: center;">22</td>
      <td style="text-align: center;">✅</td>
      <td style="text-align: center;">☆☆☆☆☆ (0)</td>
    </tr>
    <tr>
      <td>
        <a href="../Ingegneria Del Software/SDD.pdf" target="_blank">SDD</a>
      </td>
      <td style="text-align: center;">Progetto</td>
      <td style="text-align: center;">33</td>
      <td style="text-align: center;">✅</td>
      <td style="text-align: center;">☆☆☆☆☆ (0)</td>
    </tr>
  </tbody>
</table>

<a href="https://docs.google.com/forms/d/e/1FAIpQLSdtodu3VPHwG825FNluwVazuPSc_mzX1lgQC1v22RndIOVhaQ/viewform" target="_blank" rel="noopener noreferrer">
  Valuta il materiale di Ingegneria Del Software ⭐
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
