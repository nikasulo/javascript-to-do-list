import './stylesheets/main.scss';
import { Item, render, List, listForm, itemForm} 
from './auxiliaries';


const lists = localStorage.getItem('listsArray') ? JSON.parse(localStorage.getItem('listsArray')) : [];

const newList = (e) => {
  openListModal(e)
}

const createList = (e) => {
  e.preventDefault();
  let form = document.querySelector('.list-create-form');
  let title = form[0].value;
  let currentList = new List();
  currentList.setTitle(title);
  currentList.setId(lists.length);
  lists.push(currentList);
  localStorage.setItem('listsArray', JSON.stringify(lists));
  renderLists();
  closeListModal();
}

const markAsDone = (e) => {
  const listId = e.target.dataset.listid
  const itemPosition = e.target.dataset.itemposition;
  const item = lists[listId].items[itemPosition];
  item.setDone(true);
  renderLists(); 
}

const deleteItem = (e) => {
  const listId = e.target.dataset.listid
  const itemId = e.target.dataset.itemposition;
  const list = lists[listId];
  list.items = list.items.filter((item) => item.id != itemId);
  localStorage.setItem('listsArray', JSON.stringify(lists));
  renderLists(); 
}

const renderLists = () => {
  let listsContainer = document.querySelector(".lists-container");
  let currentLists = lists.map((list) => {
    let items = list.items.map((item) => 
    `<div class = "item ${item.priority === 'High' ? 'high' : ''} 
                        ${item.priority === 'Moderate' ? 'moderate' : ''} 
                        ${item.done ? 'done' : ''}">
      <div class="item-heading row">
        <h3>${item.title}</h3>
        <h4>Due: ${item.dueDate}</h4>
      </div>
      <div class="item-description"><p>${item.description}</p></div>
      <div class="item-controls row">
        <button class='done-btn' data-listid = "${list.id}" data-itemposition = "${item.id}">Done</button>
        <button class='delete-btn' data-listid = "${list.id}" data-itemposition = "${item.id}">Delete</button>
      </div>
    </div>
    `)
      
    return (`<div class = "column list">
    <div class = "list-title">${list.title}</div>
    <div class="items-${list.id}">
        ${items.length > 0 ? items.join('') : ''}
        </div>
        <button id = "${list.id}" class = "new-item-btn">New Item</button>
        </div>`)
        
      }).join('')
  render(currentLists, listsContainer);
  const newItemButtons = document.querySelectorAll('.new-item-btn');
  const doneButtons = document.querySelectorAll('.done-btn');
  const deleteButtons = document.querySelectorAll('.delete-btn');
  if (newItemButtons.length > 0){
    newItemButtons.forEach((btn) => btn.addEventListener('click', (event) => newItem(event)));
  }
  if (doneButtons.length > 0){
    doneButtons.forEach((btn) => btn.addEventListener('click', (event) => markAsDone(event)));
  }
  if (deleteButtons.length > 0){
    deleteButtons.forEach((btn) => btn.addEventListener('click', (event) => deleteItem(event)));
  }
  localStorage.setItem('lists', lists);
}

const newItem = (event) => {
  openItemModal(event.target.id);
}

const createItem = (e) => {
  const listId = e.target.id;
  e.preventDefault();
  let form = document.querySelector('.item-create-form');
  let title = form[0].value;
  let description = form[1].value;
  let dueDate = form[2].value;
  let priority = form[3].value;
  let newItem = new Item(title, description, dueDate, priority, false);
  newItem.setId(lists[listId].items.length);
  newItem.setDone(false);
  lists[listId].items.push(newItem);
  localStorage.setItem('listsArray', JSON.stringify(lists));
  renderLists();
  closeListModal();
  closeItemModal();
}

const openListModal = () => {
  const modal = document.querySelector(".create-list-modal");
  modal.classList.toggle('open');
}

const openItemModal = (id) => {
  const modal = document.querySelector(".create-item-modal");
  const form = itemForm(id);
  modal.innerHTML = form;
  closeListModal();
  modal.classList.toggle('open');
  document.querySelector('.create-item-btn').addEventListener('click', (event) => createItem(event));
}

const closeListModal = () => {
  const modal = document.querySelector('.create-list-modal');
  modal.classList.toggle('open');
}

const closeItemModal = () => {
  const modal = document.querySelector('.create-item-modal');
  modal.classList.toggle('open');
}

const addEventListeners = () => {
  document.querySelector('.create-list-btn').addEventListener('click', (event) => createList(event))
  document.querySelector('.new-list-btn').addEventListener('click', newList);
}

const setup = () => {
  if (lists.length === 0){
    let currentList = new List();
    currentList.setTitle("A placeholder list");
    currentList.setId(lists.length);
    
    let title = "An item";
    let description = "A description";
    let dueDate = "12-09-12";
    let priority = "medium";
  
    let newItem = new Item(title, description, dueDate, priority, false);
    newItem.setId(currentList.items.length);
    newItem.setDone(false);
    currentList.items.push(newItem);
  
    lists.push(currentList);
    localStorage.setItem('listsArray', JSON.stringify(lists));
  
  }
  renderLists();
}
document.addEventListener('DOMContentLoaded', addEventListeners());
document.addEventListener('DOMContentLoaded', setup());