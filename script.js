document.addEventListener('DOMContentLoaded', () => {
  const workButton = document.getElementById('workButton');
  const marketButton = document.getElementById('marketButton');
  const tasksButton = document.getElementById('tasksButton');
  const workSection = document.getElementById('workSection');
  const marketSection = document.getElementById('marketSection');
  const tasksSection = document.getElementById('tasksSection');

  // Функция для показа выбранного раздела
  function showSection(section) {
    [workSection, marketSection, tasksSection].forEach(sec => sec.classList.add('hidden'));
    section.classList.remove('hidden');
  }

  // Обработчики кнопок навигации
  workButton.addEventListener('click', () => showSection(workSection));
  marketButton.addEventListener('click', () => showSection(marketSection));
  tasksButton.addEventListener('click', () => showSection(tasksSection));

  // Обработка формы для РАБОТА
  const workForm = document.getElementById('workForm');
  const workList = document.getElementById('workList');
  workForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const content = document.getElementById('workContent').value;
    const postDiv = document.createElement('div');
    postDiv.classList.add('post');
    postDiv.textContent = content;
    workList.appendChild(postDiv);
    document.getElementById('workContent').value = '';
  });

  // Обработка формы для БИРЖА
  const marketForm = document.getElementById('marketForm');
  const marketList = document.getElementById('marketList');
  marketForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const content = document.getElementById('marketContent').value;
    const postDiv = document.createElement('div');
    postDiv.classList.add('post');
    postDiv.textContent = content;
    marketList.appendChild(postDiv);
    document.getElementById('marketContent').value = '';
  });

  // Обработка формы для ЗАДАЧИ
  const taskForm = document.getElementById('taskForm');
  const taskList = document.getElementById('taskList');
  taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('taskTitle').value;
    const description = document.getElementById('taskDescription').value;
    const taskDiv = document.createElement('div');
    taskDiv.classList.add('task');
    taskDiv.innerHTML = `<h3>${title}</h3><p>${description}</p>`;
    taskList.appendChild(taskDiv);
    document.getElementById('taskTitle').value = '';
    document.getElementById('taskDescription').value = '';
  });
});