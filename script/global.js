const menuBtn = document.querySelector('.menu-btn');
  const sidebar = document.getElementById('sidebar');

  menuBtn.addEventListener('click', () => {
    sidebar.classList.toggle('visible');
  });

  document.addEventListener('click', (e) => {
    if (!sidebar.contains(e.target) && !menuBtn.contains(e.target)) {
      sidebar.classList.remove('visible');
    }
  });