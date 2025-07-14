function toggleDarkMode() {
  const body = document.body;
  const icon = document.getElementById('modeIcon');

  body.classList.toggle('dark-mode');

  const isDark = body.classList.contains('dark-mode');
  localStorage.setItem('darkMode', isDark ? 'enabled' : 'disabled');

  icon.textContent = isDark ? '🌙' : '🌞';
}

function applySavedMode() {
  const body = document.body;
  const icon = document.getElementById('modeIcon');
  const savedMode = localStorage.getItem('darkMode');

  if (savedMode === 'enabled') {
    body.classList.add('dark-mode');
    icon.textContent = '🌙';
  } else {
    body.classList.remove('dark-mode');
    icon.textContent = '🌞';
  }
}

function startClock() {
  updateTime(); 
  setInterval(updateTime, 1000);
}

function updateTime() {
  const now = new Date();
  const timeString = now.toLocaleTimeString();
  const dateString = now.toDateString();
  document.getElementById('clock').textContent = `${dateString} - ${timeString}`;
}

window.onload = () => {
  applySavedMode();
  startClock();
};
