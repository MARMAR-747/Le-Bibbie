---
layout: default
title: Donazioni
nav_order: 6
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

# ☕ Donazioni
---
Se vuoi supportare il progetto con una piccola donazione, puoi farlo qui:

<a href="https://paypal.me/MarcoMarino747" target="_blank">
  <img src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/PP_logo_h_150x38.png" alt="Dona con PayPal" style="height: 38px;">
</a>

<h2>🎯 Obiettivo: 50€</h2>

<!-- Barra di progresso -->
<div style="border: 1px solid #ccc; border-radius: 10px; width: 100%; max-width: 500px; height: 30px; margin-bottom: 10px;">
  <div style="width: 1%; height: 100%; background-color: #28a745; border-radius: 10px;"></div>
</div>

<!-- Barra di progresso -->
<div style="border: 1px solid #ccc; border-radius: 6px; width: 100%; max-width: 500px; height: 30px; margin-bottom: 10px; overflow: hidden;">
  <div style="width: 1%; height: 100%; background-color: #28a745;"></div>
</div>

<!-- Testo dell'avanzamento -->
<p style="font-size: 0.95rem; font-weight: bold;">💰 Totale raccolto: 0€ / 50€</p>

<p style="font-size: 0.9rem;">Grazie per il tuo supporto! Ogni contributo è utile 💚</p>
