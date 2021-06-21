'use strict';

const btnAdd = document.querySelector('.btn-add');
const btnDeleteAll = document.querySelector('.btn-delete__all');
const form = document.querySelector('form');
const ul = document.querySelector('ul');
const li = document.querySelector('li');

// subit data function
const submit = function (e) {
  e.preventDefault();
  let input = document.querySelector('input');
  if (!input) return;
  if (input.value != '') {
    addTask(input.value);
  }
  input.value = '';
};

// add tasks
const addTask = function (task) {
  let markup = `<li ><input class='marked' type="checkbox"><label>${task}</label><a class='delete' href='#'>&#9447</a></li>`;
  ul.insertAdjacentHTML('beforeend', markup);
};

const deleteAllTasks = function () {
  ul.innerHTML = '';
};

const deleteSingleTask = function (e) {
  if (e.target.className == 'delete') {
    const taskToBeRemoved = e.target.parentNode;
    const parent = taskToBeRemoved.parentNode;
    parent.removeChild(taskToBeRemoved);
  }
  // const parent = curTask.parentNode;
  // parent.removeChild(curTask);
};

const addLineThrough = function (e) {
  const task = e.target.nextSibling;
  if (!task) return;
  if (e.target.checked) {
    task.style.textDecoration = 'line-through';
    task.style.color = '#ff0000';
    task.textDecorationThickness = '10px';
  } else {
    task.style.textDecoration = 'none';
    task.style.color = '#2f4f4f';
  }
};

btnDeleteAll.addEventListener('click', deleteAllTasks);

ul.addEventListener('click', addLineThrough);

btnAdd.addEventListener('click', submit);

ul.addEventListener('click', deleteSingleTask);
