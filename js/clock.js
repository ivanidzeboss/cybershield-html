/* Часы и дата на всех страницах */
(function () {
  function tick() {
    var now = new Date();
    var time = now.toLocaleTimeString('ru-RU', {hour:'2-digit', minute:'2-digit', second:'2-digit'});
    var date = now.toLocaleDateString('ru-RU', {day:'2-digit', month:'long', year:'numeric'});
    document.querySelectorAll('[data-live-clock]').forEach(function (el) { el.textContent = time; });
    document.querySelectorAll('[data-live-date]').forEach(function (el) { el.textContent = date; });
  }
  tick();
  setInterval(tick, 1000);
})();
