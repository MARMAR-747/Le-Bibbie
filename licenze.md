---
layout: default
title: Licenze
nav_order: 5
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

# 📜 Licenze e uso dei contenuti
---
Tutti i materiali presenti in questo sito (dispense, eserciziari, appunti e risorse varie) sono stati realizzati da me, **Marco Marino**, sulla base del mio percorso universitario in Ingegneria Informatica presso l’Università degli Studi di Palermo.

## ✅ Cosa puoi fare

- Puoi consultare liberamente i contenuti.
- Puoi scaricarli per **uso personale e di studio**.
- Puoi condividere il link al sito con altri studenti.

## ❌ Cosa non puoi fare

- **Non è consentita la ripubblicazione** dei contenuti su altri siti o piattaforme, anche a titolo gratuito.
- **Non puoi vendere o distribuire** in alcuna forma il materiale presente.
- **Non è consentita la modifica** dei documenti con successiva redistribuzione senza autorizzazione.

## 📌 Disclaimer

Pur prestando la massima attenzione all’accuratezza degli appunti, **non garantisco l’assenza di errori**. I materiali **non sostituiscono testi ufficiali o lezioni universitarie**, ma vogliono essere un supporto allo studio.

---
🔒 Tutto il materiale è rilasciato sotto licenza [CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/).  
🔗 Ultimo aggiornamento: {{ site.time | date: "%d/%m/%Y" }}
