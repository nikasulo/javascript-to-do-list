export class Item{
  constructor(title, description, dueDate, priority, listId){
    
    this.setTitle = (title) =>{
      this.title = title;
    }
  
    this.setDueDate = (dueDate) =>{
      this.dueDate = dueDate;
    }

    this.setDone = (done) => {
      this.done = done;
    }
  
    this.setItemPriority = (priority) =>{
      this.priority = priority;
    }
  
    this.setDescription = (description) =>{
      this.description = description;
    }
  
    this.setListId = (listId) =>{
      this.listId = listId;
    }

    this.setId = (id) =>{
      this.id = id;
    }

    this.setDueDate(dueDate);
    this.setDescription(description);
    this.setItemPriority(priority);
    this.setListId(listId)
    this.setTitle(title);
    this.setDone(false);
  }
  
}

export class List{
  constructor(){
    this.items = [];

    this.getId = () => this.listId;
    
    this.setId = (id) =>{
      this.id = id;
    }
    
    this.setTitle = (title) => {
      this.title = title;
    }


    this.getTitle = () => this.title;
    this.addItem = (item) => this.items.push(item)
    this.getItems = () => this.items
  }
}

export const itemForm = (listId) => 
  `<form class="item-create-form">
    <div class="fields">
        <input placeholder = "Task name" class='item-title'>
    </div>
    <div class="fields">
      <input placeholder = "Task description" class='itemdescription'>
    </div>
    <div class="fields">
      <input placeholder = "Due date" type="date" class='date'>
    </div>
    <div class="fields">
      <select placeholder = "Priority" class='priority'>
        <option value = "Low">Low</option>
        <option value = "Moderate">Moderate</option>
        <option value = "High">High</option>
      </select>
    </div>
    <div class="actions item-create-action">
      <input type = "submit" value = "Create item" id="${listId}" class="create-item-btn"/>
    </div>
    </form>`

export const render = (template, node) => {
  node.innerHTML = template;
}