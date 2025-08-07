---
layout: default
title: Algebra
nav_exclude: true
---

<div class="nav-buttons">
  <a href="/Bibbie/Teoria Dei Segnali/" class="nav-button">➡️ Teoria dei Segnali</a>
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

# 📘 Algebra

Materiale disponibile:

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
        <a href="../Elettronica/I 35 COMANDAMENTI DI ELETTRONICA.pdf" target="_blank">I 35 COMANDAMENTI DI ELETTRONICA</a>
      </td>
      <td style="text-align: center;">Teoria/Esercizi</td>
      <td style="text-align: center;">157</td>
      <td style="text-align: center;">✅🔄</td>
      <td style="text-align: center;">☆☆☆☆☆ (0)</td>
    </tr>
    <tr>
      <td>
        <a href="../Elettronica/HOW TO TRANSISTOR.pdf" target="_blank">HOW TO TRANSISTOR</a>
      </td>
      <td style="text-align: center;">Esercizi</td>
      <td style="text-align: center;">41</td>
      <td style="text-align: center;">✅🔄</td>
      <td style="text-align: center;">☆☆☆☆☆ (0)</td>
    </tr>
  </tbody>
</table>

<a href="https://forms.gle/qpdXSWjaTQ6PaftP8" target="_blank" rel="noopener noreferrer">
  Valuta il materiale di Algebra ⭐
</a> <br><br>

📬 Per segnalazione di eventuali errori:  
&emsp;&nbsp;&nbsp;[marcomarino.ci@gmail.com](mailto:marcomarino.ci@gmail.com)

---
🔒 Questo materiale è rilasciato sotto licenza [CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/).  
🔗 Ultimo aggiornamento: {{ site.time | date: "%d/%m/%Y" }}
