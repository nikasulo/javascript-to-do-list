import { CreateButton, item, render, list } from './auxiliaries';

let currentList;
const lists = [];

const newList = (e) => {
  openModal(e.id);
}

const createList = () => {
  let form = document.querySelector('list-create-form');
  let title = form[0];
  let description = form[1];
  let dueDate = form[2];
  let priority = form[3];
  let listsContainer = document.querySelector(".lists-container");
  currentList = list(title, description, dueDate, priority);
  lists.push(currentList);
  let currentLists = lists.map((list) => {
    `<div class = "column">
      <div class = "list-title">${this.title}</div>
      ${createButton('create-item', 'New Item', 'Item')};
    </div>`
  });
  render(currentLists, listsContainer);
  closeListModal();
}

const newItem = (e) => {
  openModal(e.id);
}

const createItem = () => {
  let form = document.querySelector('list-create-form');
  let title = form[0];
  currentList = new list(title);
  closeModal();
}

const openModal = (id) => {
  const modal = document.querySelector(`${id}-modal`);
  modal.classList.toggle('.open-modal');
}

const closeListModal = () => {
  const modal = document.querySelector('open-modal');
  modal.classList.toggle('.open-modal');
}

(() => {
  const main = document.createElement('div');
  const nav = document.createElement('nav');
  const navLeft = document.createElement('div');
  const navRight = document.createElement('div');
  const body = document.querySelector('body');
  let listsContainer = document.createElement('div');
  main.classList.add('main');
  nav.classList.add('nav');
  nav.classList.add('row');
  listsContainer.classList.add('list-container');
  listsContainer.classList.add('row');
  nav.appendChild(navLeft);
  nav.appendChild(navRight);
  navRight.innerHTML =  CreateButton('create-list', 'New List');
  main.appendChild(nav);
  main.appendChild(listsContainer);
  body.appendChild(main);
  document.querySelector('#create-list').addEventListener('click', (event) => newList(event));
  document.querySelector('#create-item').addEventListener('click', (event) => newItem(event));
})();
