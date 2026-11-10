/* Учебный счётчик открытий в этом браузере. Для общего счётчика сайта подключите публичную веб-статистику. */
(function () {
  var visits = 1;
  try {
    var key = 'cybershield_visits';
    visits = (parseInt(localStorage.getItem(key) || '0', 10) || 0) + 1;
    localStorage.setItem(key, String(visits));
  } catch(e) { /* Локальное хранилище может быть недоступно. */ }
  document.querySelectorAll('[data-visit-counter]').forEach(function (el) { el.textContent = visits; });
})();
