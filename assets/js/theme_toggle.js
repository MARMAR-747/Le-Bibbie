<script>
  document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('theme-toggle');
    const savedTheme = localStorage.getItem('theme');

    // ✅ Applica il tema salvato all'avvio
    if (savedTheme) {
      jtd.setTheme(savedTheme);
      if (btn) {
        btn.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
      }
    }

    // 🔁 Cambia il tema al click e salvalo
    if (btn) {
      btn.addEventListener('click', () => {
        const current = jtd.getTheme(); // tema attuale visibile
        const next = current === 'dark' ? 'light' : 'dark';
        jtd.setTheme(next);
        localStorage.setItem('theme', next);
        btn.textContent = next === 'dark' ? '☀️' : '🌙';
      });
    }
  });
</script>
