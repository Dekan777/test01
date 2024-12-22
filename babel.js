const controls = document.querySelector('.controls');
/* Находит HTML-элемент с классом controls и сохраняет его в переменной controls. */


controls.addEventListener('click', e => {
  /* Добавляет обработчик события click на элемент controls.
Когда пользователь кликает внутри элемента .controls, 
вызывается переданная функция.

Аргумент e (событие):
Содержит информацию о произошедшем событии. Например:
e.target: элемент, по которому пользователь кликнул.
e.currentTarget: элемент, на котором слушается событие (controls). */

  if (e.target === e.currentTarget) {
    /* Что делает?
Проверяет, не является ли элемент, на который кликнули (e.target),
 самим контейнером controls (e.currentTarget).
Почему это нужно?
Если кликнуть по самому контейнеру (а не по кнопке внутри него), 
обработчик ничего не делает, так как return завершает выполнение функции.
 */
    return;
  }

  const prevActivePane = document.querySelector('.pane.is-active');
  /* Находит текущую активную панель (панель с классом pane is-active). */

  if (prevActivePane) {
    prevActivePane.classList.remove('is-active');
    /* Если существует активная панель (prevActivePane не null), 
    удаляет у неё класс is-active, чтобы она стала невидимой. */
  }

  const paneId = e.target.dataset.id;
  /* Считывает значение атрибута data-id у элемента, 
  по которому кликнул пользователь (e.target). */
  const nextActivePane = document.querySelector(`#${paneId}`);
  /* Находит панель с id, равным paneId.
Используется селектор #${paneId}, чтобы выбрать элемент по его id. */
  
  nextActivePane.classList.add('is-active');
});
